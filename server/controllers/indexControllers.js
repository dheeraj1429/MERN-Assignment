const productModel = require("../model/schema/productSchema");
const userModel = require("../model/schema/useSchema");

/**
 * @uploadSingleProduct insert new product
 */
const uploadSingleProduct = async function (req, res, next) {
    try {
        /**
         * @param { name, price } Request upload new product informaton
         * @param {image} String upload product image path information for store the image path in database
         * @return function is returning status about upload product, product is uploaded successful or not.
         */
        const { name, price } = req.body;
        const image = req.files[0];

        if (name && price && image) {
            /**
             * @findProductInDb find the product is already is exists in database or not if the product is exists then return the flag to the client. if the product is not exists then inert new product into the database.
             */
            const findProductInDb = await productModel.findOne({ name, price });

            if (findProductInDb) {
                return res.status(200).json({
                    message: "Product is already exists",
                });
            } else {
                const product = await productModel({
                    name,
                    price,
                    image: image.originalname,
                });

                const productInsert = await product.save();

                if (productInsert) {
                    return res.status(201).json({
                        success: true,
                        message: "product upload successfully",
                    });
                }
            }
        } else {
            return res.status(200).json({
                message: "something worng",
            });
        }
    } catch (err) {
        console.log(err);
    }
};

/**
 *
 * @fetchAllProducts fetch all products
 * @return all fetch products
 */
const fetchAllProducts = async function (req, res, next) {
    try {
        const findAllProducts = await productModel.find();

        if (findAllProducts) {
            return res.status(200).json({
                products: findAllProducts,
            });
        }
    } catch (err) {
        console.log(err);
    }
};

/**
 * @fetchSelectedProduct fetch selected products from the database using request params id
 * @return selected product data.
 */
const fetchSelectedProduct = async function (req, res, next) {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(200).json({
                message: "selected product id is required!!",
            });
        }

        const findProductInDb = await productModel.findOne({ _id: id });

        if (findProductInDb) {
            return res.status(200).json({
                data: findProductInDb,
            });
        } else {
            return res.status(200).json({
                message: "No product found!",
            });
        }
    } catch (err) {
        console.log(err);
    }
};

/**
 *
 * @param { data } Object to contains the information about the produt
 * @param { res } Object
 * @returns product information product is updated successfully and not
 */
const findAndUpdateProduct = async function (data, res) {
    /**
     * @findProductInDbAndUpdate find the product using the id params
     */

    const findProductInDbAndUpdate = await productModel.updateOne(
        { _id: data._id },
        { $set: { name: data.name, price: data.price, image: data.image } }
    );

    if (!!findProductInDbAndUpdate.modifiedCount) {
        return res.status(200).json({
            message: "product information updated",
        });
    } else {
        return res.status(200).json({
            message: "product not found!!",
        });
    }
};

const updateProductInfo = async function (req, res, next) {
    try {
        const { name, price, id } = req.body;
        const image = req.files[0];
        const data = {
            _id: id,
            name,
            price,
        };
        if (!!image) {
            const imageName = image.originalname;
            data.image = imageName;
            await findAndUpdateProduct(data, res);
        } else {
            await findAndUpdateProduct(data, res);
        }
    } catch (err) {
        console.log(err);
    }
};

/**
 * @deleteSingleProduct delete selected product from the database using the pram id
 * @returns flag ( true & false )
 */
const deleteSingleProduct = async function (req, res, next) {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(200).json({
                message: "product id is required",
            });
        }

        const deleteProduct = await productModel.deleteOne({ _id: id });

        console.log(deleteProduct);

        if (deleteProduct.acknowledged && !!deleteProduct.deletedCount) {
            return res.status(200).json({
                success: true,
                message: "product delete successfully",
            });
        } else {
            return res.status(200).json({
                success: false,
                message: "somthing worng",
            });
        }
    } catch (err) {
        console.log(err);
    }
};

const addProductIntoCart = async function (req, res, next) {
    try {
        /**
         * @productId selected product id
         * @userFindInCookie is the user is sign in or not
         * @findProductIsExists if the product is already add to card then incress the quntity of the product
         * @return flag
         */
        const productId = req.params.id;
        let findUserAndInsertProduct;

        if (!productId) {
            return res.status(200).json({
                message: "product id is required",
            });
        }

        const userFindInCookie = await req.cookies.user;

        if (!userFindInCookie) {
            return res.status(200).json({
                message: "there is no user in session",
            });
        } else {
            const { id } = userFindInCookie;

            const findProductIsExists = await userModel.findOne(
                { _id: id },
                { cart: { $elemMatch: { productId: productId } } }
            );

            if (!!findProductIsExists.cart.length) {
                findUserAndInsertProduct = await userModel.updateOne(
                    { _id: id, "cart.productId": productId },
                    { $inc: { "cart.$.qty": 1 } }
                );

                if (!!findUserAndInsertProduct.modifiedCount) {
                    return res.status(200).json({
                        success: true,
                        message: "product quntity incress",
                    });
                }
            } else {
                findUserAndInsertProduct = await userModel.updateOne(
                    { _id: id },
                    { $push: { cart: [{ productId: productId, qty: 1 }] } }
                );

                if (!!findUserAndInsertProduct.modifiedCount) {
                    return res.status(200).json({
                        success: true,
                        message: "product added",
                    });
                } else {
                    return res.status(200).json({
                        success: false,
                        message: "some thing worng",
                    });
                }
            }
        }
    } catch (err) {
        console.log(err);
    }
};

const getCartProducts = async function (req, res, next) {
    try {
        const userFindInCookie = await req.cookies.user;

        if (!userFindInCookie) {
            return res.status(200).json({
                message: "there is no user in session",
            });
        } else {
            const { id } = userFindInCookie;

            const getAllCartProducts = await userModel
                .findOne({ _id: id })
                .populate("cart.productId");

            return res.status(200).json({
                success: true,
                cart: getAllCartProducts.cart,
            });
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    uploadSingleProduct,
    fetchAllProducts,
    fetchSelectedProduct,
    updateProductInfo,
    deleteSingleProduct,
    addProductIntoCart,
    getCartProducts,
};

const productModel = require("../model/schema/productSchema");

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
                    return res.status(200).json({
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

module.exports = {
    uploadSingleProduct,
    fetchAllProducts,
};

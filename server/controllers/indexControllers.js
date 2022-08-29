const productModel = require("../model/schema/productSchema");
const path = require("path");

const uploadSingleProduct = async function (req, res, next) {
    try {
        const { name, price } = req.body;
        const image = req.files[0];

        if (name && price && image) {
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

module.exports = {
    uploadSingleProduct,
};

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: [true, "plase enter the product name"] },
    price: { type: Number, required: [true, "plase enter the product price"] },
    image: { type: String, required: [true, "image name is required"] },
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;

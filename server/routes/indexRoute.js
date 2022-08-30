const express = require("express");
const route = express.Router();
const indexControllers = require("../controllers/indexControllers");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg"
        ) {
            cb(null, "./upload/images");
        }
    },
    filename: function (req, file, cb) {
        if (file) {
            cb(null, file.originalname);
        }
    },
});

// multer middelware fucntion
const upload = multer({ storage: storage }).any();

// Api Route
route.post("/upload", upload, indexControllers.uploadSingleProduct);
route.get("/all-products", indexControllers.fetchAllProducts);
route.get("/get-selected-product/:id", indexControllers.fetchSelectedProduct);
route.patch("/update-product-data", upload, indexControllers.updateProductInfo);
route.delete("/delete-selected-product/:id", indexControllers.deleteSingleProduct);
route.post("/add-product-into-cart/:id", indexControllers.addProductIntoCart);
route.get("/get-all-cards-products", indexControllers.getCartProducts);

module.exports = route;

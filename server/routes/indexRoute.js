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
        cb(null, file.originalname);
    },
});

// multer middelware fucntion
const upload = multer({ storage: storage }).any();

// Api Route
route.post("/upload", upload, indexControllers.uploadSingleProduct);

module.exports = route;

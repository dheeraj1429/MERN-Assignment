const express = require("express");
const route = express.Router();

const authController = require("../controllers/authController");

route.post("/sign-in-user", authController.userSignIn);

module.exports = route;

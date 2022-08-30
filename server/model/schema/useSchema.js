const mongoose = require("mongoose");

const useSchema = new mongoose.Schema({
    name: { type: String, reuqired: [true, "user name is required"] },
    email: { type: String, reuqired: [true, "user email is reqiired"] },
    password: { type: String, reuqired: [true, "use account password is required"] },
    cart: [
        {
            productId: { type: mongoose.Types.ObjectId, ref: "product" },
            qty: { type: Number, default: 0 },
        },
    ],
});

const userModel = mongoose.model("user", useSchema);

module.exports = userModel;

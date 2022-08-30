const userModel = require("../model/schema/useSchema");

const userSignIn = async function (req, res, next) {
    try {
        const { name, email, password } = req.body;

        const insertUser = await userModel({
            name,
            email,
            password,
        });

        const saveUser = await insertUser.save();

        if (saveUser) {
            const cookieSaveObject = {
                name: saveUser.name,
                email: saveUser.email,
                id: saveUser._id,
            };

            res.cookie("user", cookieSaveObject);
            return res.status(200).json({
                name: cookieSaveObject.name,
                email: cookieSaveObject.email,
                id: saveUser._id,
            });
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    userSignIn,
};

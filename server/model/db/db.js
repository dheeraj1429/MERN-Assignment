const mogoose = require("mongoose");

const databaseConnectionFunction = function (callback) {
    mogoose
        .connect(process.env.URL)
        .then((res) => {
            callback();
            console.log("database conneted");
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = databaseConnectionFunction;

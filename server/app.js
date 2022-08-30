require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const http = require("http").createServer(app);
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const databaseConnectionFunction = require("./model/db/db");

// routes files
const indexRoute = require("./routes/indexRoute");
const authRoute = require("./routes/authRoute");

// middlewares
// server upload folder static
app.use(express.static(path.join(__dirname, "upload")));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(logger());
app.use(cors());
app.use(helmet());

// routes
app.use("/", indexRoute);
app.use("/auth", authRoute);

// server
databaseConnectionFunction(() => {
    http.listen(port, () => {
        console.log(`server listen in port ${port}`);
    });
});

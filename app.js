const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(cors());
const errorMiddleware = require("./middleware/error");
app.use(express.json());
app.use(cookieParser());

//Route Import
const userRoute = require("./routes/userRoute");

app.use("/api/v1", userRoute);

//middleware for Error
app.use(errorMiddleware);
module.exports = app;

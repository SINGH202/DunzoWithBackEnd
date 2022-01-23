const express = require("express");
const multer = require("multer");

const connect = require("./configs/db");
const connect_product = require("./configs/db.product");

const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller")

const shopController = require("./controllers/shop.controller")

app.use("/user", userController);

app.use("/users", userController);

app.use("/shop", shopController);

app.set("view engine", "ejs");

app.listen(7658, async () => {
    await connect();
    await connect_product();
    console.log("listening to port 123456");
});
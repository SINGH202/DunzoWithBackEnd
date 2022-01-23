const express = require("express");
const router = express.Router();

const Shop = require("../models/shop.model")

router.get("/", async(req, res) =>{
    try {
        const shop = await Shop.find().lean().exec();
        return res.status(200).send(shop);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

router.post("/", async(req, res) => {
    try {
        const shop = await Shop.create(req.body);
        return res.status(201).send(shop);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})


module.exports = router;
const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");

router.get("", async (req,res) =>{
    try{
        // console.log(path.join(__dirname,'../uploads'))
        const products = await Product.find().lean().exec();

        return res.status(200).send(products)
    }
    catch(err){
        return res.status(500).send(err.message);
    }
});

router.post("",async (req,res) =>{
    try{
        // console.log("path", req.file.path);

        const product = await Product.create(req.body);

        return res.status(200).send(product);
    }
    catch(err){
        return res.status(500).send(err.message); 
    }
});


module.exports = router;
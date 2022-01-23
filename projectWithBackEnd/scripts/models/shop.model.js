const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
    name:{type:String, required:true},
    category:{type:String, required:true},
    image_url:{type:String, required:true},
    travel_time:{type:Number, required:true}
},{
    versionKey:false,
    timestamps:true
})

const Shop = mongoose.model("shop", shopSchema);
module.exports = Shop
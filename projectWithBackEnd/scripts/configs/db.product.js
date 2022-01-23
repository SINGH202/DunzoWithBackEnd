const mongoose = require("mongoose");

module.exports = () =>{
    return mongoose.connect_product("mongodb+srv://singh202:Anurag_1@cluster0.l0flr.mongodb.net/dunzo")
}
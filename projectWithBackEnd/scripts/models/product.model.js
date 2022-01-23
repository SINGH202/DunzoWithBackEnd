const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        p_name: {type: String, required: true},
        p_price: {type: Number, required: true},
        category: {type: String, required: true},
        p_image: {type: String, required: true},
        shop_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "shop",
            required: true,
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("product", productSchema);
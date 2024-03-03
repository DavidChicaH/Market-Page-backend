import mongoose, { Schema } from "mongoose";
import "dotenv/config";

const cartSchema  = new Schema({
    user_id: Number,
    date: { type: Date, default: Date.now },
    products: [
        {
            product_id: Number,
            quantity: Number
        }
    ]
})

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
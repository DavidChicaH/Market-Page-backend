import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    date: {type: Date, default: Date.now},
    id: {type: Number, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    quantity: {type: Number, required: true}
})

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;

import mongoose, { Schema } from "mongoose";

const cardSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    detail: { type: [Object], required: true },
    address: { type: String, required: true },
    date: { type: String, required: true },
    phone: { type: String, required: true },
    total: { type: Number, required: true },
});

const Order = mongoose.model('Order', cardSchema);

export default Order;
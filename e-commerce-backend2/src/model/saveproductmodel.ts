import { model, Schema } from "mongoose";

const savedProductsSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    imageurl: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    information: {
        type: String,
        required: true,
    },
})

export const savedProduct = model("savedProducts", savedProductsSchema)
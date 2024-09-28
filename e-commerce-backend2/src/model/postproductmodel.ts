import { model, Schema } from "mongoose";

const postProductsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    barCode: {
        type: Number,
        required: true,
    },
})

export const postProduct = model("postProducts", postProductsSchema)
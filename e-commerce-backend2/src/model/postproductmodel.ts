import { model, Schema } from "mongoose";

const postProductsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    information: {
        type: String,
        required: true,
    },
    barCode: {
        type: Number,
        required: true,
    },
    imageurl: {
        type: [],
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    leftquantity: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
    },
    addTag: {
        type: String,
        required: true,
    },
    color: {
        type:[],
        required: true,
    },
    size: {
        type:[],
        required: true,
    },
})

export const postProduct = model("postProducts", postProductsSchema)
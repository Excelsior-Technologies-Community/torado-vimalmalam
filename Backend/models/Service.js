import { Schema, model } from "mongoose";

const serviceSchema = new Schema(
    {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        bullets: {
            type: [String],
            default: [],
        },
        order: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

export default model("Service", serviceSchema);

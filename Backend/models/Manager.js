import { Schema, model } from "mongoose";

const managerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    profileImage: {
        type: String
    },
    signatureImage: {
        type: String
    }
});

export default model("Manager", managerSchema);
const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Manager", managerSchema);
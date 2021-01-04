const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter your name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "please enter your email"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "please enter your password"],
        trim: true,
    },
    role: {
        type: Number,
        default: 0,
    },
    avater: {
        type: String,
        default: "https://picsum.photos/id/237/200/300"
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)
const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    author: {
        type: String,
        unique: false,
        required: false,
        default: "Unknown author"
    },
    rating: {
        type: Number,
        default: "0.0"
    },
});

const Books = mongoose.model("books", booksSchema);

module.exports = Books;
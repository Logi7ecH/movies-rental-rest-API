const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    year: {
        required: true,
        type: Number,
    },
    score: {
        required: true,
        type: Number,
    }
})

module.exports = mongoose.model('Movies', movieSchema);
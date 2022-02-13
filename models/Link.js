const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '(No description)' },
    url: { type: String, required: true },
    clicks: { type: Number, default: 0 }
})

modules.exports = mongoose.model('Link', linkSchema)
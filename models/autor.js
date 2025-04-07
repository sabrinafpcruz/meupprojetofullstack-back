// models/autor.js
const mongoose = require('mongoose');

const autorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    nacionalidade: { type: String, required: true },
    anosVida: { type: String }
});

const Autor = mongoose.model('Autor', autorSchema);
module.exports = Autor;

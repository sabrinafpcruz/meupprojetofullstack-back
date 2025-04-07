// models/livros.js
const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    genero: { type: String, required: true },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Autor' } 
});

const Livro = mongoose.model('Livro', livroSchema);
module.exports = Livro;

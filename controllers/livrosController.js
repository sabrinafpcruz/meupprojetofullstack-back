// controllers/livrosController.js
const Livro = require('../models/livros'); // caminho certo

exports.createLivro = async (req, res) => {
    try {
        const { titulo, genero, autor } = req.body;
        const livro = new Livro({ titulo, genero });
        if (autor) livro.autor = autor;
        await livro.save();
        res.status(201).json(livro);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getLivros = async (req, res) => {
    try {
        const livros = await Livro.find().populate('autor', 'name');
        res.status(200).json(livros);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getLivroById = async (req, res) => {
    try {
        const livro = await Livro.findById(req.params.id).populate('autor', 'name');
        if (!livro) return res.status(404).json({ message: 'Livro não encontrado' });
        res.status(200).json(livro);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateLivro = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, genero, autor } = req.body;
        const updateData = { titulo, genero };
        if (autor) updateData.autor = autor;

        const updatedLivro = await Livro.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedLivro) return res.status(404).json({ message: 'Livro não encontrado' });
        res.status(200).json(updatedLivro);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteLivro = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedLivro = await Livro.findByIdAndDelete(id);
        if (!deletedLivro) return res.status(404).json({ message: 'Livro não encontrado' });
        res.status(200).json({ message: 'Livro excluído com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

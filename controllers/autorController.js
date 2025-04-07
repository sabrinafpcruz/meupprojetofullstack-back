const Autor = require('../models/autor');

// Criar novo autor
exports.createAutor = async (req, res) => {
    try {
        const { name, nacionalidade, anosVida } = req.body;
        const autor = new Autor({ name, nacionalidade, anosVida });
        await autor.save();
        res.status(201).json(autor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar todos os autores
exports.getAutores = async (req, res) => {
    try {
        const autores = await Autor.find();
        res.status(200).json(autores);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Buscar autor por ID
exports.getAutorById = async (req, res) => {
    try {
        const autor = await Autor.findById(req.params.id);
        if (!autor) {
            return res.status(404).json({ message: 'Autor não encontrado' });
        }
        res.status(200).json(autor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar autor
exports.updateAutor = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, nacionalidade, anosVida } = req.body;

        const updatedAutor = await Autor.findByIdAndUpdate(
            id,
            { name, nacionalidade, anosVida },
            { new: true }
        );

        if (!updatedAutor) {
            return res.status(404).json({ message: 'Autor não encontrado' });
        }

        res.status(200).json(updatedAutor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Excluir autor
exports.deleteAutor = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAutor = await Autor.findByIdAndDelete(id);
        if (!deletedAutor) {
            return res.status(404).json({ message: 'Autor não encontrado' });
        }

        res.status(200).json({ message: 'Autor excluído com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

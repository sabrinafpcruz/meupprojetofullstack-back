// routes/livrosRoutes.js
const express = require('express');
const router = express.Router();
const {
    createLivro,
    getLivros,
    getLivroById,
    updateLivro,
    deleteLivro
} = require('../controllers/livrosController');

router.post('/', createLivro);
router.get('/', getLivros);
router.get('/:id', getLivroById);
router.put('/:id', updateLivro);
router.delete('/:id', deleteLivro);

module.exports = router;

const express = require('express');
const router = express.Router();
const { createAutor, getAutores, updateAutor, deleteAutor, getAutorById } = require('../controllers/autorController');

router.post('/', createAutor);
router.get('/', getAutores);
router.get('/:id', getAutorById);
router.put('/:id', updateAutor);
router.delete('/:id', deleteAutor); 

module.exports = router;

const express = require('express');
const router = express.Router();
const bukuController = require('../controllers/bukuController');

router.get('/', bukuController.getAllBooks);
router.get('/:id', bukuController.getBookById);
router.post('/', bukuController.addBook);
router.put('/:id', bukuController.updateBook);
router.delete('/:id', bukuController.deleteBook);

module.exports = router;

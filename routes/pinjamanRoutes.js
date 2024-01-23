const express = require('express');
const router = express.Router();
const pinjamanController = require('../controllers/pinjamanController');

router.get('/', pinjamanController.getAllPinjaman);
router.get('/:id', pinjamanController.getPinjamanById);
router.post('/', pinjamanController.addPinjaman);
router.put('/:id', pinjamanController.updatePinjaman);
router.delete('/:id', pinjamanController.deletePinjaman);

module.exports = router;
const db = require('../db');

exports.getAllKategori = (req, res) => {
  db.query('SELECT * FROM kategori', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.getKategoriById = (req, res) => {
  const kategoriId = req.params.id;
  db.query('SELECT * FROM kategori WHERE id = ?', [kategoriId], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

exports.addKategori = (req, res) => {
  const { nama_kategori } = req.body;
  db.query('INSERT INTO kategori (nama_kategori) VALUES (?)', [nama_kategori], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Kategori added successfully', id: result.insertId });
  });
};

exports.updateKategori = (req, res) => {
  const kategoriId = req.params.id;
  const { nama_kategori } = req.body;
  db.query('UPDATE kategori SET nama_kategori = ? WHERE id = ?', [nama_kategori, kategoriId], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Kategori updated successfully' });
  });
};

exports.deleteKategori = (req, res) => {
  const kategoriId = req.params.id;
  db.query('DELETE FROM kategori WHERE id = ?', [kategoriId], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Kategori deleted successfully' });
  });
};

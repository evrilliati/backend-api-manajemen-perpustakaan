const db = require('../db');

exports.getAllBooks = (req, res) => {
  db.query('SELECT buku.*, kategori.nama_kategori FROM buku LEFT JOIN kategori ON buku.id_kategori = kategori.id', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.getBookById = (req, res) => {
  const bookId = req.params.id;
  db.query('SELECT buku.*, kategori.nama_kategori FROM buku LEFT JOIN kategori ON buku.id_kategori = kategori.id WHERE buku.id = ?', [bookId], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

exports.addBook = (req, res) => {
  const { judul, pengarang, tahun_terbit, id_kategori } = req.body;
  db.query('INSERT INTO buku (judul, pengarang, tahun_terbit, id_kategori) VALUES (?, ?, ?, ?)', [judul, pengarang, tahun_terbit, id_kategori], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Book added successfully', id: result.insertId });
  });
};

exports.updateBook = (req, res) => {
  const bookId = req.params.id;
  const { judul, pengarang, tahun_terbit, id_kategori } = req.body;
  db.query('UPDATE buku SET judul = ?, pengarang = ?, tahun_terbit = ?, id_kategori = ? WHERE id = ?', [judul, pengarang, tahun_terbit, id_kategori, bookId], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Book updated successfully' });
  });
};

exports.deleteBook = (req, res) => {
  const bookId = req.params.id;
  db.query('DELETE FROM buku WHERE id = ?', [bookId], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Book deleted successfully' });
  });
};

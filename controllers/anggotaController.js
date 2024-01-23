const db = require('../db');

exports.getAllAnggota = (req, res) => {
  db.query('SELECT * FROM anggota', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.getAnggotaById = (req, res) => {
  const anggotaId = req.params.id;
  db.query('SELECT * FROM anggota WHERE id = ?', [anggotaId], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

exports.addAnggota = (req, res) => {
  const { nama, alamat, email } = req.body;
  db.query('INSERT INTO anggota (nama, alamat, email) VALUES (?, ?, ?)', [nama, alamat, email], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Anggota added successfully', id: result.insertId });
  });
};

exports.updateAnggota = (req, res) => {
  const anggotaId = req.params.id;
  const { nama, alamat, email } = req.body;
  db.query('UPDATE anggota SET nama = ?, alamat = ?, email = ? WHERE id = ?', [nama, alamat, email, anggotaId], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Anggota updated successfully' });
  });
};

exports.deleteAnggota = (req, res) => {
  const anggotaId = req.params.id;

  // Hapus terlebih dahulu catatan peminjaman yang terhubung dengan anggota yang akan dihapus
  db.query('DELETE FROM pinjaman WHERE id_anggota = ?', [anggotaId], (err, result) => {
    if (err) throw err;

    // Setelah menghapus catatan peminjaman, lanjutkan dengan menghapus anggota
    db.query('DELETE FROM anggota WHERE id = ?', [anggotaId], (err, result) => {
      if (err) throw err;
      res.json({ message: 'Anggota dan catatan peminjaman berhasil dihapus' });
    });
  });
};
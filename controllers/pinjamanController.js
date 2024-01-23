const db = require('../db');

exports.getAllPinjaman = (req, res) => {
  db.query('SELECT * FROM pinjaman', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.getPinjamanById = (req, res) => {
  const pinjamanId = req.params.id;
  db.query('SELECT * FROM pinjaman WHERE id = ?', [pinjamanId], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

exports.addPinjaman = (req, res) => {
  const { id_anggota, id_buku, tanggal_pinjam, tanggal_kembali } = req.body;
  db.query('INSERT INTO pinjaman (id_anggota, id_buku, tanggal_pinjam, tanggal_kembali) VALUES (?, ?, ?, ?)',
    [id_anggota, id_buku, tanggal_pinjam, tanggal_kembali],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Pinjaman added successfully', id: result.insertId });
    }
  );
};

exports.updatePinjaman = (req, res) => {
  const pinjamanId = req.params.id;
  const { id_anggota, id_buku, tanggal_pinjam, tanggal_kembali } = req.body;
  db.query('UPDATE pinjaman SET id_anggota = ?, id_buku = ?, tanggal_pinjam = ?, tanggal_kembali = ? WHERE id = ?',
    [id_anggota, id_buku, tanggal_pinjam, tanggal_kembali, pinjamanId],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Pinjaman updated successfully' });
    }
  );
};

exports.deletePinjaman = (req, res) => {
  const pinjamanId = req.params.id;
  db.query('DELETE FROM pinjaman WHERE id = ?', [pinjamanId], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Pinjaman deleted successfully' });
  });
};

// ... (Implementasi fungsi-fungsi lainnya sesuai kebutuhan)

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Database Configuration
const db = require('./db');

// Routes
const bukuRoutes = require('./routes/bukuRoutes');
const anggotaRoutes = require('./routes/anggotaRoutes');
const pinjamanRoutes = require('./routes/pinjamanRoutes');
const kategoriRoutes = require('./routes/kategoriRoutes'); // Tambahkan ini

app.use('/buku', bukuRoutes);
app.use('/anggota', anggotaRoutes);
app.use('/pinjaman', pinjamanRoutes);
app.use('/kategori', kategoriRoutes); // Tambahkan ini

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

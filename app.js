const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000; // ubah sesuaikan port yang kamu inginkan

app.use(bodyParser.json());

// Konfigurasi koneksi MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Ubah ini menjadi nama pengguna MySQL kamu contoh: root
  password: '', // Ubah ini ke kata sandi MySQL kamu contoh jika tidak memiliki password kosongkan
  database: 'dbkontak', // Ubah ini menjadi nama database Anda contoh : dbkontak
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Jalur Root
app.get('/', (req, res) => {
  res.send('API Sukses!');
});

// POST rute untuk menambahkan kontak baru
app.post('/api/kontak', (req, res) => {
  const { nama, email, nohp } = req.body;

  if (!nama || !email || !nohp) {
    return res.status(400).json({ error: 'Nama, email, and nohp are required fields' });
  }

  const newKontak = { nama, email, nohp };

  pool.execute('INSERT INTO kontak SET ?', [newKontak], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error inserting data into the database' });
    } else {
      newKontak.id = results.insertId;
      res.status(201).json(newKontak);
    }
  });
});

// PUT rute untuk memperbarui informasi kontak
app.put('/api/kontak/:id', (req, res) => {
  const contactId = parseInt(req.params.id);
  const { nama, email, nohp } = req.body;

  if (!nama || !email || !nohp) {
    return res.status(400).json({ error: 'Nama, email, and nohp are required fields' });
  }

  const updatedContact = { nama, email, nohp };

  pool.execute('UPDATE kontak SET ? WHERE id = ?', [updatedContact, contactId], (err) => {
    if (err) {
      res.status(500).json({ error: 'Error updating data in the database' });
    } else {
      res.json({ message: 'Contact updated successfully' });
    }
  });
});

// DELETE rute untuk menghapus kontak
app.delete('/api/kontak/:id', (req, res) => {
  const contactId = parseInt(req.params.id);

  pool.execute('DELETE FROM kontak WHERE id = ?', [contactId], (err) => {
    if (err) {
      res.status(500).json({ error: 'Error deleting data from the database' });
    } else {
      res.json({ message: 'Contact deleted successfully' });
    }
  });
});

// GET rute untuk mengambil semua pengguna
app.get('/api/kontak', (req, res) => {
  pool.execute('SELECT * FROM kontak', (err, results) => {
    if (err) {
      console.error('Error retrieving data from the database: ', err);
      res.status(500).json({ error: 'Error retrieving data from the database' });
    } else {
      res.json(results);
    }
  });
});

// Tutup koneksi MySQL ketika server dihentikan
process.on('SIGINT', () => {
  pool.end();
  process.exit();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

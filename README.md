# Node.js API Basic Example
Membuat Api sederhana menggunakan Node.Js. Baca Dokumentasi dari [Node.js](https://www.example.com/](https://nodejs.org/docs/latest/api/)https://nodejs.org/docs/latest/api/) untuk informasi lebih lanjut.

- **Endpoint CRUD:** API ini menyediakan endpoint untuk operasi CRUD pada entitas tertentu.
- **Penggunaan Express:** Menggunakan framework Express.js untuk mempermudah penanganan rute dan middleware.
- **Koneksi Database:** Terhubung ke database (misalnya phpmyadmin) untuk menyimpan data entitas.
- **Validasi Input:** Melakukan validasi input sebelum memproses permintaan.


## Instalasi

Pastikan anda memiliki npm (Node Package Manager), Anda perlu menginstal Node.js di sistem Anda. npm adalah manajer paket yang dikemas bersama dengan Node.js.
Jadi, jika Anda ingin menggunakan npm, Anda hanya perlu mengunduh dan menginstal Node.js. Berikut adalah langkah-langkah umumnya:
**Unduh Node.js:**

1. **Unduh Node.js:**
   - Kunjungi situs resmi Node.js: [https://nodejs.org/](https://nodejs.org/).
   - Unduh versi LTS (Long Term Support) yang direkomendasikan untuk stabilitas.

2. **Instal Node.js:**
   - Jalankan installer Node.js yang diunduh.
   - Ikuti petunjuk instalasi yang disediakan.

3. **Verifikasi Instalasi:**
   - Buka terminal atau command prompt.
   - Jalankan perintah berikut untuk memeriksa instalasi Node.js dan npm:
     ```bash
     node -v
     npm -v
     ```
     Jika instalasinya berhasil, Anda akan melihat versi Node.js dan npm.

4. Clone repositori ini menggunakan Node.Js prompt atau terminal:

    ```bash
    git clone https://github.com/<username>/node-api-basic-example.git
    ```

5. Buka direktori proyek:

    ```bash
    cd node-api-basic-example
    ```

6. Instal dependensi:

    ```bash
    npm install express

    ```
     ```bash
    npm install mysql2

    ```

7. setelah itu edit app.js sesuaikan koneksi anda pada script yang berada di app.js
   buka file dengan menjalankan
    ```bash
    code .

    ```

8. jalankan xampp dan run program pada terminal:
    ```bash
    node app.js

    ```
    Buka link yang muncul (http://localhost:3000/).

## Penggunaan

1. Lakukan permintaan HTTP ke endpoint yang sesuai dengan operasi yang diinginkan (GET, POST, PUT, DELETE).
2. Gunakan alat seperti [Postman](https://www.postman.com/) untuk menguji API.
   Contoh permintaan untuk menambahkan entitas baru (POST):

```http
POST http://localhost:3000/api/kontak
Content-Type: application/json

{
  "id": "1",
  "name": "Fakhri Abdillah",
  "email": "fakriggwp@gmail.com"
  "nohp": "082938291823"

}
  ``` 

## End

Terima kasih telah mengunjungi repositori ini! Jika Anda memiliki pertanyaan, saran, atau kontribusi, jangan ragu untuk memberikan masukan. saya sangat menghargai setiap kontribusi dari komunitas.

**Happy coding!**

---

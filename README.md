# Tugas 2 - Array Function

## Identitas

- **Nama:** Muhammad Rifqy Habibi
- **NIM:** F1D02410080
- **Mata Kuliah:** Pemrograman Web Lanjut

## Deskripsi Tugas

Tugas ini membahas penggunaan enam metode Array pada JavaScript, yaitu
`map()`, `filter()`, `reduce()`, `find()`, `some()`, dan `every()`.

Data yang digunakan berupa array of object yang berisi data produk.
Data dibuat sendiri dan terdiri dari 10 elemen unik. Setiap produk
memiliki kode yang menggunakan NIM sebagai bagian dari identitas data.

Tujuan dari tugas ini adalah untuk memahami penggunaan metode-metode
Array dalam mengolah, menyaring, mencari, dan memeriksa data.

## Data yang Digunakan

Data yang digunakan berupa data produk dengan beberapa atribut berikut:

- `kode`
- `nama`
- `kategori`
- `harga`
- `stok`

Jumlah data yang digunakan adalah 10 produk.

## Implementasi

### 1. map()

**Tujuan:**

Mengubah setiap elemen array menjadi bentuk data baru.

**Kasus:**

Mengambil nama produk dan kategori kemudian menggabungkannya dengan
format:

`Nama Produk - Kategori`

**Kode:**

![MAP KODE](screenshot/MAP%20KODE.png)

**Hasil Eksekusi:**

![MAP RESULT](screenshot/MAP%20RESULT.png)

---

### 2. filter()

**Tujuan:**

Menyaring elemen array berdasarkan kondisi tertentu.

**Kasus:**

Menampilkan produk yang memiliki harga lebih dari Rp500.000.

**Kode:**

![FILTER KODE](screenshot/FILTER%20KODE.png)

**Hasil Eksekusi:**

![FILTER RESULT](screenshot/FILTER%20RESULT.png)

---

### 3. reduce()

**Tujuan:**

Menggabungkan seluruh elemen array menjadi satu nilai.

**Kasus:**

Menghitung total nilai persediaan seluruh produk menggunakan rumus:

`harga × stok`

Kemudian hasil dari setiap produk dijumlahkan untuk mendapatkan total
nilai persediaan.

**Kode:**

![REDUCE KODE](screenshot/REDUCE%20KODE.png)

**Hasil Eksekusi:**

![REDUCE RESULT](screenshot/REDUCE%20RESULT.png)

---

### 4. find()

**Tujuan:**

Mencari satu elemen pertama yang memenuhi kondisi tertentu.

**Kasus:**

Mencari produk dengan nama `Headset`.

**Kode:**

![FIND KODE](screenshot/FIND%20KODE.png)

**Hasil Eksekusi:**

![FIND RESULT](screenshot/FIND%20RESULT.png)

---

### 5. some()

**Tujuan:**

Mengecek apakah terdapat minimal satu elemen yang memenuhi kondisi
tertentu.

**Kasus:**

Mengecek apakah terdapat produk yang memiliki stok kurang dari 7.

Hasil dari metode `some()` berupa nilai boolean, yaitu `true` atau
`false`.

**Kode:**

![SOME KODE](screenshot/SOME%20KODE.png)

**Hasil Eksekusi:**

![SOME RESULT](screenshot/SOME%20RESULT.png)

---

### 6. every()

**Tujuan:**

Mengecek apakah seluruh elemen array memenuhi kondisi tertentu.

**Kasus:**

Mengecek apakah semua produk memiliki stok lebih dari 0.

Hasil dari metode `every()` berupa nilai boolean, yaitu `true` atau
`false`.

**Kode:**

![EVERY KODE](screenshot/EVERY%20KODE.png)

**Hasil Eksekusi:**

![EVERY RESULT](screenshot/EVERY%20RESULT.png)

---

## Perbedaan Keenam Metode

| Method     | Kegunaan                                             |
| ---------- | ---------------------------------------------------- |
| `map()`    | Mengubah setiap elemen menjadi bentuk baru           |
| `filter()` | Menyaring elemen berdasarkan kondisi                 |
| `reduce()` | Menggabungkan seluruh elemen menjadi satu hasil      |
| `find()`   | Mencari satu elemen yang memenuhi kondisi            |
| `some()`   | Mengecek apakah minimal satu elemen memenuhi kondisi |
| `every()`  | Mengecek apakah seluruh elemen memenuhi kondisi      |

## Hasil Penggunaan Metode

Berdasarkan implementasi yang telah dilakukan:

- `map()` menghasilkan daftar nama produk beserta kategorinya.
- `filter()` menghasilkan daftar produk dengan harga lebih dari
  Rp500.000.
- `reduce()` menghasilkan total nilai persediaan seluruh produk.
- `find()` menemukan data produk dengan nama `Headset`.
- `some()` menghasilkan `true` karena terdapat produk dengan stok
  kurang dari 7.
- `every()` menghasilkan `true` karena seluruh produk memiliki stok
  lebih dari 0.

## Kesimpulan

Dari tugas ini dapat dipahami bahwa setiap metode Array memiliki fungsi
yang berbeda dalam pengolahan data JavaScript.

`map()` digunakan ketika setiap elemen perlu diubah menjadi bentuk baru,
sedangkan `filter()` digunakan untuk mengambil elemen yang memenuhi
kondisi tertentu.

`reduce()` digunakan untuk mengolah seluruh elemen menjadi satu nilai,
seperti menghitung total. `find()` digunakan untuk mencari satu elemen
yang memenuhi kondisi tertentu.

Sementara itu, `some()` digunakan untuk mengetahui apakah terdapat
minimal satu elemen yang memenuhi kondisi, sedangkan `every()` digunakan
untuk memastikan bahwa seluruh elemen memenuhi kondisi.

Dengan menggunakan metode-metode tersebut, pengolahan data Array dapat
dilakukan dengan lebih terstruktur, sederhana, dan mudah dibaca.

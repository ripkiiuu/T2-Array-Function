const produk = [
  {
    kode: "F1D02410080-01",
    nama: "Laptop",
    kategori: "Elektronik",
    harga: 8500000,
    stok: 5,
  },
  {
    kode: "F1D02410080-02",
    nama: "Mouse",
    kategori: "Elektronik",
    harga: 250000,
    stok: 20,
  },
  {
    kode: "F1D02410080-03",
    nama: "Keyboard",
    kategori: "Elektronik",
    harga: 450000,
    stok: 15,
  },
  {
    kode: "F1D02410080-04",
    nama: "Tas",
    kategori: "Fashion",
    harga: 350000,
    stok: 8,
  },
  {
    kode: "F1D02410080-05",
    nama: "Sepatu",
    kategori: "Fashion",
    harga: 750000,
    stok: 12,
  },
  {
    kode: "F1D02410080-06",
    nama: "Buku",
    kategori: "Pendidikan",
    harga: 80000,
    stok: 30,
  },
  {
    kode: "F1D02410080-07",
    nama: "Pulpen",
    kategori: "Pendidikan",
    harga: 15000,
    stok: 50,
  },
  {
    kode: "F1D02410080-08",
    nama: "Headset",
    kategori: "Elektronik",
    harga: 600000,
    stok: 10,
  },
  {
    kode: "F1D02410080-09",
    nama: "Jam Tangan",
    kategori: "Fashion",
    harga: 1200000,
    stok: 6,
  },
  {
    kode: "F1D02410080-10",
    nama: "Kalkulator",
    kategori: "Pendidikan",
    harga: 175000,
    stok: 18,
  },
];

console.log("=================================================");
console.log("DATA PRODUK");
console.log("=================================================");
console.table(produk);

// MAP
const daftarProduk = produk.map((item) => `${item.nama} - ${item.kategori}`);

console.log("\n=================================================");
console.log("1. MAP()");
console.log("=================================================");
console.log("Daftar produk dan kategori:");
console.log(daftarProduk);

// FILTER
const produkDiAtas500Ribu = produk.filter((item) => item.harga > 500000);

console.log("\n=================================================");
console.log("2. FILTER()");
console.log("=================================================");
console.log("Produk dengan harga di atas Rp500.000:");
console.table(produkDiAtas500Ribu);

// REDUCE
const totalNilaiPersediaan = produk.reduce(
  (total, item) => total + item.harga * item.stok,
  0,
);

console.log("\n=================================================");
console.log("3. REDUCE()");
console.log("=================================================");
console.log(
  "Total nilai persediaan: Rp" + totalNilaiPersediaan.toLocaleString("id-ID"),
);

// FIND
const produkDitemukan = produk.find((item) => item.nama === "Headset");

console.log("\n=================================================");
console.log("4. FIND()");
console.log("=================================================");
console.log("Produk yang dicari: Headset");
console.log("Hasil pencarian:");
console.log(produkDitemukan);

// SOME
const adaStokRendah = produk.some((item) => item.stok < 7);

console.log("\n=================================================");
console.log("5. SOME()");
console.log("=================================================");
console.log("Apakah ada produk dengan stok kurang dari 7?", adaStokRendah);

// EVERY
const semuaMemilikiStok = produk.every((item) => item.stok > 0);

console.log("\n=================================================");
console.log("6. EVERY()");
console.log("=================================================");
console.log(
  "Apakah semua produk memiliki stok lebih dari 0?",
  semuaMemilikiStok,
);

console.log("\n=================================================");
console.log("SELESAI");
console.log("=================================================");

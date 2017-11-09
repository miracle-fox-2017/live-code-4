// Buatlah kelas bernama Cart, kelas ini berfungsi untuk meng-handle proses pembelian hingga ke pembayaran. //Cart akan menyimpan banyak objek Item (spesifikasi akan dijelaskan). Cart memiliki beberapa method sebagai //berikut:
// addItem, untuk menambahkan item ke dalam cart
// removeItem, untuk menghapus item dari cart berdasarkan nama
// editItemQuantity, untuk mengubah jumlah belanjaan suatu item berdasarkan nama
// checkout, untuk menampilkan detail belanja dan total uang yang dibelanjakan
//
// Buatlah kelas bernama Item, kelas ini hanya untuk mendeskripsikan item yang dibeli berupa nama, harga satuan, dan jumlah yang dibeli.
//
// Gambaran kerja program nanti kira-kira sebagai berikut

class Cart {
  constructor(item,tambah,harga) {
    this.item = item;
    this.tambah = tambah;
    this.harga = harga;
  }

  static addItem() {
    return this.tambah++
  }

  static removeItem() {

  }

  static itemQuantity() {

  }

  static checkout() {

  }
}

class Item {
  constructor(nama, satuan, harga) {
    this.nama   = nama;
    this.satuan = satuan;
    this.harga  = harga;
  }
}

let cart = new Cart(); // objek cart
cart.addItem(new Item(‘pensil’, 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item(‘buku’, 20, 200));
cart.addItem(new Item(‘ondel-ondel’, 1, 1000000));
cart.editItemQuantity(‘pensil’, 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem(‘buku’); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total

/* contoh detail belanjaan
DETAIL BELANJA
pensil - 60 pcs - @ 100 - total: 6000
ondel-ondel - 1 pcs - @ 1000000 - total: 1000000
TOTAL BELANJA: 1006000
*/

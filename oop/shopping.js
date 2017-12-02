class Cart {

  addItem(body) {
    console.log(`tambahkan belanja ${body.banyak} ${body.barang}, harga per-item ${body.harga}`);
  }

  removeItem(param) {

  }

  editItemQuantity(barang, jumlah) {
    console.log(`mengubah belanjaan ${barang} menjadi ${jumlah} buah`);
  }

  checkout() {

  }

}

class Item {
  constructor (barang, banyak, harga) {
    this.barang = barang;
    this.banyak = banyak;
    this.harga = harga;
  }
}

let cart = new Cart(); // objek cart
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000));
cart.editItemQuantity('pensil', 60); // mengubah belanjaan pensil menjadi 60 buah
// cart.removeItem(‘buku’); // membatalkan belanja ondel-ondel
// cart.checkout(); // menampilkan detail belanjaan dan total

/* contoh detail belanjaan
DETAIL BELANJA
pensil - 60 pcs - @ 100 - total: 6000
ondel-ondel - 1 pcs - @ 1000000 - total: 1000000
TOTAL BELANJA: 1006000
*/

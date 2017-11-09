class Cart {
  constructor() {
    this.item = [];

  }
  addItem(args) {
    return this.item.push(args);
  }
  removeItem(args) {
    let index = 0;
    for (let i = 0; i < this.item.length; i++) {
      if (args === this.item[i].item) {
        index = i;
      }
    }
    this.item.splice(index, 1);
  }
  editItemQuantity(args1, args2) {
    for (let i = 0; i < this.item.length; i++) {
      if (args1 === this.item[i].item) {
        this.item[i].jumlahPembelian = args2;
      }
    }
  }
  checkout() {
    return JSON.stringify(this.item);
  }
}

class Item {
  constructor(namaItem, hargaSatuan, jumlahPembelian) {
    this.item = namaItem;
    this.hargaSatuan = hargaSatuan;
    this.jumlahPembelian = jumlahPembelian;
  }
}

// driver code
let cart = new Cart(); // objek cart
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000));
cart.editItemQuantity('pensil', 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem('buku'); // membatalkan belanja ondel-ondel);
console.log(cart.checkout()); // menampilkan detail belanjaan dan total

/* contoh detail belanjaan
DETAIL BELANJA
pensil - 60 pcs - @ 100 - total: 6000
ondel-ondel - 1 pcs - @ 1000000 - total: 1000000
TOTAL BELANJA: 1006000
*/

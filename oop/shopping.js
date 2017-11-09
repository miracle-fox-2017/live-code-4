class Item {
  constructor(nama, jumlah, harga) {
    this.nama = nama
    this.jumlah = jumlah
    this.harga = harga
  }
}

class Cart {
  constructor() {
    this.keranjang = []
  }

  addItem(obj) {
    this.keranjang.push(new Item(obj.nama, obj.jumlah, obj.harga))
    return this.keranjang
  }

  removeItem(nama) {
    for(let i = 0; i < this.keranjang.length; i++) {
      if(this.keranjang[i].nama == nama) {
        this.keranjang.splice([i], 1)
      }
    }
  }

  editItemQuantity(nama) {
    for(let i = 0; i < this.keranjang.length; i++) {
      if(this.keranjang[i].nama == nama) {
        this.keranjang.splice([i], 1)
      }
    }
  }

  checkout() {

  }
}

let cart = new Cart(); // objek cart
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000));
// console.log(cart.addItem(new Item('ondel-ondel', 1, 1000000)));
cart.editItemQuantity(‘pensil’, 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem(‘buku’); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total

/* contoh detail belanjaan
DETAIL BELANJA
pensil - 60 pcs - @ 100 - total: 6000
ondel-ondel - 1 pcs - @ 1000000 - total: 1000000
TOTAL BELANJA: 1006000
*/

class Cart {
  constructor() {
    this.item = []
  }

  addItem(itemData) {
    this.item.push(itemData)
  }//untuk menambahkan item ke dalam cart

  removeItem(item) {
    for (var i = 0; i < this.item.length; i++) {
      if(this.item[i].nama == item){
        this.item.splice(i,1)
      }
    }
  }//untuk menghapus item dari cart berdasarkan nama

  editItemQuantity(nama, jumlahBaru) {
    for (var i = 0; i < this.item.length; i++) {
      if(this.item[i].nama == nama){
        this.item[i].jumlah = jumlahBaru
      }
    }
  }//untuk mengubah jumlah belanjaan suatu item berdasarkan nama

  checkout() {
    let dataCart = []
    let total = 0
    for (var i = 0; i < this.item.length; i++) {
      let detail = `${this.item[i].nama} - ${this.item[i].jumlah} pcs - @ ${this.item[i].harga} - total: ${this.item[i].jumlah * this.item[i].harga}`
      total =  total + (this.item[i].jumlah * this.item[i].harga)
      dataCart.push(detail)
    }
    console.log(`DETAIL BELANJA\n${dataCart.join('\n')}\nTOTAL BELANJA: ${total}`);
  }//untuk menampilkan detail belanja dan total uang yang dibelanjakan
}

class Item {
  constructor(nama, jumlah, harga) {
    this.nama = nama
    this.jumlah = jumlah
    this.harga = harga
  }
}


let cart = new Cart(); // objek cart
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000));
cart.editItemQuantity('pensil', 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem('buku'); // membatalkan belanja buku
cart.checkout(); // menampilkan detail belanjaan dan total

/* contoh detail belanjaan
DETAIL BELANJA
pensil - 60 pcs - @ 100 - total: 6000
ondel-ondel - 1 pcs - @ 1000000 - total: 1000000
TOTAL BELANJA: 1006000
*/

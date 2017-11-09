class Cart {
  constructor() {
    this.item = []
  }

  addItem(obj) {
    this.item.push(obj)
  }

  removeItem(nama) {
    for(var i = 0; i < this.item.length; i++) {
      if(this.item[i].nama == nama) {
        this.item.splice(i, 1)
      }
    }
  }

  editItemQuantity(nama, jumlah) {
    for(var i = 0; i < this.item.length; i++) {
      if(this.item[i].nama == nama) {
        this.item[i].jumlah = jumlah
      }
    }
  }

  checkout() {
    var teks = ''
    for(var i = 0; i < this.item.length; i++) {
      teks = teks + `${this.item[i].nama} - ${this.item[i].jumlah} pcs - @ ${this.item[i].hargasatuan} total: ${this.item[i].hargasatuan * this.item[i].jumlah}\n`
    }
    
    var total = 0
    for(var i = 0; i < this.item.length; i++) {
      total = total + (this.item[i].jumlah * this.item[i].hargasatuan)
    }

    console.log(teks)
    console.log('Total belanja:', total);
  }

}

class Item {
  constructor(nama, jumlah, hargasatuan) {
    this.nama = nama,
    this.jumlah = jumlah
    this.hargasatuan = hargasatuan
  }
}

let cart = new Cart(); // objek cart
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000))
cart.editItemQuantity('pensil', 60)
cart.removeItem('buku')
cart.checkout()

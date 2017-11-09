class Cart{
  constructor() {
    this.items = []
  }
  
  addItem(item) {
    this.items.push(item)
  }
  
  removeItem(itemName) {
    let index = 0
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === itemName) {
        index = i
      }
    }
    
    this.items.splice(index, 1)
  }
  
  editItemQuantity(itemName, itemQuantity) {
    this.items.forEach(item => {
      if (item.name === itemName) {
        item.quantity = itemQuantity
      }
    })
  }
  
  checkout() {
    let result = 0;
    
    this.items.forEach(item => {
      result += (item.quantity * item.hargaSatuan)
    })
    
    console.log(`TOTAL BELANJA: ${result}`);
  }
}


class Item {
  constructor (namaBarang, jumlahBarang, hargaSatuan) {
    this.name = namaBarang
    this.quantity = jumlahBarang
    this.hargaSatuan = hargaSatuan
  }
}






let cart = new Cart(); // objek cart
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000));
cart.editItemQuantity('pensil', 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem('buku'); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total

/* contoh detail belanjaan
DETAIL BELANJA
pensil - 60 pcs - @ 100 - total: 6000
ondel-ondel - 1 pcs - @ 1000000 - total: 1000000
TOTAL BELANJA: 1006000
*/

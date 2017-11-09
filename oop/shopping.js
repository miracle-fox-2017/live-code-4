class Cart {
  constructor(){
    this.cart = []
    this.total =[]
  }
  addItem(newItem){
    // addItem, untuk menambahkan item ke dalam cart
    this.cart.push(newItem)
  }
  removeItem(nama){
    // removeItem, untuk menghapus item dari cart berdasarkan nama
    this.cart.forEach((cart, i)=>{
      if(cart.nama === nama){
        this.cart.splice(i, 1);
      }
    })
  }
  editItemQuantity(nama, jumlah){
    // editItemQuantity, untuk mengubah jumlah belanjaan suatu item berdasarkan nama
    this.cart.forEach(cart=>{
      if(cart.nama === nama){
        cart.jumlah = jumlah
      }
    })
  }
  checkout(){
    // checkout, untuk menampilkan detail belanja dan total uang yang dibelanjakan
    console.log('DETAIL BELANJA');
    this.cart.forEach(cart=>{
      console.log(`${cart.nama} - ${cart.jumlah} pcs - @ ${cart.harga_satuan} - total: ${cart.jumlah * cart.harga_satuan}`);
      this.total.push(`${cart.jumlah * cart.harga_satuan}`)
    })
    console.log(`TOTAL BELANJA: ${parseInt(this.total[0])+parseInt(this.total[1])}`);
  }

}

// Buatlah kelas bernama Item, kelas ini hanya untuk mendeskripsikan item yang dibeli berupa nama, harga satuan, dan jumlah yang dibeli.
class Item {
  constructor(nama,jumlah, harga_satuan) {
    this.nama = nama
    this.jumlah = jumlah
    this.harga_satuan = harga_satuan
  }
}


let cart = new Cart(); // objek cart
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000));
cart.editItemQuantity('pensil', 60); // mengubarh belanjaan pensil menjadi 60 buah
cart.removeItem('buku'); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total
// console.log(cart);
/* contoh detail belanjaan
DETAIL BELANJA
pensil - 60 pcs - @ 100 - total: 6000
ondel-ondel - 1 pcs - @ 1000000 - total: 1000000
TOTAL BELANJA: 1006000
*/

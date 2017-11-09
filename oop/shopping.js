class Item {
  constructor(nama,jumlah,hargaSatusan) {
    this.nama = nama
    this.harga = hargaSatusan
    this.jumlah = jumlah
  }
}

class Cart {
  constructor() {
    this.item = []
    this.total =0

  }
  addItem(item){
    this.item.push(item)
    console.log(this.item);
  }
  editItemQuantity(argumen1,argumen2){
    this.item.forEach(dt=>{
      if (dt.nama == argumen1){
        dt.jumlah = 60;
        console.log(this.item);
      }
    })
  }
  removeItem(argumen){
    this.item.forEach((dt,i)=>{
      if (dt.nama == argumen){
        this.item.splice(i,1)
        console.log(this.item);
      }
    })
  }
  checkout(){
    this.item.forEach(data=>{
      let total = data.jumlah * data.harga
      console.log(`${data.nama} '-' @ ${data.harga} "-" total ${total}`);
      console.log(` TOTAL BELANJA `);
      // console.log(data.jumlah);
    })
  }
}


// Buatlah kelas bernama Cart, kelas ini berfungsi untuk meng-handle proses pembelian hingga ke pembayaran. Cart akan menyimpan banyak objek Item (spesifikasi akan dijelaskan). Cart memiliki beberapa method sebagai berikut:
// addItem, untuk menambahkan item ke dalam cart
// removeItem, untuk menghapus item dari cart berdasarkan nama
// editItemQuantity, untuk mengubah jumlah belanjaan suatu item berdasarkan nama
// checkout, untuk menampilkan detail belanja dan total uang yang dibelanjakan
//
// Buatlah kelas bernama Item, kelas ini hanya untuk mendeskripsikan item yang dibeli berupa nama, harga satuan, dan jumlah yang dibeli.
//
// Gambaran kerja program nanti kira-kira sebagai berikut

// DETAIL BELANJA
// pensil - 60 pcs - @ 100 - total: 6000
// ondel-ondel - 1 pcs - @ 1000000 - total: 1000000
// TOTAL BELANJA: 1006000
// */




let cart = new Cart(); // objek cart
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000));
cart.editItemQuantity('pensil', 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem('buku'); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total

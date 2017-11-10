// Buatlah kelas bernama Cart, kelas ini berfungsi untuk meng-handle proses pembelian hingga ke pembayaran.
//Cart akan menyimpan banyak objek Item (spesifikasi akan dijelaskan). Cart memiliki beberapa method sebagai berikut:
// addItem, untuk menambahkan item ke dalam cart
// removeItem, untuk menghapus item dari cart berdasarkan nama
// editItemQuantity, untuk mengubah jumlah belanjaan suatu item berdasarkan nama
// checkout, untuk menampilkan detail belanja dan total uang yang dibelanjakan
//
// Buatlah kelas bernama Item, kelas ini hanya untuk mendeskripsikan item yang dibeli berupa nama, harga satuan, dan jumlah yang dibeli.
//
// Gambaran kerja program nanti kira-kira sebagai berikut
class Item{
  constructor(nama,hargasatuan,jumlah){
    this.nama = nama;
    this.hargaSatuan = hargasatuan;
    this.jumlah = jumlah;
  }
}



class Cart{
  constructor(){
    this.kumpulanItem = [];
  }
  addItem(nama,hargasatuan,jumlah){
    this.kumpulanItem.push(new Item( nama, hargasatuan, jumlah));
  }
  removeItem(nama){
    for(let i = 0; i < this.kumpulanItem.length; i++){
      if(this.kumpulanItem[i].nama.nama == nama){
        this.kumpulanItem.splice(i,1)
      }
    }
  }
  editItemQuantity(nama,jumlah){
    for(let i = 0; i < this.kumpulanItem.length; i++){
      if(this.kumpulanItem[i].nama.nama == nama){
        this.kumpulanItem[i].nama.jumlah = jumlah
      }
    }
  }
  checkout(){
    for(let i = 0; i < this.kumpulanItem.length; i++){
      console.log(`${this.kumpulanItem[i].nama.nama} - @ ${this.kumpulanItem[i].nama.hargaSatuan} -
        ${this.kumpulanItem[i].nama.jumlah} total = ${this.kumpulanItem[i].nama.jumlah*this.kumpulanItem[i].nama.hargaSatuan}
        `)
      //console.log(this.kumpulanItem[i].nama.hargaSatuan)
    };
    let total = 0;
    for(let i = 0; i < this.kumpulanItem.length; i++){
      total += this.kumpulanItem[i].nama.jumlah*this.kumpulanItem[i].nama.hargaSatuan
    }
    console.log(total);
  };
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

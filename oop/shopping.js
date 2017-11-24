class Cart {
  constructor() {

  }

  addItem(){
     tambah = new item()
  }

  reomoveItem(){

  }

  editItemQuantity(){

  }

  checkout(){

  }

}

class item {
  constructor(nama,jumlahPembelian,harga_satuan) {
    this.nama=nama;
    this.jumlahPembelian=jumlahPembelian;
    this.harga_satuan=harga_satuan
  }

}
let tes=new item('apa',20,100)
console.log(tes);
let cart = new Cart(); // objek cart
cart.addItem(new Item(‘pensil’, 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item(‘buku’, 20, 200));
cart.addItem(new Item(‘ondel-ondel’, 1, 1000000));
// cart.editItemQuantity(‘pensil’, 60); // mengubah belanjaan pensil menjadi 60 buah
// cart.removeItem(‘buku’); // membatalkan belanja ondel-ondel
// cart.checkout(); // menampilkan detail belanjaan dan total
console.log(cart);

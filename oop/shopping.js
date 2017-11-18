class Cart{
  constructor(){
    this.keranjang = []
    this.total = 0;
  }
  
  addItem(item){
    this.keranjang.push(item)
  }
  
  removeItem(nama_item){
    //find posisi
    let pos;
    for(let i = 0; i < this.keranjang.length; i++){
      //if nama item sama
      if(this.keranjang[i].nama == nama_item){
        pos = i
      }
    }
    this.keranjang.splice(pos, 1);
  }
  
  editItemQuantity(nama_item, qty){
    //find posisi
    let pos;
    for(let i = 0; i < this.keranjang.length; i++){
      //if nama item sama
      if(this.keranjang[i].nama == nama_item){
        pos = i
      }
    }
    this.keranjang.splice(pos, 1, new Item(nama_item, qty, this.keranjang[pos].harga_satuan));
  }
  
  checkout(){
    /* contoh detail belanjaan
    DETAIL BELANJA
    pensil - 60 pcs - @ 100 - total: 6000
    ondel-ondel - 1 pcs - @ 1000000 - total: 1000000
    TOTAL BELANJA: 1006000
    */
    let detail = ['DETAIL BELANJA'];
    for(let i = 0; i < this.keranjang.length; i++){
      detail.push(`${i+1}. ${this.keranjang[i].nama} - ${this.keranjang[i].jumlah} pcs - @ ${this.keranjang[i].harga_satuan} - total:${this.keranjang[i].harga_satuan * this.keranjang[i].jumlah}`)
      this.total += (this.keranjang[i].harga_satuan * this.keranjang[i].jumlah) 
    }
    detail.push(`TOTAL BELANJA: ${this.total}`)
    console.log(detail.join('\n'));
  }
  
}

class Item{
  constructor(nama, jumlah, harga_satuan){
    this.nama = nama
    this.harga_satuan = harga_satuan
    this.jumlah = jumlah
  }
}


let cart = new Cart(); // objek cart
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000));
cart.editItemQuantity('pensil', 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem('buku'); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total
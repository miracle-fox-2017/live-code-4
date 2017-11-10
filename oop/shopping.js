class Cart {
  constructor(){
    this.kereta = []
  }
  
  addItem(item){
    this.kereta.push(item)
  }
  
  removeItem(nama){
    for(let i = 0; i < this.kereta.length; i++){
      if(this.kereta[i].nama == nama){
        this.kereta.splice(i,1)
      }
    }
  }
  
  editItemQuantity(nama, jumlah){
    for(let i = 0; i < this.kereta.length; i++){
      if(this.kereta[i].nama == nama){
        this.kereta[i].jumlah = jumlah
      }
    }
  }
  
  checkout(){
    let total = 0
    for(let i = 0; i < this.kereta.length; i++){
      console.log(this.kereta[i]);
      total += this.kereta[i].jumlah * this.kereta[i].harga
    }
    console.log(total);
  }
  
}

class Item {
  constructor(nama, jumlah, harga){
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

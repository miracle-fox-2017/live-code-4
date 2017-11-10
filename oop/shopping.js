class Cart extends Item {
constructor(){
  super(item,jumlah,harga)
}
   addItem(){
     return `${this.item+=item}, ${this.jumlah+=jumlah},
     ${let total = this.jumlah*this.harga}`
  }
   removeItem(){

  }
   editItemQuantity(){

  }
 checkout(){
   return`DETAIL BELANJA
   ${addItem()}
   `

  }
}

class Item{
  constructor(item,jumlah, harga){
      this.item=item;
      this.jumlah=jumlah;
      this.harga=harga;
  }

}
let cart = new Cart(); // objek cart
cart.addItem(new Item(‘pensil’, 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item(‘buku’, 20, 200));
cart.addItem(new Item(‘ondel-ondel’, 1, 1000000));
cart.editItemQuantity(‘pensil’, 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem(‘buku’); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total

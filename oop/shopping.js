class Item {
  constructor(nama, harga, total) {
    this.nama = nama
    this.harga = harga
    this.total = total
  }
}


class Cart {
  constructor() {
    this.belanja =  []
    this.barang = []
  }

  addItem(arg){
    //console.log(arg)
    this.belanja.push(arg)
    console.log(this.belanja);
  }

  editItemQuantity(arg1, arg2){
    this.belanja.nama = arg1
    this.belanja.harga = arg2
    console.log(this.belanja);
  }

  removeItem(arg){

    for(let i =0; i < this.belanja.length; i++){
      if(this.belanja[i].nama !== arg){
          this.barang.push(this.belanja[i])
      }
    }
    console.log(this.barang);

  }

  checkout(){
    let jumlah = 0

      this.barang.map(x =>  {
        jumlah = x.total
      })

    for(let i = 0; i < this.barang.length; i++) {
        console.log(i+1 + '. ' + this.barang[i].nama + '-' + this.barang[i].harga +'pcs' + 'total' + this.barang[i].total);
    }
    console.log('total belanja: ' + jumlah);
  }

}



let cart = new Cart
cart.addItem(new Item('Pensil', 50, 100))
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000));
cart.editItemQuantity('pensil', 60)
cart.removeItem('buku')
cart.checkout()

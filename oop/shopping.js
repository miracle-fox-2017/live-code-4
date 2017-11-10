class Item {
    constructor(nama, harga, jumlah) {
        this.nama = nama;
        this.harga = harga;
        this.jumlah = jumlah;
    }
}

class Cart {
    constructor() {
        this.add = []
    }

    addItem(){
        this.add.push(this.nama, this.harga, this.jumlah)
    }

    removeItem(){

    }

    editItemQuantity(){

    }

    checkout(){

    }
}

let cart = new Cart(); // objek cart
// console.log(cart);
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000));
cart.editItemQuantity('pensil', 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem('buku'); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total

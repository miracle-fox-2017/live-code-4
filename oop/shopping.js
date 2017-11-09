class Item {
    constructor(item, jumlah, harga) {
        this.item = item;
        this.jumlah = jumlah;
        this.harga = harga;
    }
}

class Cart extends Item {

    constructor() {
        super();
        this.itemAll = [];
        this.jumlahAll = [];
        this.hargaAll = [];
    }
    
    addItem() {
        this.itemAll.push(this.item);
        this.jumlahAll.push(this.jumlah);
        this.hargaAll.push(this.harga);
    }

    removeItem(removeItem) {
        let getAll = this.itemAll.indexOf(removeItem);
        this.itemAll.splice(getAll - 1, 1);
        this.jumlahAll.splice(getAll - 1, 1);
        this.hargaAll.splice(getAll - 1, 1);
    }

    editItemQuantity(itemEdit,jumlahEdit) {
        let getAll = this.itemAll.indexOf(itemEdit);
        this.jumlahAll[getAll] = jumlahEdit;        
    }

    checkout() {
        for (var i = 0; i < this.itemAll.length; i++) {
            let harga = this.hargaAll[i] * this.jumlahAll[i];
            console.log('DETAIL BELANJA');
            console.log(`${i}. ${this.itemAll[i]} - ${this.jumlahAll[i]} pcs - @ ${this.hargaAll[i]} - ${this.harga}`);                        
        }
    }

}




let cart = new Cart(); // objek cart
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel - ondel', 1, 1000000));
cart.editItemQuantity('pensil', 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem('buku'); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total

/* contoh detail belanjaan
DETAIL BELANJA
pensil - 60 pcs - @ 100 - total: 6000
ondel-ondel - 1 pcs - @ 1000000 - total: 1000000
TOTAL BELANJA: 1006000
*/

class Cart {
    constructor() {
        this.belanjaan = []
        this.total = 0
    }

    addItem(data) {
        this.belanjaan.push(data)
        return (this.belanjaan)
    }
    removeItem(barang) {
        let indexBarang
        for (let i = 0; i < this.belanjaan.length; i++) {
            if (this.belanjaan[i].namabarang == barang) {
                this.belanjaan.splice(i, 1)
            }
        }
        return (this.belanjaan)
    }
    editItemQuantity(barang, jumlah) {
        for (let i = 0; i < this.belanjaan.length; i++) {
            if (this.belanjaan[i].namabarang == barang) {
                this.belanjaan[i].jumlahBarang = jumlah
            }
        }
        return (this.belanjaan)
    }
    checkout() {

        for (let i = 0; i < this.belanjaan.length; i++) {
            // console.log("Detail Belanja")
            console.log(this.belanjaan[i].namabarang + "-" + this.belanjaan[i].jumlahBarang + "pcs - @ " + this.belanjaan[i].hargabarang + "-total : " + this.belanjaan[i].hargabarang * this.belanjaan[i].jumlahBarang)
            this.total += this.belanjaan[i].jumlahBarang * this.belanjaan[i].hargabarang

        }
        return console.log(this.total)
        // console.log("Detail Belanja")
        // console.log("1." + this.belanjaan[0].namabarang + "-" + this.belanjaan[0].jumlahBarang + "pcs - @ " + this.belanjaan[0].hargabarang + "-total : " + this.belanjaan[0].hargabarang * this.belanjaan[0].jumlahBarang)
        // console.log("2." + this.belanjaan[1].namabarang + "-" + this.belanjaan[1].jumlahBarang + "pcs - @ " + this.belanjaan[1].hargabarang + "-total : " + this.belanjaan[1].hargabarang * this.belanjaan[1].jumlahBarang)
    }

}

class Item {

    constructor(namabarang, jumlahBarang, hargabarang) {
        this.namabarang = namabarang
        this.jumlahBarang = jumlahBarang
        this.hargabarang = hargabarang
    }
}

let cart = new Cart(); // objek cart
cart.addItem(new Item("pensil", 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item("buku", 20, 200))
cart.addItem(new Item("ondel - ondel", 1, 1000000))
cart.editItemQuantity("pensil", 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem("buku"); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total




class Cart{
    constructor(item){
        this.item = []
    }
    addItem(arg){
        this.item.push(arg);
        // console.log(this.item)
    }
    editItemQuantity(arg1,arg2){
        for(var i = 0; i < this.item.length;i++){
            if(this.item[i].nama == arg1){
                // console.log(this.item[i])
                this.item[i].jumlah = arg2
                // console.log(this.item[i].jumlah)
            }
        }
    }
    removeItem(arg1){
        for(var i = 0; i < this.item.length;i++){
            if(this.item[i].nama == arg1){
                this.item.splice(i,1)
            }
            console.log(this.item)
        }
    }
    checkout(){
        var total = 0
        for(var i = 0; i<this.item.length;i++){
            total += this.item[i].jumlah * this.item[i].harga
        }
        console.log(total)
    }
}

class Item{
    constructor(nama,jumlah,harga){
        this.nama = nama
        this.jumlah = jumlah
        this.harga = harga
    }

}










let cart = new Cart(); // objek cart
cart.addItem(new Item("pensil", 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item("buku", 20, 200));
cart.addItem(new Item("ondel-ondel", 1, 1000000));
cart.editItemQuantity("pensil", 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem("buku"); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total

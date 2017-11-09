class Item{
    constructor(nama,jumlah,satuan){
        this.namaItem=nama;
        this.jumlah=jumlah;
        this.satuan=satuan;
    }
}

class Cart{
    constructor(){
        this.item=[];
    }
    addItem(belanjaan){
        this.item.push(belanjaan);
    }
    editItemQuantity(nama,jumlah){
        for(let i=0;i < this.item.length;i++){
            if(this.item[i].namaItem == nama){
                this.item[i].jumlah=jumlah;
            }
        }
    }
    removeItem(nama){
        for(let i=0;i < this.item.length;i++){
            if(this.item[i].namaItem == nama){
                this.item.splice(i,1);
            }
        }
    }
    checkout(){
        for(let i=0;i < this.item.length;i++){
            const total=this.item[i].jumlah * this.item[i].satuan;
            console.log(i + 1+".",this.item[i].namaItem,"-",this.item[i].jumlah,"pcs - @",this.item[i].satuan,"- total:",total);
        }
    }
}

let cart=new Cart();
cart.addItem(new Item("pensil",50,100));
cart.addItem(new Item("buku",20,200));
cart.addItem(new Item("ondel-ondel",1,1000000));
cart.editItemQuantity("pensil",60);
cart.removeItem("buku");
cart.checkout();

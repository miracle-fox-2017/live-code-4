class Cart {
	constructor(){
		this.item = []
		this.total = [];
		this.harga = null;
	}

	addItem(item){
		this.item.push(item)
	}

	editItemQuantity(editItem, total){
		console.log(this.item)
		this.item.forEach(item => {
			if(item.nameItem.indexOf(editItem) != -1)
			item.total = total;
		})
	}

	removeItem(rmv){
		let index ;
		this.item.forEach((item,index) => {
			if(item.nameItem.indexOf(rmv) != -1){
				index = index;
			}
		})	
		this.item.splice(index,1);
	}	
	checkout(){
		return this.item;
	}
}


class Item {
	constructor(nameItem,total,harga){
		this.nameItem = nameItem
		this.total = total
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

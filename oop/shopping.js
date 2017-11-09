class Cart{

	constructor(){
		this.item = []
	}

	addItem(item){
		this.item.push(item)
	}

	removeItem(nama){
		let index = this.item.findIndex(function(barang){
			return barang.nama === nama
		})

		this.item.splice(index, 1)
	}

	editItemQuantity(nama, jumlah){
		let index = this.item.findIndex(function(barang){
			return barang.nama === nama
		})

		this.item[index].jumlah = jumlah

	}

	checkout(){
		let total = 0
		console.log('DETAIL BELANJAAN');
		this.item.forEach((barang, index)=>{
			console.log(index+1 +'. '+barang.nama+' - '+barang.jumlah+' pcs - @'+barang.hargaSatuan+'- total: '+ barang.jumlah*barang.hargaSatuan);
			total+=barang.jumlah*barang.hargaSatuan
		})

		console.log('TOTAL BELANJAAN: '+total);
	}
}

class Item{
	constructor(nama, harga, jumlah){
		this.nama = nama
		this.hargaSatuan = harga
		this.jumlah = jumlah
	}
}

let cart = new Cart(); // objek cart
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50
console.log(cart);
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000));
cart.editItemQuantity('pensil', 60); // mengubah belanjaan pensil
console.log(cart);
cart.removeItem('buku'); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total

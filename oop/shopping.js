class Cart {
	constructor() {
		this.items = [];
	}

	addItem(item) {
		this.items.push(item)
	}

	removeItem(nama) {
		let arr = [];

		for(var i = 0; i < this.items.length; i++) {
			if (this.items[i].nama != nama) {
				arr.push(this.items[i]);
			}

		}

		this.items = arr;
	}

	editItemQuantity(nama, qty) {
		let arr = [];

		for(var i = 0; i < this.items.length; i++) {
			if (this.items[i].nama == nama) {
				this.items[i].jumlah = qty;
			}

		}
	}

	checkout() {
		console.log('DETAIL BELANJA')
		let totalSemua = 0;

		for (var i = 0; i < this.items.length; i++) {
			console.log(`${this.items[i].nama} - ${this.items[i].jumlah} pcs - @ ${this.items[i].harga} - total: ${this.items[i].jumlah * this.items[i].harga}`)
			totalSemua = totalSemua + this.items[i].jumlah * this.items[i].harga;
		}

		console.log(`TOTAL BELANJA: ${totalSemua}`)
	}
}

class Item {
	constructor(nama, jumlah, harga) {
		this.nama = nama;
		this.jumlah = jumlah;
		this.harga = harga;
	}
}

let cart = new Cart(); // objek cart
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000));
cart.editItemQuantity('pensil', 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem('buku'); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total
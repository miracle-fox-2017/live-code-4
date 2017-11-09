'use strict'
const Item = require('./item')

class Cart{
	constructor(){
		this.items = []
		this.nama = ''
		this.jumlah = 0
		this.harga_satuan = 0

	}

	addItem(data){
		
		this.items.push(data)
	}

	removeItem(args){
		this.items.forEach((item, i) =>{
			if(item.nama == args){
				this.items.splice(i, 1)
			}
		})
		// console.log(this.items)
	}

	editItemQuantity(name, jumlah){
		this.items.forEach(item =>{
			if(item.nama == name){
				item.jumlah = jumlah
			}
		})
		// console.log(this.items)
	}

	checkout(){
		this.items.forEach(item =>{
			console.log('nama barang: ', item.nama)
			console.log('jumlah beli: ', item.jumlah)
			console.log('harga satuan: ', item.harga_satuan)
			console.log('--------------------------------')
		})
	}


}


let cart = new Cart(); // objek cart
cart.addItem(new Item('pensil', 50, 100)); // tambahkan belanja 50 pensil, harga per-item 100
cart.addItem(new Item('buku', 20, 200));
cart.addItem(new Item('ondel-ondel', 1, 1000000));
cart.editItemQuantity('pensil', 60); // mengubah belanjaan pensil menjadi 60 buah
cart.removeItem('buku'); // membatalkan belanja ondel-ondel
cart.checkout(); // menampilkan detail belanjaan dan total

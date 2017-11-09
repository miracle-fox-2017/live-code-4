'use strict'
const Penumpang = require('./penumpang')

class Angkot{
	constructor(){

		this.penumpangs = []
		this.penghasilan = 0

	}

	jalan(){
		// tambahkan jarak tempuh setiap penumpang 
		let km = 1
		this.penumpangs.jarak = km+=1
		this.penumpangs.forEach(data =>{
			data.jarak = km
		})
	}	

	naik(name, turun){
	// komposisi objek dari class Penumpang dgn data dari argumen
    // lalu tambahkan ke properti (a)
    let penumpang = new Penumpang(name, turun)
    this.penumpangs.push(penumpang)
    // console.log(this.penumpangs)


	}

	turun(argumen){
    let turuns = ''
    this.penumpangs.forEach((data, i) =>{
    	if(data.tujuan === argumen){
    		turuns = this.penumpangs.splice(i, 1)
    	}
    })
    // console.log(turuns)
    let nama = turuns.pop()
    this.penghasilan = nama.bayar()
    
    console.log(this.penumpangs)

	}

	selesai(){
		// tampilkan total penghasilan
		console.log(this.penghasilan)
	}

}


// driver code #tidak boleh diubah#
let angkot = new Angkot();
angkot.naik('Anung', 'kolong');
angkot.naik('Bhoma', 'karet');
angkot.naik('Cucun', 'ujung');
// // angkot berangkat!
angkot.jalan();
angkot.jalan();
// // kolong
angkot.turun('kolong');
angkot.jalan();
// // karet
angkot.turun('karet');
angkot.jalan();
angkot.jalan();
angkot.jalan();
// ujung
angkot.turun('ujung');
angkot.selesai(); // total penghasilan: 1650
// driver code #tidak boleh diubah#


module.exports = Penumpang


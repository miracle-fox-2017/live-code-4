class Penumpang {
    constructor(nama, tujuan) {
        this.nama = nama;
        this.tujuan = tujuan;
        this.jarak = 0
    }
    tambahJarak() {
        return this.jarak++;
    }
    bayar() {
        return this.jarak * 150;
    }
}


class Angkot {
    constructor() {
        this.penumpang = []
        this.penghasilan = 0
    }
    jalan() {
        let tambahJarak = 0
        for (let i = 0; i < this.penumpang.length; i++) {
            tambahJarak += this.penumpang[i].tambahJarak()

        }
        return console.log(tambahJarak)
    }
    naik(nama, tujuan) {
        this.penumpang.push(new Penumpang(nama, tujuan))
        return this.penumpang
    }
    turun(tujuan) {

        for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i].tujuan == tujuan) {
                this.penghasilan += this.penumpang[i].bayar()
                return console.log(this.penghasilan)
            }
        }
    }
    selesai() {
        return this.penghasilan
    }
}

let angkot = new Angkot();
angkot.naik('Anung', 'kolong');
angkot.naik('Bhoma', 'karet');
angkot.naik('Cucun', 'ujung');
//console.log(angkot.penumpang[0].tambahJarak())
// angkot berangkat!
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
// // ujung
angkot.turun('ujung');
angkot.selesai(); // total penghasilan: 1650
// driver code #tidak boleh diubah#


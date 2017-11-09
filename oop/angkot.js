class Penumpang {
  constructor(nama, tujuan) {
    this.nama = nama;
    this.tujuan = tujuan;
    this.jarak = 0;
  }
  tambahJarak() {
    this.jarak++;
  }
  bayar() {
    return this.jarak * 150;
  }

}

class Angkot extends Penumpang {
    constructor(penumpang, penghasilan) {
        super(penumpang, penghasilan)
        this.penumpang = [];
        this.penghasilan = penghasilan;
    }

    jalan(){
        let jarak = new Penumpang()
        console.log(jarak.tambahJarak());
    }

    naik(argumen1, argumen2){
        this.penumpang.push(argumen1, argumen2)
        console.log(this.penumpang);
    }

    turun(argumen){
        if(argumen == this.penumpang[1]){
            let bayaran = new Penumpang()
            this.penghasilan = bayaran.bayar()
            console.log(this.penghasilan);

            let turunPenumpang = this.penumpang.splice(0,1)
            console.log(turunPenumpang);
        }
    }
}


// driver code #tidak boleh diubah#
let angkot = new Angkot();
// console.log(angkot);
angkot.naik('Anung', 'kolong');
// angkot.naik('Bhoma', 'karet');
// angkot.naik('Cucun', 'ujung');
// // angkot berangkat!
angkot.jalan();
// angkot.jalan();
// // kolong
angkot.turun('kolong');
// angkot.jalan();
// // karet
// angkot.turun('karet');
// angkot.jalan();
// angkot.jalan();
// angkot.jalan();
// // ujung
// angkot.turun('ujung');
// angkot.selesai(); // total penghasilan: 1650
// driver code #tidak boleh diubah#

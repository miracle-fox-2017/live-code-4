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

let penumpang = new Penumpang()

class Angkot {
  constructor() {
    this.penumpang = []
    this.penghasilan = 0
  }

  jalan() {
    penumpang.tambahJarak()
  }

  naik(nama, tujuan) {
     let dataPenumpang = new Penumpang(nama, tujuan)
     this.penumpang.push(dataPenumpang)
  }

  turun(lokasi) {
    for (var i = 0; i < this.penumpang.length; i++) {
      if(this.penumpang[i].tujuan == lokasi){
        this.penumpang.splice(i,1)
        this.penghasilan = this.penghasilan + penumpang.bayar()
      }
    }
  }

  selesai() {
    console.log(`total penghasilan: ${this.penghasilan}`);
  }
}

// driver code #tidak boleh diubah#
let angkot = new Angkot();
debugger
angkot.naik('Anung', 'kolong');
angkot.naik('Bhoma', 'karet');
angkot.naik('Cucun', 'ujung');
// angkot berangkat!
angkot.jalan();
angkot.jalan();
// kolong
angkot.turun('kolong');
angkot.jalan();
// karet
angkot.turun('karet');
angkot.jalan();
angkot.jalan();
angkot.jalan();
// ujung
angkot.turun('ujung');
angkot.selesai(); // total penghasilan: 1650
// driver code #tidak boleh diubah#

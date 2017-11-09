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

class Angkot {
  constructor() {
    this.penghasilan = [];
    this.jarakTempuh = [];
    this.penumpang = [];
  }

  naik(nama, tujuan) {
    this.penumpang.push(new Penumpang(nama, tujuan));
  }

  jalan() {
    for (let i = 0 ; i < this.penumpang.length; i++) {
      this.jarakTempuh[i] = 0;
    }

    for (let j = 0 ; j < this.penumpang.length; j++) {
      this.jarakTempuh[j] = this.penumpang[j].tambahJarak();
    }

  }

  turun(tujuan) {
    for (let i = 0 ; i < this.penumpang.length; i++) {
      if (tujuan === this.penumpang[i].tujuan) {
        this.penghasilan.push(this.penumpang[i].bayar())
        console.log(`Penumpang turun di ${tujuan}`)
      }
    }


  }

  selesai() {
    var sum = this.penghasilan.reduce(function(a, b) { return a + b; }, 0);

    console.log(`total penghasilan: ${sum}`);
  }
}

// driver code #tidak boleh diubah#
let angkot = new Angkot();
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

// console.log(angkot)
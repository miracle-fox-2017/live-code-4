// implementasi class Penumpang tidak boleh diubah
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
  constructor() {
    super()
    this.penumpang = [] //penumpang
    this.penghasilan = 0 //penghasilan
  }

  jalan() {
    super.tambahJarak()
    return this.jarak
  }

  naik(argumen1, argumen2) {
    this.penumpang.push(new Penumpang(argumen1, argumen2))
    return this.penumpang
  }

  turun(argumen) {
    for(let i = 0; i < this.penumpang.length; i++) {
      // console.log(this.penumpang);
      if(this.penumpang[i].tujuan == argumen) {
        this.penghasilan += super.bayar()
        this.penumpang.splice([i], 1)
      }
    }
  }

  selesai() {
    console.log(this.penghasilan);
    // return this.penghasilan
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

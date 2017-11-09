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
    this.penumpang = [],
    this.penghasilan = 0
  }

  jalan() {
    for(var i = 0; i < this.penumpang.length; i++) {
      this.penumpang[i].tambahJarak()
    }
  }


  naik(argumen1, argumen2) {
    this.penumpang.push(new Penumpang(argumen1, argumen2))
  }

  turun(argumen) {
    for(var i = 0; i < this.penumpang.length; i++) {
      if(this.penumpang[i].tujuan == argumen) {
        this.penghasilan = this.penghasilan + this.penumpang[i].bayar()
        console.log(this.penumpang.splice(i, 1))
      }
    }
  }

  selesai() {
    console.log('total penghasilan:', this.penghasilan);
  }
}


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
angkot.selesai()

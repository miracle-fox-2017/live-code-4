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
    this.penumpang = [];
    this.penghasilan = 0;
    this.tujuan = [];
    this.jarak = 0;
  }

  jalan(){
    this.jarak
  }

  naik(nama, tujuan){
    let awal =  new Penumpang(nama, tujuan);
    this.penumpang.push(awal.nama);
    this.tujuan.push(awal.tujuan);
    return this
  }

  turun(turun){
    for (var i = 0; i < this.tujuan.length; i++) {
      if (turun == this.tujuan[i]) {
        
      }
    }
    // this.tujuan()
  }

  selesai(){

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
// // kolong
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

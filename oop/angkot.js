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

class Angkot{
  constructor(penumpang,penghasilan){
    this.penumpang = []
    this.penghasilan = 0
  }

  jalan(){
    let jarakJalan = new Penumpang()
    jarakJalan.tambahJarak()
    return jarakJalan.jarak
  }

  naik(argumen1, argumen2){
    let trayek = new Penumpang(argumen1,argumen2)
    // console.log(trayek);
    this.penumpang.push(trayek)
  }

  turun(argumen){
    for(let i=0; i<this.penumpang.length; i++){
      if(this.penumpang[i].tujuan == argumen){
        this.jalan()
      }
    }
    console.log(this.penumpang);
  }

  selesai(){
    return `total penghasilan ${this.penghasilan}`
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

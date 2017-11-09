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
      this.hasil = [];
      this.penumpang = [];
      this.jarak = [];

    }
  
    naik(nama, tujuan) {
      this.penumpang.push(new Penumpang(nama, tujuan));
    }
  
    jalan() {
      for (let i = 0 ; i < this.penumpang.length; i++) {
        this.jarak[i] = 0;
      }
  
      for (let j = 0 ; j < this.penumpang.length; j++) {
        this.jarak[j] = this.penumpang[j].tambahJarak();
      }
  
    }
  
    turun(tujuan) {
      for (let i = 0 ; i < this.penumpang.length; i++) {
        if (tujuan === this.penumpang[i].tujuan) {
          this.hasil.push(this.penumpang[i].bayar())
          console.log(`Penumpang turun di ${tujuan}`)
        }
      }
  
  
    }
  
    selesai() {

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
  angkot.selesai(); // total hasil: 1650
  // driver code #tidak boleh diubah#
  
  // console.log(angkot)
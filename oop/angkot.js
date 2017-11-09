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


class Angkot extends Penumpang{
  constructor(jumlahPenumpang,penghasilan){
    super()
    this.jumlahPenumpang=jumlahPenumpang;
    this.penghasilan=penghasilan;
  }

  jalan(){
    this.jarak
  }

  naik(nama,tujuan){
    nama=this.nama;
    tujuan=this.tujuan
  }

  turun(argumen){
    if(this.argumen == this.tujuan){
      console.log(`${this.penumpang} turun`);
    }
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


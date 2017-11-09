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
  constructor(tampungPenumpang,simpanPenghasilan) {
    this.tampungPenumpang = []
    this.simpanPenghasilan = 0
  }
  jalan(){
    let penumpang = new Penumpang()
    penumpang.tambahJarak()
  }
  naik(nama,tujuan){
    let penumpang = new Penumpang(nama,tujuan)
    this.tampungPenumpang.push(penumpang)
  }
  turun(tujuan){
    let penumpang = new Penumpang()
    for(let i = 0; i < this.tampungPenumpang.length; i++){
      if(this.tampungPenumpang[i].tujuan === tujuan){
        console.log(penumpang.bayar());
      }
    }
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

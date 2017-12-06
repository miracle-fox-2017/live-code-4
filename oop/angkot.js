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
  constructor(){
    this.tempPenumpang = []
    this.penghasilan = null;
  }

  jalan() {
    this.tempPenumpang.forEach(penumpang => {
      penumpang.tambahJarak();
    })
  } 
  naik(name, tujuan) {
    let penumpang = new Penumpang(name, tujuan);
    this.tempPenumpang.push(penumpang)
  }

  turun(args) {
    this.tempPenumpang.forEach(penumpang => {
      console.log(penumpang)
      if(penumpang.tujuan == args){
        this.penghasilan = this.penghasilan + penumpang.bayar()
      }      
    })
  }

  selesai() {
    console.log(this.penghasilan)
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

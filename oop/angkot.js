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
    this.arrPenumpang = []
    this.income = ''
  }


  jalan(){
    let jarak = new Penumpang(this.arrPenumpang[0].nama, this.arrPenumpang[0].tujuan)
    jarak.tambahJarak()
    console.log(jarak)

  }

  naik(nama, tujuan){
    let penumpang = new Penumpang(nama, tujuan)
    this.arrPenumpang.push(penumpang)
    console.log(this.arrPenumpang)
  }

  turun(argumen){

  }
}


let angkot = new Angkot()
angkot.naik('Anung', 'Kolong')
angkot.naik('Bhoma', 'karet');
angkot.naik('Cucun', 'ujung');

angkot.jalan()
angkot.jalan()
angkot.jalan()

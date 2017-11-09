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
    this.penumpang = []
    this.penghasilan = 0
    this.Penumpangall = new Penumpang
  }

  jalan (){

    this.Penumpangall.tambahJarak()

  }
  naik(argumen1,argumen2){
    let arr = this.penumpang.push([argumen1,argumen2])
  }

  turun(argumen){
    for (var i = 0; i < this.penumpang.length; i++) {
      if(argumen == this.penumpang[i][1]){
        let tagih = this.Penumpangall.bayar()
        this.penghasilan += tagih
        this.penumpang.splice(i,1)
        console.log(this.penumpang);
      }
    }
  }
  selesai(){
      return console.log(this.penghasilan)
  }
}
// cek tujuan setiap penumpang
    // bila tujuan penumpang == argumen
    //    tagih bayaran dan totalkan ke properti (b)
    //    keluarkan penumpang dari properti (a)
    // console.log properti (a)


//METHOD selesai()
    // tampilkan total penghasilan

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
// ujung/
angkot.turun('ujung');
angkot.selesai(); // total penghasilan: 1650
// driver code #tidak boleh diubah#

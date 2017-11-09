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

// CLASS Angkot
class Angkot{
  constructor(){
    this.penumpang    = new Penumpang('sopir', 'ngikut penumpang')
    this.userAngkot   = []
    this.penghasilan  = 0
  }

  jalan(){
    this.penumpang.tambahJarak()
  }

  naik(nama, tujuan){
    this.userAngkot.push(new Penumpang(nama, tujuan))
  }

  turun(tujuan){
    let index = this.userAngkot.findIndex(function(person){
      return person.tujuan === tujuan
    })

    this.userAngkot.splice(index, 1)
    this.penghasilan += this.penumpang.bayar()
    console.log(this);
  }

  selesai(){
    console.log(this.penghasilan);
  }
}
  // CONSTRUCTOR 
    // tambahkan 2 properti
    // - (a) untuk menampung penumpang-penumpang
    // - (b) untuk menyimpan penghasilan

  // METHOD jalan()
    // tambahkan jarak tempuh setiap penumpang 

  // METHOD naik(argumen1, argumen2)
    // komposisi objek dari class Penumpang dgn data dari argumen
    // lalu tambahkan ke properti (a)

  // METHOD turun(argumen)
    // cek tujuan setiap penumpang
    // bila tujuan penumpang == argumen
    //    tagih bayaran dan totalkan ke properti (b)
    //    keluarkan penumpang dari properti (a)
    // console.log properti (a)

// METHOD selesai()
    // tampilkan total penghasilan

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
// // karet
angkot.turun('karet');
angkot.jalan();
angkot.jalan();
angkot.jalan();
// // ujung
angkot.turun('ujung');
angkot.selesai(); // total penghasilan: 1650
// driver code #tidak boleh diubah#

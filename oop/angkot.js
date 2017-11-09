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
  // CONSTRUCTOR 
  constructor(){
      // tambahkan 2 properti
      // - (a) untuk menampung penumpang-penumpang
      this.penumpang = []
      // - (b) untuk menyimpan penghasilan
      this.penghasilan = 0
  }

  // METHOD jalan()
  jalan(){
    // tambahkan jarak tempuh setiap penumpang 
    this.penumpang.forEach(p=>{
      p.tambahJarak()
    })
  }


  // METHOD naik(argumen1, argumen2)
  naik(nama, tujuan){
    this.penumpang.push(new Penumpang(nama, tujuan))
    // komposisi objek dari class Penumpang dgn data dari argumen
    // lalu tambahkan ke properti (a)
    
  }


  // METHOD turun(argumen)
  turun(tujuan){
    // cek tujuan setiap penumpang
    let pos;
    for(let i =0; i<this.penumpang.length; i++){
      // bila tujuan penumpang == argumen
      if(tujuan==this.penumpang[i].tujuan){
        pos = i
      }
    }
    //    tagih bayaran dan totalkan ke properti (b)
    this.penghasilan += this.penumpang[pos].bayar()
    //    keluarkan penumpang dari properti (a)
    this.penumpang.splice(pos,1)
    // console.log properti (a)
    console.log(this.penumpang);
  }


  // METHOD selesai()
  selesai(){
    // tampilkan total penghasilan
    console.log(`TOTAL PENGHASILAN: ${this.penghasilan}`);
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

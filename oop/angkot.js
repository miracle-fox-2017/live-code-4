let answer = ['terminal', 'kolong', 'karet', 'ujung'];
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

class Angkot {
  constructor(penumpang, penghasilan) {
    this.penumpang = penumpang;
    this.penghasilan = penghasilan;
  }

  jalan () {
    let x = 0;
    x++;
      console.log(answer[x]);
  }

  naik (nama, tujuan) {
    let answer = [];
    answer.push(nama);
    if (answer.length > 2) {
      console.log('angkot berangkat!');
    }
  }

  turun (turun) {
    for (let i = 0; i < answer.length; i++) {
      if (turun == answer[i]) {
        answer.splice(1, i);
      }
      // console.log(answer);
    }


  }

  selesai() {
    let penghasilan = penumpang.bayar();
    console.log(`total penghasilan :`);
  }
}

// CLASS Angkot
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
let penumpang = new Penumpang();
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

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

class Angkot extends Penumpang {
    constructor(penumpang,penghasilan){
        super();
        this.penumpang   = [];
        this.penghasilan = 0;
    }

    jalan() {
        this.tambahJarak();
    }

    naik(argumen1, argumen2) {
        this.penumpang.push(argumen2);
    }

    turun(argumen) {
        if (this.penumpang.indexOf(argumen)){
            this.penghasilan += this.bayar();
            this.penumpang.splice(this.penumpang.indexOf(argumen)-1,1);
        }
        // console.log(this.penumpang);
    }

    selesai(){
        console.log(this.penghasilan);
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


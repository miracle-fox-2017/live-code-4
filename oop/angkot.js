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
  
  class Angkot{
    constructor(penumpang,penghasilan){
        this.penumpang = []
        this.penghasilan = 0
    }
    jalan(){
        for(var i = 0;i<this.penumpang.length;i++){
            this.penumpang[i].jarak+=2.2
        }
        
        
    }
    naik(arg1,arg2){
        var pass = new Penumpang(arg1,arg2);
        this.penumpang.push(pass) 
        // console.log(this.penumpang)
    }
    turun(argumen){
        for(var i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i].tujuan == argumen){
                // console.log(this.penumpang[i].bayar())
                this.penghasilan += this.penumpang[i].bayar()
                // console.log(this.penghasilan)
            }
            else{
                console.log('masi jauh pak'+' tujuan saya di'+this.penumpang[i].tujuan + ` nama saya ${this.penumpang[i].nama}`)
            }
        }

    }
    selesai(){
        console.log(this.penghasilan)
    }
  }

    // CONSTRUCTOR 
    //   tambahkan 2 properti
    //   - (a) untuk menampung penumpang-penumpang
    //   - (b) untuk menyimpan penghasilan
  
    // METHOD jalan()
    //   tambahkan jarak tempuh setiap penumpang 
  
    // METHOD naik(argumen1, argumen2)
    //   komposisi objek dari class Penumpang dgn data dari argumen
    //   lalu tambahkan ke properti (a)
  
    // METHOD turun(argumen)
    //   cek tujuan setiap penumpang
    //   bila tujuan penumpang == argumen
    //      tagih bayaran dan totalkan ke properti (b)
    //      keluarkan penumpang dari properti (a)
    //   console.log properti (a)
  
    // METHOD selesai()
    //   tampilkan total penghasilan
  
//   driver code #tidak boleh diubah#
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
//   angkot.turun('ujung');
  angkot.selesai(); // total penghasilan: 1650
  // driver code #tidak boleh diubah#
  
  
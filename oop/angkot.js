class Penumpang{
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
    constructor(){
        this.penumpang=[];
        this.penghasilan=0;
        this.initialClass=new Penumpang();
    }
    jalan(){
        this.initialClass.tambahJarak();
        const jalan=this.initialClass.jarak;
        for(let i=0;i < this.penumpang.length;i++){
            this.penumpang[i].jarak=jalan;
        }
    }
    naik(nama,tujuan){
        let penumpang=new Penumpang(nama,tujuan);
        this.penumpang.push(penumpang);
    }
    turun(lokasi){
        for(let i=0;i < this.penumpang.length;i++){
            if(this.penumpang[i].tujuan === lokasi){
                this.penghasilan+=this.initialClass.bayar();
                this.penumpang.splice(i,1);
            }
        }
        console.log(this.penumpang);
    }
    selesai(){
        console.log(this.penghasilan);
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
angkot.selesai(); // total penghasilan: 1650

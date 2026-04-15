class EgyetemiDolgozo {
    constructor(nev, cim, fizetes) {
        this.nev = nev;
        this.cim = cim;
        this.fizetes = fizetes;
    }
    
    fizetesModosit(emeles) {
        this.fizetes += emeles;
    }
}

class Tanar extends EgyetemiDolgozo {
    constructor(nev, cim, fizetes, tanszek) {
        super(nev, cim, fizetes);
        this.tanszek = tanszek;
        this.tantargyak = [];
    }
    
    tantargy(tantargy) {
        this.tantargyak.push(tantargy);
    }
    tantargyakSzama() {
        return this.tantargyak.length;
    }
}
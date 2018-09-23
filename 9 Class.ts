interface Iprop {
    id : number
    nama : string
    call() : void
}

class Pirates implements Iprop {
    id : number;
    nama : string;
    constructor(nama? :string) {
        this.id++
        this.nama = nama
    }

    call() {
        console.log(`id ${this.id} dengan nama ${this.nama}`)
    }
}

var pirate = new Pirates('Luffy')
pirate.call()
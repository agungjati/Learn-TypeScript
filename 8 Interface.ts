interface Iproperty {
    id : number
    nama : string
    call : () => void
}

var Person : Iproperty = {
    id : 1,
    nama : "Agung",
    call : () =>{
        console.log(this.nama)
    }
}

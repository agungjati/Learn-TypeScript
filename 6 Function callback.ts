function callBack( nama : string) : void {
    console.log(`Hai ${nama}`)
}

function callMe(nama :string , 
         callFunc : (nama :string) => void ) : void {
    callFunc(nama);
}

callMe('Agung', callBack) // Hai Agung
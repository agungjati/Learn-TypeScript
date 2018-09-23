function tambahStrOpt(a :string, b ?:string, c : string = "c") :string{
    return a + b + c;
}

console.log(tambahStrOpt("a","b")) // ab
console.log(tambahStrOpt("a")) // ac

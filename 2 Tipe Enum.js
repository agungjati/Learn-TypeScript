var Mesin;
(function (Mesin) {
    Mesin[Mesin["Kerja"] = 0] = "Kerja";
    Mesin[Mesin["Istirahat"] = 1] = "Istirahat";
    Mesin[Mesin["Diperbaiki"] = 2] = "Diperbaiki";
    Mesin[Mesin["Sedang_Rusak"] = 3] = "Sedang_Rusak";
})(Mesin || (Mesin = {}));
console.log("Index " + Mesin.Diperbaiki + " dengan value " + Mesin.Diperbaiki.toString());

satiEkspert=10000
satiPocetnik=2000
brojSatiDnevno=4
brojDana=satiPocetnik/brojSatiDnevno
brojDanaEkspert=satiEkspert/brojSatiDnevno
brojGodina=brojDana/365
brojGodinaEkspert=brojDanaEkspert/365
console.log(brojDana)
console.log("broj dana ucenja do pocetnika je", brojDana)
console.log("broj dana do eksperta je", brojDanaEkspert)
console.log("broj godina do pocetnika", brojGodina.toFixed(2))
console.log("broj godina do pocetnika", brojGodinaEkspert.toFixed(2))
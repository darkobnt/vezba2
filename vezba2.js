brojSatiUcPocetnik=4
brojSatiJunior=2000
brojSatiUcPosao=8
brojSatiExp=10000
brojDanaJunior=brojSatiJunior/brojSatiUcPocetnik
brojGodJunior=brojDanaJunior/365
brojDanaExp=(brojSatiExp-brojSatiJunior)/brojSatiUcPosao
brojDanaUkupno=brojDanaJunior+brojDanaExp
brojGodUkupno=brojDanaUkupno/365
console.log("broj dana do pocetnika je", brojDanaJunior)
console.log("broj godina do pocetnika je", brojGodJunior.toFixed(2))
console.log("broj dana do eksperta je", brojDanaUkupno)
console.log("broj godina do eksperta je", brojGodUkupno.toFixed(2))
brojSatiUcPocetnik=4
brojSatiJunior=2000
brojSatiUcPosao=8
brojSatiExp=10000
brojDanaJunior=brojSatiJunior/brojSatiUcPocetnik
brojGodJunior=brojDanaJunior/365
brojDanaExp=(brojSatiExp-brojSatiJunior)/brojSatiUcPosao
brojDanaUkupno=brojDanaJunior+brojDanaExp
brojGodUkupno=brojDanaUkupno/365
brojMeseciExp=(brojDanaUkupno%365)/30
brojDanaExpOst=(brojDanaUkupno%365)%30
brojMeseciJun=(brojDanaJunior%365)/30
brojDanaJunOst=(brojDanaJunior%365)%30
console.log("broj dana do pocetnika je", brojDanaJunior)
console.log("broj godina do pocetnika je", brojGodJunior.toFixed(2))
console.log("broj dana do eksperta je", brojDanaUkupno)
console.log("vreme do pocetnika je", Math.floor(brojGodJunior),"godina",Math.floor(brojMeseciJun),"meseci",brojDanaJunOst,"dana")
console.log("vreme do eksperta je", Math.floor(brojGodUkupno),"godina",Math.floor(brojMeseciExp),"meseci",brojDanaExpOst,"dana")
function vreme (satiUcenjaDnevno, satiUcenjaEksperta){
    satiDoPocetnika = 2000
    satiDoEksperta = 10000

    danaDoPocetnika = satiDoPocetnika / satiUcenjaDnevno
    danaDoEksperta = (satiDoEksperta - satiDoPocetnika) / satiUcenjaEksperta + danaDoPocetnika
}

vreme (4, 8)
poruka = `vreme do pocetnika je ${danaDoPocetnika} a do experta je ${danaDoEksperta}`
console.log(poruka)

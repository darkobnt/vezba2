satiDoPocetnika = 2000
satiDoEksperta = 10000

satiUcenjaDnevno = 4

danaDoPocetnika = satiDoPocetnika / satiUcenjaDnevno
danaDoEksperta = satiDoEksperta / satiUcenjaDnevno

function printaj (ukupnoDana){
    const godina = Math.floor(ukupnoDana / 365)
    let ostaloDana = ukupnoDana % 365
    const meseci = Math.floor(ostaloDana / 30)
    ostaloDana = ostaloDana % 30

    const poruka = `${ukupnoDana} dana se sastoji od ${godina} godina, ${meseci} meseci i ${ostaloDana} dana.`
    console.log(poruka)
}

printaj (danaDoPocetnika)
printaj (danaDoEksperta)
function gerarNumeros(quantd) {
    var numerosUnicos = []
    var i = 0
    while ( numerosUnicos.length < quantd ) {
        var sorteio = Math.floor(Math.random()*60 + 1)
        if (numerosUnicos.includes(sorteio)) {
             i++; continue;} else {numerosUnicos.push(sorteio)}
                            }
	console.log('Números Exclusivos: ' + numerosUnicos)
    console.log('Números Repitidos: ' + i)
                        }
  
/* function gerarNumeros(quantd) {
    const numerosUnicos = new Set();
    while ( numerosUnicos.size < quantd ) {
        numerosUnicos.add(Math.floor(Math.random() * 60 + 1));}
	console.log('Números Exclusivos: ' + Array.from(numerosUnicos))
                        }
  */


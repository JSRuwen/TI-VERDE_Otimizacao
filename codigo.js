function gerarNumeros(quantd) {
    var numerosUnicos = []
    var numerosGerados = []
    while ( numerosUnicos.length < quantd ) {
        numerosUnicos.push(Math.floor(Math.random()*60 + 1))
	numerosGerados.push(numerosUnicos(numerosUnicos.length))
        if (numerosUnicos.includes(numerosGerados)) {
		continue} else {numerosUnicos.push(numerosUnicos)}
                            }
	console.log('Números Exclusivos: ' + numerosUnicos)
                        }
  
/* function gerarNumeros(quantd) {
    const numerosUnicos = new Set();
    while ( numerosUnicos.size < quantd ) {
        numerosUnicos.add(Math.floor(Math.random() * 60 + 1));}
	console.log('Números Exclusivos: ' + Array.from(numerosUnicos))
                        }
.splice()
  */

/* function gerarNumeros(quantd) {
	var numerosUnicos = []
	var numerosGerados = []
	while(numerosUnicos.length < quantd) {
        	numerosGerados.push(Math.floor(Math.random()*60 + 1));
        	if (!numerosUnicos.includes(numerosGerados[numerosGerados.length - 1]))  
			{numerosUnicos.push(numerosGerados[numerosGerados.length - 1])}


                            }        	console.log(numerosUnicos);
}
gerarNumeros(60)
*/


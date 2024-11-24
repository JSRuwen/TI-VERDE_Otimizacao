//CÓDIGO DO PROFESSOR
function gerarAleatorios(quantd) {
	var vetor = []
	var geracoes = []

	while(vetor.length < quantd) {
		var aleatorio = Math.floor(Math.random()*60 + 1)
		geracoes.push(aleatorio)
		if(vetor.includes(aleatorio)){continue}
		else{vetor.push(aleatorio)}}
	console.log("Gerações: ", geracoes)
	console.log("Finais: ", vetor)
}



//CÓDIGO CONSTRUIDO PELO ESTUDANTE
function gerarNumeros(quantd) {
	var numerosUnicos = []
	var numerosGerados = []
	while(numerosUnicos.length < quantd) {
        	numerosGerados.push(Math.floor(Math.random()*60 + 1));
        	if (!numerosUnicos.includes(numerosGerados[numerosGerados.length - 1]))  
			{numerosUnicos.push(numerosGerados[numerosGerados.length - 1])}


                            } 
console.log(numerosGerados);
console.log(numerosUnicos);
}
  
/* function gerarNumeros(quantd) {
    const numerosUnicos = new Set();
    while ( numerosUnicos.size < quantd ) {
        numerosUnicos.add(Math.floor(Math.random() * 60 + 1));}
	console.log('Números Exclusivos: ' + Array.from(numerosUnicos))
                        }
.splice()
  */



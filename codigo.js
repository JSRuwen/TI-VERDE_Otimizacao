//CÓDIGO DO PROFESSOR
function gerarAleatorios(quantd) {
	console.time('tempo')
	var vetor = []
	var geracoes = []

	while (vetor.length < quantd) {
		var aleatorio = Math.floor(Math.random() * 60 + 1)
		geracoes.push(aleatorio)
		if (vetor.includes(aleatorio)) { continue }
		else { vetor.push(aleatorio) }
	}
	console.log("Gerações: ", geracoes)
	console.log("Finais: ", vetor)
	console.timeEnd('tempo')
}


//CÓDIGO CONSTRUIDO PELO ESTUDANTE
function gerarNumeros(quantd) {
	console.time('tempo');
	var numerosUnicos = [];
	var numerosGerados = [];
	while (numerosUnicos.length < quantd) {
		numerosGerados.push(Math.floor(Math.random() * 60 + 1));
		if (!numerosUnicos.includes(numerosGerados[numerosGerados.length - 1])) { numerosUnicos.push(numerosGerados[numerosGerados.length - 1]) }
	};
	console.log("Números Gerados: ", numerosGerados);
	console.log("Números Unicos: ", numerosUnicos);
	console.timeEnd('tempo')
}

/* 
A tentativa do aluno foi de eliminar a quantidade de variáveis possíveis. 
Em testes recentes, houve uma melhora de 50%
de sua eficiência, onde no Chrome foi possível notar a perfomance, já no FireFox, foi inversamente proporcional.
*/


//SOLUÇÃO FINAL PROPOSTA 
function numerosSortidos(quantd) {
	console.time('tempo');
	const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33
		, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
	let numerosUnicos = [];

	while (numerosUnicos.length < quantd) {
		var aleatorio = Math.floor(Math.random() * numeros.length + 1);
		numerosUnicos.push(numeros.splice(aleatorio, 1)[0])
	}
	console.log(numerosUnicos);
	console.timeEnd('tempo')
}

function main(quantd) {
	gerarAleatorios(quantd);
	gerarNumeros(quantd);
	numerosSortidos(quantd)
}
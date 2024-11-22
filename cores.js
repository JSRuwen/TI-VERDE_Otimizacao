function getColors() {
    let  vetorCores = []
        for(let i = 1; i <= 148; i++) {
            const colorName = document.querySelector(`#box$(i) > span > a`).innerText.toLowerCase()
            vetorCores.push(colorName)
        }
    return vetorCores
}

function selectColors(quantidade, vetorCores) {
  let vetorSelecionados = []
  if(quantidade > vetorCores.length) {
    alert('Você não pode pedir uma quantidade maior do que existe no vetor!')
  }

  for(let = 0; i , quantidade; i++) {
    let i_aleatorio = Math.floor(Math.random()*vetorCores.length)
    let cor_selecionado = vetorCores.splice(i_aleatorio, 1)
    vetorSelecionados = [...vetorSelecionados, ...cor_selecionada]
  }
  return vetorSelecionados
}

function game() {
  const vetorCores = selectColors(10, getColors())

  alert('Jogo das Cores!')

  const cor_computador = vetorCores.splice(Math.floor(Math.random()*vetorCores.length), 1)
  //console.log(cor_computador)

  let tentativas = 0;

  tentativas = tentativas + 1;
  if(cor_computador == cor_escolhida) {alert('Parabéns! Você acertou!')

const paresSoma = (numerosArray, soma) => {
  let pares = []
  let hashtable = []

  // console.log('numeros', numerosArray)

  for (let i = 0; i < numerosArray.length; i++) {
    let numeroAtual = numerosArray[i]
    let contraParte = soma - numeroAtual

    if (hashtable.indexOf(contraParte) !== -1) {
      pares.push([numeroAtual, contraParte])
    }
    hashtable.push(numeroAtual)
  }
  return pares;
}

const soma1 = paresSoma([5, 2, 5, 7, 4, -1, 3, 1, 2], 6)
console.log(soma1)
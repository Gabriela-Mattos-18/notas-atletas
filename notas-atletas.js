let atletas = [
  { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
  { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
  { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
  { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
]

function calcularNotas(lista) {
  for (let i = 0; i < lista.length; i++) {
    let notas = lista[i].notas.sort((a, b) => a - b)
    let notasValidas = notas.slice(1, 4)
    let soma = 0
    notasValidas.forEach(n => soma += n)
    let media = soma / notasValidas.length

    console.log(`Atleta: ${lista[i].nome}`)
    console.log(`Notas Obtidas: ${notas.join(',')}`)
    console.log(`Média Válida: ${media}\n`)
  }
}

calcularNotas(atletas)

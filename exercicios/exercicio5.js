const notas = [5, 4, 3, 0, 10]

const notasSomadas = notas.reduce((acumulador, itemAtual) => acumulador + itemAtual)

console.log(`Soma das notas: ${notasSomadas}`)
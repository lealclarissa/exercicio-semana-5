const valores = [2, 34, 56, 3, 9, 6, 55, 106];

const numerosImpar = valores.filter(item => item % 2 !== 0) 

const somaImpar = numerosImpar.reduce((acumulador, itemAtual) => acumulador + itemAtual)
console.log(`A soma de todos os valores ímpares é: ${somaImpar}`)
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda'];

const nomesComA = nomes.filter(item => item[0] === "A")

console.log(`Lista de nomes que iniciam com a letra A: `)
for (let i = 0; i < nomesComA.length; i++) {
    console.log(nomesComA[i])   
}
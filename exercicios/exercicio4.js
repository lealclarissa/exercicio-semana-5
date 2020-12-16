const listaDeMercado = [
  {
    nome: "Maçã",
    comprado: true,
  },
  {
    nome: "Chamyto",
    comprado: false,
  },
  {
    nome: "Nutella",
    comprado: false,
  },
  {
    nome: "Sorvete",
    comprado: true,
  },
  {
    nome: "Suco",
    comprado: false,
  },
];

const produtosEmFalta = listaDeMercado.filter((item) => item.comprado !== true);

console.log(`Falta comprar: `);

for (let i = 0; i < produtosEmFalta.length; i++) {
  console.log(produtosEmFalta[i].nome);
}

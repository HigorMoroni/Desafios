const input = prompt('Adicione os valores')
//const input = '2 3'
const valores = input.split(' ');

const codigoProduto = valores.shift();
const quantidade = valores.shift();

const tabelaPrecos = {
    1: 4,   // Cachorro Quente
    2: 4.5, // X-Salada
    3: 5,   // X-Bacon
    4: 2,   // Torrada simples
    5: 1.5  // Refrigerante
};

const valorTotal = quantidade * tabelaPrecos[codigoProduto];

//console.log(`Total: R$ ${valorTotal.toFixed(2)}`);
alert(`Total: R$ ${valorTotal.toFixed(2)}`)
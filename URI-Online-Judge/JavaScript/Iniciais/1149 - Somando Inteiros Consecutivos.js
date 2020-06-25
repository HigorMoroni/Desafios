// Faça um algoritmo para ler um valor A e um valor N. Imprimir a soma de A para cada i com os valores (0 <= i <= N-1). Enquanto N for negativo ou ZERO, um novo N(apenas N) deve ser lido.

// Entrada
// A entrada contém somente valores inteiros, podendo ser positivos ou negativos. Todos os valores estão na mesma linha.

// Saída
// A saída contém apenas um valor inteiro.

var input = '3 -1 0 -2 2'
//var input = '3 2' //require('fs').readFileSync('/dev/stdin', 'utf8');
const valores = input.split(' ');

const positivos = valores.filter(valor => valor>0);
const [A,N] = positivos;
let total = 0;

for (let i = 0; i < N; i++) total += (Number(A)+Number(i));

console.log(total);
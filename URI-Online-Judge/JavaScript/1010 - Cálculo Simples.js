// Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

// Entrada
// O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

// Saída
// A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var pecas1 = lines.shift().split(' ')
var pecas2 = lines.shift().split(' ')

const peca1 = 

const p1 = (pecas.p1[1]*pecas.p1[2])
const p2 = (pecas.p1[1]*pecas.p1[2])

console.log("VALOR A PAGAR: R$ " + (p1+p2).toFixed(2))
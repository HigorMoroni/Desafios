// Ler um valor N. Calcular e escrever seu respectivo fatorial. Fatorial de N = N * (N-1) * (N-2) * (N-3) * ... * 1.

// Entrada
// A entrada contém um valor inteiro N (0 < N < 13).

// Saída
// A saída contém um valor inteiro, correspondente ao fatorial de N.

var input = '7';
var valor = Number(input);
let resultado = valor;

for (i=valor;i>1;i--) resultado*=(i-1)

console.log(resultado);
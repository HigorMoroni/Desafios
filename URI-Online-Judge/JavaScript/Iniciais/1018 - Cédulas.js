// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

// Saída
// Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

var input = '503' //require('fs').readFileSync('/dev/stdin', 'utf8'); 
var lines = input.split('\n');

const inicial = lines.shift()
let valor = Number(inicial)
let total100 = 0
let total50 = 0
let total20 = 0
let total10 = 0
let total5 = 0
let total2 = 0
let total1 = 0

if (valor>=100) {
    total100 = Math.trunc(valor/100)
    valor%=100 
}
if (valor>=50) {
    total50 = Math.trunc(valor/50)
    valor%=50 
}
if (valor>=20) {
    total20 = Math.trunc(valor/20)
    valor%=20 
}
if (valor>=10) {
    total10 = Math.trunc(valor/10)
    valor%=10 
}
if (valor>=5) {
    total5 = Math.trunc(valor/5)
    valor%=5 
}
if (valor>=2) {
    total2 = Math.trunc(valor/2)
    valor%=2 
}
if (valor>=1) {
    total1 = Math.trunc(valor/1)
    valor%=1 
}

console.log(inicial)
console.log(total100 + " nota(s) de R$ 100,00")
console.log(total50 + " nota(s) de R$ 50,00")
console.log(total20 + " nota(s) de R$ 20,00")
console.log(total10 + " nota(s) de R$ 10,00")
console.log(total5 + " nota(s) de R$ 5,00")
console.log(total2 + " nota(s) de R$ 2,00")
console.log(total1 + " nota(s) de R$ 1,00")
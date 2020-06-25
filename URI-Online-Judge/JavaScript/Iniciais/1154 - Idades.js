// Faça um algoritmo para ler um número indeterminado de dados, contendo cada um, a idade de um indivíduo. O último dado, que não entrará nos cálculos, contém o valor de idade negativa. Calcular e imprimir a idade média deste grupo de indivíduos.

// Entrada
// A entrada contém um número indeterminado de inteiros. A entrada será encerrada quando um valor negativo for lido.

// Saída
// A saída contém um valor correspondente à média de idade dos indivíduos.

// A média deve ser impressa com dois dígitos após o ponto decimal.
var input = '34\n56\n44\n23\n-2'
const dados = input.split('\n')
let negativo = false;
const valores = dados.filter(valor => {
    if (valor<0) negativo=true;
    if (negativo) return false;
    else return true;
})

const resultado = valores.reduce((acumulador, valor) => {
    return acumulador+=Number(valor);
},0);

const media = resultado/valores.length;

console.log(media.toFixed(2));
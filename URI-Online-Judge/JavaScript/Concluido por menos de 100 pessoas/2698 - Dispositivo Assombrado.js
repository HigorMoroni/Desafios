// Em uma recente viagem a uma escavação arqueológica na ilha caribenha de São Basil, você encontrou um misterioso dispositivo com instruções que lembram um enigma. Seu guia local Vibenas diz que caso você resolva o enigma, o dispositivo talvez lhe mostre o local onde um grande tesouro deixado pelo sanguinário pirata Lyerpes está escondido.

// O dispositivo tem uma fita com L células indexadas de 0 à L-1. Cada célula possui uma cor que pode ser alterado através dos comandos do dispositivo. Cada cor é codificada como um inteiro, e inicialmente todas as células possuem a mesma cor. As instruções que você encontrou representam N passos que devem ser executados antes do dispositivo mostrar o caminho do tesouro. Cada passo é descrito usando 4 inteiros P, X, A e B. As instruções dizem que para completar um passo você deve contar o número de células que atualmente possuem a cor P. Digamos que este número seja S. Então você deve calcular os valores

// M1 = (A + S2 ) mod L ,

// M2 = (A + (S + B)2 ) mod L .

// Finalmente você deve fazer todas as células no intervalo fechado [min(M1,M2, max(M1,M2)] serem da cor de X.

// Após essa exaustiva tarefa de processar os N passos requeridos pelo dispositivo, você tera ainda um trabalho: dada a cor que aparece o maior número de vezes no dispositivo após todos os passos (isto é, a cor mais frequente), você deve ir ao local do naufrágio do navio de Lyerpe e dizer em voz alta o número de celulas que possuem tal cor. Note que este número é único mesmo se mais de uma cor aparecer o maior número de vezes no dispositivo após todos os passos.

// Realizando todos estes cálculos no dispositivo levariam gerações, mas você, um renomado programador, pode criar um programa que rapidamente indica a resposta para o enigma. Após isso, o verdadeiro desafio será encontrar o local do naufrágio do velho navio de Lyerpes.

// Entrada
// O primeiro número contem três inteiros L, C e N (1 ≤ L, C, N ≤ 105 ), representando respectivamente o número de celulas na fita, o número de cores disponíveis e o número de passos nas instruções. Cores são identificadas por inteiros distintos indo de 1 à C e inicialmente todas as células contem 1 cor. Cada uma das próximas N linhas descreve um passo das instruções com 4 inteiros P, X, A e B (1 ≤ P, X ≤ C and 0 ≤ A, B ≤ 108 ), indicando respectivamente a cor a qual o número de celulas é usado para decidir o intervalo dos valores usado para calcular os limites como acima descritos.

// Saída
// Dado uma cor que aparece o maior número de vezes na fita do dispositivo após realizar a sequência de passos descrita na entrada, imprima uma única linha com um inteiro que indica o número de células contendo aquela cor.

//var input = '7 5 2\n1 2 5 3\n3 3 0 1' //require('fs').readFileSync('/dev/stdin', 'utf8'); 
//var input = '7 10 8\n10 6 5 6\n5 1 7 5\n9 9 10 1\n3 2 6 7\n8 3 4 8\n3 7 7 4\n9 3 9 7\n1 1 8 1000' //require('fs').readFileSync('/dev/stdin', 'utf8'); 
var input = '37 8 20\n7 2 3 10\n7 7 5 1\n1 6 5 10\n6 4 6 0\n5 6 7 6\n3 3 2 5\n4 4 6 8\n4 2 0 5\n1 7 5 2\n1 5 0 10\n6 8 5 5\n4 2 7 4\n1 2 2 8\n1 7 4 3\n6 7 4 1\n6 7 4 6\n3 1 2 8\n3 6 10 0\n4 4 1 8\n8 2 2 9'
var lines = input.split('\n')
let dados = lines.shift().split(' ')
const L = Number(dados.shift())
const C = Number(dados.shift())
const N = Number(dados.shift())
let celulas = []
for(let i=1;i<=L;i++) celulas.push(1)
for(let j=1;j<=N;j++) {
    const inst = lines.shift().split(' ')
    const P = Number(inst.shift())
    const X = Number(inst.shift())
    const A = Number(inst.shift())
    const B = Number(inst.shift())
    let S = 0
    celulas.forEach(valor=>{if(valor == P)S++})
    const M1 = (A+S*S)%L
    const M2 = (A+Math.pow((S+B),2))%L
    const min = M1<M2?M1:M2
    const max = M1<M2?M2:M1
    for(let c=min;c<=max;c++) {
        celulas[c]=X
    }
}
// MEU ALGORITMO INGENUO
// let vetorContador = []
// let numeroDeCelulas = 0
// celulas.forEach(valor => {
//     if (!vetorContador[valor]) vetorContador[valor]=1
//     else vetorContador[valor]++
//     if (vetorContador[valor]>numeroDeCelulas) numeroDeCelulas=vetorContador[valor]
// })

// ALGORITMO DE ORDENAÇÃO - O(n*log2 n)
celulas.sort();
var maior = null;
var ocorrenciasMaior = -1;
var contagem = 1;
for ( var i = 1 ; i <= celulas.length ; i++ ) {
  if ( i < celulas.length && celulas[i] == celulas[i-contagem] ) contagem++;
  else if ( contagem > ocorrenciasMaior ) {
    maior = celulas[i-1];
    ocorrenciasMaior = contagem;
  }
}
//console.log(numeroDeCelulas)
console.log(ocorrenciasMaior)

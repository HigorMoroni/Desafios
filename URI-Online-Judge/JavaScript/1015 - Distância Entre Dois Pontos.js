// Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

// Distancia =

// Entrada
// O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

// Saída
// Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

var input = '-2.5 0.4\n12.1 7.3' //require('fs').readFileSync('/dev/stdin', 'utf8'); 
var lines = input.split('\n');
var ponto1 = lines.shift().split(' ')
var ponto2 = lines.shift().split(' ')

const distancia = Math.sqrt(Math.pow((ponto2[0]-ponto1[0]),2)+Math.pow((ponto2[1]-ponto1[1]),2))

console.log(distancia.toFixed(4))
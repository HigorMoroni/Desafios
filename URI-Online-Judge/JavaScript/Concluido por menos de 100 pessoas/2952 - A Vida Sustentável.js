// Oliveira é um menino que ama jogos online. Um de seus preferidos é o “A Vida Sustentável”, no qual controla um boneco que deve viver uma vida sustentável, seguindo ações diárias que não comprometam a sustentabilidade do seu mundo. Ele é o único personagem do jogo, pois o objetivo do mesmo é mostrar o quão nossas atividades afetam o mundo a nossa volta. 
// Dentre as principais atividades realizadas no jogo, ele pode comer uma variedade de alimentos e utilizar alguns tipos de veículos. Essas duas atividades comprometem dois indicadores do seu mundo, quantidade de água utilizável restante (com relação a sua alimentação) e quantidade de gases que a camada de ozônio pode suportar (com relação aos seus meios de transporte), porém garantem nutrição ou velocidade ao seu personagem.
// Para este problema, utilizaremos as seguintes tabelas, que relacionam alimentos a consumo de água e veículos a emissão de gases, além de incluir a nutrição de cada alimento e a velocidade de cada veículo:



// Oliveira percebeu que havia um custo benefício para cada alimento e veículo. Por exemplo, o custo benefício do Carro seria -20, pois emite 100 de gás, mas proporciona 80 de velocidade e do Milho seria 650, pois consome 450 de água, mas proporciona 1000 de nutrição.
// Um dia neste jogo tem N horas, e o jogador pode jogar por até N horas o jogo. Oliveira começa sempre jogando em alguma hora aleatória do dia de ocorrência do jogo e termina de jogar após algumas horas, não mais que N, e em cada hora jogada, seu personagem ou comia ou utilizava um veículo.
// Exemplo, se o jogo tiver 10 horas, Oliveira poderia começar pela hora 7 e jogar até a hora 6, podendo parar antes.
// Após observar um relatório de suas ações, gostaria de saber qual o valor dos intervalos (segmento contínuo do vetor) de tempo que teve um maior e um menor custo benefício, para que analise esses intervalos e tente equilibrar melhor suas ações na próxima vez que for jogar. As horas que Oliveira não joga não devem ser consideradas para a solução, caso haja apenas horas em que não jogou, a resposta é 0 0.

// Entrada
// A primeira linha da entrada contém um inteiro N(0 < N ≤ 100000) que indica a quantidade de horas de um dia no jogo. A seguir, seguem N caracteres indicando as ações de Oliveira para cada hora.
// Cada caractere poderá ser:
// ● A, para Arroz;
// ● C, para Carne;
// ● S, para Soja;
// ● P, para Plockt;
// ● M, para Milho;
// ● K, para Carro;
// ● B, para Bicicleta
// ● N, quando, nesta hora, Oliveira não jogou.

// Basicamente, o que marca a primeira hora jogada é a primeira ocorrência de um caractere que não seja ‘N’ , após um que seja ou se a primeira hora já não for ‘N’.

// Saída
// 2 inteiros, indicando o valor do maior intervalo de custo benefício, e do menor intervalo de custo benefício, respectivamente.

var input = '7\nA C S P M K B';  //require('fs').readFileSync('/dev/stdin', 'utf8');
//var input = '3\nC N C';
//var input = '10\nN N N N N N N N N N'
var lines = input.split('\n');
const horas = Number(lines.shift()) //string
const consumo = lines.shift().split(' ') //vetor
let custo = []; // vetor de custos 

const custoBeneficio = {
    A: 1650-1700,  //   -50
    C: 2000-15500, //-13500
    S: 2000-1800,  //   200
    M: 1000-450,   //   550
    P: 13000-0,    // 13000
    K: 80-100,     //   -20
    B: 40-0,       //    40
    N: 0           //     0
}

consumo.forEach(valor => {
    custo.push(custoBeneficio[valor]);
});

let maximo = 0;
let soma = 0;
let minimo = 0;

custo.forEach(valor => {
    soma += valor;
    if (soma < 0 && soma < minimo) minimo = soma;
    if (soma  0 && soma < minimo) minimo = soma;
    // const anterior = index === 0 ? 0 : custo[index-1];
    // console.log(anterior + ' ----> ' + valor);
    // if (valor>anterior) {
    //     console.log('aumentando');
    //     somaMin = 0;
    //     if (somaMax === 0) somaMax = valor;
    //     else somaMax += valor;
    //     if (somaMax > maximo) maximo = somaMax;
    //     console.log(somaMax, maximo);
    // } else if (valor<anterior) {
    //     console.log('diminuindo');
    //     somaMax = 0;
    //     if (somaMin === 0) somaMin = valor;
    //     else somaMin += valor;
    //     if (somaMin < minimo) minimo = somaMin;
    //     console.log(somaMin, minimo);
    // }
});
console.log(maximo, minimo);
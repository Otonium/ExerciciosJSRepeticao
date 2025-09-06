//!Ex1
//*Contagem de 1 a 10
//* Inicia do 1; Inicio = i = 1
//* Fazer até 10; Condição, limite
//* Limite, ATÉ (i <,>,=)
  // "let i = 1" é inicio no for: Começa no 1
  // - declara variável limitado ao bloco (laço laço for).
  // - "i" nome da variável contador (usado no for). 
  // "i <= 10" condição 
  // "i++" é a ação feita no final 
//?for ( let i = 1; i <= 10; i++ ) {
//?  console.log(i);
//?}

//!Ex2
//* Tabuada do input
//* Pede numero do usuario
//* Confere se é inteiro, positivo
//* Inicio = i = 1
//* Condição: Até 10
//* Mostrar numeros usados na operação
//* FAZER operação
//* Atualiza i

// Converter a resposta textual em número inteiro.
// "parseInt" tenta transformar a string em inteiro; o segundo argumento "10" força base decimal.
//?let num = parseInt(prompt("Digite um número:"));

// Verifica se conversão fez número válido.
// "isNaN" = "is Not a Number" (não é número). True SE conversão falhou.
// SE não é numero --> Escreve aviso
//?if (isNaN(num)) {
//?    console.log("Entrada inválida. Por favor, digite um número inteiro.");
  // "return" termina a execução. 
//?    return;
//?}

// SE número válido, exibe aviso da tabuada
//?console.log("Tabuada do:", num);
// "console.log" pode receber vários argumentos separados por vírgula; eles são concatenados ao mostrar. 

//For: Começo; Condição; Atualiza { Faz }
  // Parte inicial: declara o contador "i" com valor inicial 1.
  // "let" declara uma variável com escopo limitado ao bloco do for (ou seja, só existe dentro do laço).
//?for ( let i = 1; i <= 10; i++) {
  // "const result = numero * i;" — multiplica o número escolhido pelo contador.
  // "const" usado aqui porque naquela iteração o produto não será reatribuído.
  // Analogia: em cada parada você pega a ficha do número e multiplica pelo número de visitantes daquela vez.
//?    let result = num * i;

  // Exibir no console o resultado formatado.
  // Usamos "console.log(`${numero} x ${i} = ${produto}`);" — template string entre crases (` `).
  // - As crases criam uma string em que ${expressão} é substituída pelo valor da expressão.
  // Analogia: template string é como um molde onde você coloca etiquetas nos espaços vazios.
//?    console.log(num + " x " + i + " = " + result);
//?}

//!Ex3
//* Pedir numero pro usuario
//* 
/* 
  Converter texto em número inteiro.
*/
// const n = parseInt(entrada);
// - const
//   n vai ser o input convertido para --> numero inteiro, e não vai mudar depois disso
//?const n = parseInt(prompt("Digite um número natural (ex.: 5):")); // converte a string do prompt para um inteiro 

/* 
  Validar a entrada: checar se o valor obtido é número e natural (>= 1).
*/
//  CONDIÇÃO
//  verifica SE valor é NaN 
//  OU
//  n < 1
//  Verifica SE natural e positivo
//   (Com zero seria --> n < 0.)
//?if (isNaN(n) || n < 1) {
  // SE entrada NaN OU menor que 1, avisa e para.
//?  console.log("Entrada inválida. Informe um número natural (inteiro >= 1).");
//?} else {
  /* 
    Inicializar a variável que guardará a soma acumulada.
  */
  //  declara uma variável cujo valor pode mudar durante a execução.
  //   começa vazia --> 0
  //    padrão em somas e contagens.
//?  let soma = 0; // A contagem começa do zero

  /* 
    Repetir de ponto Inicial ATÉ Final = FOR
  */
  // - let i = 1
  //   "let" declara a variável do contador (Inicio, condição, atualiza).
  //   posição atual: 1, 2, 3, ...
  //   começa = 1.
  //   condição = ATÉ n (Até = menor ou igual o limite)
//?  for (let i = 1; i <= n; i++) {
//?    soma = soma + i; // acumula o valor atual de i na variável soma
//?  }

//?  console.log("A soma dos primeiros", n, "números naturais é:", soma);
//?} // fim do else 

//!! INTERMEDIÁRIO
//! Ex1
// Primeiro de tudo: Deve ir de 1 a 50
//?for (let i = 1; i <= 50; i++) {
  //DEPOIS
  // Verificar SE o número ATUAL (i) é par
//?  if (i % 2 === 0) {
    // if (i % 2 === 0)
    //SE resto = 0, É par, então faça:
    // Mostrar o número par no console
//?    console.log(i);
//?  } 
//?} // fim do do for



//! Ex2
// numSorte  -> nome da variável. Guarda valor sorteado, e não muda depois
// Math  -> objeto do JS com funções matemáticas pra numero aleatorio.
// .random() -> método (Conjunto de ações) retorna um número decimal aleatorio.
// * 100 -> multiplica o decimal por 100, cria intervalo [0,100).
// Math.floor(...) -> arredonda valor, transforma 99.999 em 0 até 99 (inteiro).
// + 1  -> faz intervalo mudar para 1..100 (inteiros).
//?let numSorte = Math.floor(Math.random() * 100) + 1;

// Variável guarda resposta do usuario 
//?let resposta;

//?console.log("Adivinhe um número de 1 a 100.");

// Enquanto evento-->(o usuário não acertar), faça:
// while (true) { ... }
//?while (true) {
//?  let input = prompt("Digite um número entre 1 e 100:");

  // Converte o texto digitado para número inteiro (base 10) e guarda em "resposta".
//?  resposta = parseInt(input, 10);

  // Se a conversão falhou (resultado é NaN), avisa e volta para pedir numero.
  // if (isNaN(resposta)) { console.log("Entrada inválida. Digite um número inteiro."); continue; }
  // continue -> pula para a próxima iteração do while; não executa o restante do bloco atual.
//?  if (isNaN(resposta)) {
//?    console.log("Entrada inválida. Digite um número inteiro.");
//?    continue;
//?  }

  // Se o número fora do intervalo 1..100, avisa e repete o pedido.
  // if (resposta < 1 || resposta > 100) { console.log("Número fora do intervalo. Informe 1 a 100."); continue; }
  //
  // resposta < 1 -> verifica SE é menor que 1.
  // OU
  // resposta > 100 -> SE é maior que 100.
  // SE fora, mostra mensagem
//?  if (resposta < 1 || resposta > 100) {
//?    console.log("Número fora do intervalo. Informe 1 a 100.");
//?    continue;
//?  }

  // SE o resposta é = numSorte, acertou: avisa e para o WHILE.
  // if (resposta === numSorte) { console.log("Acertou! O número era " + numSorte); break; }
//?  if (resposta === numSorte) {
//?    console.log("Parabéns! Você acertou. O número era " + numSorte + ".");
//?    break;
//?  }

  // OU SE NÃO acertou, avisa se foi maior ou menor que numSorte.
  // if (resposta < numSorte) { console.log("Errado — o número correto é MAIOR"); }
  // else { console.log("Errado — o número correto é MENOR"); }
//?  if (resposta < numSorte) {
//?    console.log("Errado — o número correto é MAIOR.");
//?  } else {
//?    console.log("Errado — o número correto é MENOR.");
//?  }

  // WHILE volta para pedir outra resposta (ENQUANTO NÃO chegar ao 'break').
//?}

//?console.log("Fim do jogo.");

//! Ex3
//*Parece semelhante ao 3 iniciante
//* 3 iniciante -- Do 1 ATÉ n
//* Intermediario -- n até 0
/* 
  Converter o texto em número inteiro para trabalhar com soma.
*/
// const n = parseInt(entrada);
// - const
//   n vai ser o o input convertido para --> numero inteiro, e não vai mudar depois disso
//?const n = parseInt(prompt("Digite um número natural (ex.: 5):")); // converte a string do prompt para um inteiro 
/* 
  Linha 3:
  Validar a entrada: checar se o valor obtido é número e se é natural (>= 1).
*/
//  CONDIÇÃO
//  verifica SE valor é NaN. 
//  OU
//  n < 1
//  Verifica SE natural e positivo
//   Com zero --> n < 0 .
//?if (isNaN(n) || n < 1) {
  // SE entrada NaN OU menor que 1, avisa e para.
//?  console.log("Entrada inválida. Informe um número natural (inteiro >= 1).");
//?} else {
  /* 
    Inicializar a variável que guardará a soma acumulada.
  */
  //  declara uma variável cujo valor pode mudar durante a execução.
  //   começa vazia --> 0
  //    padrão em somas e contagens.
//?  let soma = 0; // A contagem começa do zero

  /* 
    Repetir de ponto Inicial ATÉ Final = FOR
  */
  // - let i = 1
  //   "let" declara a variável do contador (Inicio, condição, atualiza).
  //   posição atual: 1, 2, 3, ...
  //   começa = 1.
  //   condição = ATÉ n (Até = menor ou igual o limite)
//?  for (let i = 1; i <= n; i++) {
//?    soma = soma + i; // acumula o valor atual de i na variável soma
//?  }

//?  console.log("A soma dos primeiros", n, "números naturais é:", soma);
//?} // fim do else 

//!! AVANÇADO
//!Ex1

//?const n = parseInt(prompt("Digite um número inteiro positivo:"));

// Verificar se a conversão deu certo: isNaN(n) 
//?if (isNaN(n)) {
//?  console.log("Entrada inválida. Informe um número inteiro válido.");
//?}

// SE negativo --> Avisa
//?if (n < 0) {
  // n < 0 verifica se o valor é negativo
//?  console.log("Por favor, informe um número inteiro não-negativo (0 ou maior).");
//?}

// Preservar o valor original para mostrar no final.
// copia de segurança para não perder n no final.
//?const copSegurança = n;

//variável que vai guardar a soma.
//?let soma = 0;

// Outra copia de n, que vai ser alterado
//?let nMod = n;
// variavel que reduz valor dentro do while sem mudar o "original".

// Enquanto nMod > 0, guarda o resto dele.}
//?while (nMod > 0) {
  // -  SE nMod ainda tem numero

  // guarda último dígito: resto da divisão por 10.
//?  let digito = nMod % 10;

  // Adicionar esse dígito na soma.
//?  soma = soma + digito;
  // soma = soma + digito;
  // - pega o total que já tinha em "soma" + novo dígito.

  // Remover o último dígito de nMod. divide por 10 (Altera casa dec) e arredonda.
//?  nMod = Math.floor(nMod / 10);
  // nMod / 10
  // - divide por 10: ex.: 345 / 10 = 34.5
  // Math.floor(...)
  // - Math.floor arredonda, descarta dígito decimal .
  // - atualizamos nMod com o valor reduzido (sem o último dígito).

  // Após isso, o while volta ao começo e checa se num > 0 para repetir.
//?} // fim do while

//?console.log("Número informado:", copSegurança);
// console.log("Soma dos dígitos:", soma);
//?console.log("Soma dos dígitos de " + copSegurança + " = " + soma);

//! Ex2
//*Fatorial: n! --> n*(n - x) e x++ ATÉ n = 1
//* Entrada; Saida; Operações (Condições, ações e contas)
//*Entrada: n
//*Saida: Fatorial --> n*(n - x++)
//*Operações: Multiplicar e subtrair (i--) até n === 1
const nOriginal = parseInt(prompt("Digite um número:"));
let nMod = nOriginal;
let x = 1;
  while (nOriginal - x >= 1) {       // ou while (x < nOriginal)
    nMod *= (nOriginal - x);
    x++;               
    console.log(nMod)     
  }






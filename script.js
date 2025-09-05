//! Basico
//! Ex 1 
// Contar de 1 a 10
// Exibir cada um no console
//* O indce (Lista, ponto, item, ponteiro...) começa em 1
//* Estrutura for comum:
//*     for ( inicio, condição, atualização)
//*     for (etapa = 1; etapa <= 10; etapa++) {
//*         Faça --> escreve no console
//*     }

//for(let i = 1; i <= 10; i++){
//    console.log(i)
//}

//! Ex2
// Tabuada do numero até 10
//* Usuario digita numero (Input)
//* Pega o numero e multiplica ATE 10
//* ATE Condiçao = For
//*  Estrutura for comum:
//*     for ( inicio, condição, atualização)
//*     for (etapa = 1; etapa <= 10; etapa++) {
//*         Faça --> escreve no console
//*     }
//*
//* for ( comeca no 1, confere se chegou a 10, atualiza)
//*       faça --> multiplique pela variavel da etapa
//*                do for, exiba o resultado

//let n = prompt("Digite um numero: ")

/*if(!n.isInteger()) {
    console.log("digite numero inteiro")
}*/


/*if (typeof n === "string") {
    console.log("Digite um numero: ")
} else if (typeof n == "number") {
    for ( i = 1; i <= 10; i++){
        console.log(n * i)
    }
} else {
    console.log("Digite um numero: ")
}*/

//for (i = 1; i <= 10; i++) {
//    console.log(n * i)
//}

//! Ex 3
// Soma primeiros numeros naturais
// somar numeros 1 ATE n
// n = usuario digita

//* variaveis 
//* N = numero 
//* resultadoDaSoma = 0 Comeca vazio
//*
//* for (primeiro numero somado
//*      vai ser 1; confere se o numero somado 
//*      já é igual ao n; atualiza)
//*     { Faça --> resultadoDaSoma = i + N
//*                Exibe resultado da soma}

let resultSum = 0
let n = parseInt(prompt("Digite um numero: "))

for(i = 1; i <= n; i++) {
    resultSum = n + i
    console.log(n + "+" + i)
    console.log(resultSum)
}
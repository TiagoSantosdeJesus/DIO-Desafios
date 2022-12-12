/*Desafio
Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.*/
var a = 3;
var N = 18;
var somaMultiplosDe3 = 0;

for (i=0; i<= N; i++){
    if(i % 3===0){
        somaMultiplosDe3 += i;
    }
}

console.log(somaMultiplosDe3);
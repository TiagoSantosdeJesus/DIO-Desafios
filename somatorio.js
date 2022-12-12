//Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.

function somatorio (n, soma){
    var n;
    var soma=0;
    for (i=0; i<= n; i++){
        soma +=i;
    }
    console.log (soma);
}
somatorio(15);

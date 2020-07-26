const vetor = [10,9,8,7,11,12,13,14,15,6,5,4,3,2,1];


function ordenaVetor(){
    let aux = 0;

    for (let i = 0; i < vetor.length; i++){
        for (let j = 0; j < vetor.length; j++){
            if (vetor[i] < vetor[j]){
                aux = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = aux;
            }
        }
    }
}

ordenaVetor();

function mostraVetorOrdenado(){
    for (let i = 0; i < vetor.length; i++){
        console.log(vetor[i]);
    }
}

mostraVetorOrdenado();
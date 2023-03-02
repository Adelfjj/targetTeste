let inputNumberDois = document.querySelector("#numero");
let btnVerificar = document.querySelector("#btnDois");
let mensagemDois = document.querySelector("#mensagem");

btnVerificar.addEventListener("click", () => {
    if(inputNumberDois.value !== ""){
        fibonacci(parseInt(inputNumberDois.value));
    }
});

const fibonacci = (entrada) => {
    var fibonacci = [];
    var result = 0;
    fibonacci[0] = 0;
    fibonacci[1] = 1;
   
    for (var i = 2; result < entrada + 1; i++) {
     fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
     result = fibonacci[i];
    }

    if(fibonacci.includes((entrada))){
        messagem("O número informado pertence a sequência");
    }else{
        messagem("O número informado não pertence a sequência");
    }
}
const messagem = (texto) => {
    let p = mensagemDois.querySelector("p");
    p.innerText = texto; 
}

/////////////////
////// Desafio 3
let menorF = document.querySelector("#menorf");
let maiorF = document.querySelector("#maiorf");
let mediaF = document.querySelector("#mediaf");

const extrairDados = async () => {
   await fetch("./scripts/dados.json", {
        method: 'GET',
        headers: {
            'Content-type':'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((dados) => {
      faturamento(dados);
    })
    .catch((err) => console.log(err));
}

const faturamento = (dados) => {
    let menor;
    let maior;
    let media = 0;

    for(let obj of dados){

        media += obj.valor;

        if(!menor || obj.valor < menor.valor && obj.valor != 0){
            menor = obj;
        }
        if(!maior || obj.valor > maior.valor && obj.valor != 0){
            maior = obj;
        }
    }

    menorF.innerHTML = `Menor faturamento foi de <strong> ${menor.valor}</strong> no dia <strong> ${menor.dia} </strong>`; 
    maiorF.innerHTML = `Maior faturamento foi de <strong> ${maior.valor}</strong> no dia <strong> ${maior.dia} </strong>`; 

    mediaFaturamento(media,dados);

}

const mediaFaturamento = (media,dados) => {

    let fsuperior = [];
    let diaUtil = 0;

    for(let obj of dados){
        if(obj.valor !== 0){
            diaUtil++;
        }
    }

    media = media / diaUtil;

    for(let obj of dados){
        if(obj.valor > media){
            fsuperior.push(obj);
        }
    }
    
    mediaF.innerHTML = `Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: <strong> ${fsuperior.length}</strong>`;
}

extrairDados();

////////////////////////
/////Desafio 4
///////////////////////
let lista = document.querySelector("#quatro-lista");

const ftotal = () => {
    let fmensal = [
        {
            "estado":"SP",
            "valor":67836.43
        },
        {
            "estado":"RJ",
            "valor":36678.66
        },
        {
            "estado":"MG",
            "valor":29229.88
        },
        {
            "estado":"ES",
            "valor":27165.48
        },
        {
            "estado":"Outros",
            "valor":19849.53
        }
    ];

    let total = 0;

    for(obj of fmensal){
        total += obj.valor;
    }

    calcPorEstado(total, fmensal);
}

const calcPorEstado = (total, mensal) => {
    for(obj of mensal){
        let result = (obj.valor * 100) / total;
        lista.innerHTML += `<li><p>${obj.estado} - <span>R$${obj.valor}</span></p><h3>Percentual: ${Math.round(result)}%</li>`;
    }
}

ftotal();
/////////////////////
/////////Teste 5
/////////////////////
let reverseString = document.querySelector("#reverso");

const invertString = () => {
    let stringg = "Target Sistemas";
    let reverso = '';

    for(let i=stringg.length - 1; i >= 0; i--){
      reverso += `${stringg[i]}`;
    }

   reverseString.innerHTML = `String original: ${stringg}, string invertida: ${reverso}`
    
}

invertString();
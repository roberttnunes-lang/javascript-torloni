// window.alert{"minha primeira menssagem!"}

// window.confirm{"hoje  e sexta"}

// comentaraio em linha 

/*
Comentando Varias linhas
*/


// let nome = window.prompt("qual e seu nome?")

// window.alert("bem vindo (a)!" + nome)

// console.log("apresenta mensagem na tela")

// let numero01 = parseInt(prompt ("digite o primeiro numero:" ))

// let numero02 = parseInt(prompt ("digite o segundo numero: "))

// let soma = numero01 + numero02

// console. log(soma)

// let num01 = parseFloat(prompt("digite algum numero: "))

// let num02 = persefloat(prompt("digite algum numero: "))

// let resultado = num01 + num02

// console. log(resultado)

// let idade = parseInt(prompt("qual e sua idade?"))

// if(idade >= 18){
//     console. log("você e maior de idade, da-lheee")
// }

// else{
//     console. log("você e maior de idade, baixinho")
// }

let estacoes = prompt("digite uma estação do ano:")

switch (estacoes) {
    case "verão":
        console.log("muito calor e praia")
        break;

    case "öutono":
        console.log("as folhas caem no final ")
        break;

    case "ïnverno":
        console.log("ësta muito frio")
        break;

    case "primavera":
        console.log("ëu vejo flores em você...")
        break;

        default:
            console.log("não existe essa estação!!!")
            break;
}
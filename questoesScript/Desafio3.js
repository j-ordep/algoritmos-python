/**
    3 - Escreva um programa que leia números positivos do teclado, até que o número zero seja 
    digitado. Após, o programa deverá exibir um relatório na tela descrevendo os seguintes itens:
    a) Quantos números foram lidos.
    b) O maior numero lido.
    c) A média dos números lidos.
    d) O menor número ímpar lido (caso algum número ímpar tenha sido digitado).
    e) A quantidade de vezes que cada número ocorreu. Exemplo: "O número 7 ocorreu 2 vezes." 
    "O número 13 ocorreu 8 vezes".
    DICA: Use vetores.
*/

const numeros = [];

function adicionarNumero() {
        
    const numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero) || numero < 0) {
        alert("Número inválido")
        return;
    } else if (numero === 0) {
        if (numeros.length > 0) {
            exibirRelatorio()
        } else {
            alert("Você não digitou nenhum número.");
        }
    } else {
        numeros.push(numero)
    }


    document.getElementById("numero").value = ''
}

function quantidadeDeNumeros() {
    return numeros.length
}

function maiorNumero() {
    if (numeros.length === 0) {
        return null
    }
            
    let maior = numeros[0]
    for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i]
        }
    }
    return maior
}

function mediaDosNumeros() {

    let soma = 0;
    for (const numero of numeros) {
        soma += numero;
    }
            
    return soma / numeros.length;
}

function menorNumeroImpar() {
    let menorImpar = null

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            if (menorImpar == null || numeros[i] < menorImpar) {
                menorImpar = numeros[i]
            }
        }
    }
    return menorImpar
}

function quantidadeDeOcorrencias() {

    const ocorrencias = {}

    for (let i = 0; i < numeros.length; i++) {
        const num = numeros[i]
        ocorrencias[num] = (ocorrencias[num] || 0 ) + 1
    }
    return ocorrencias
}

function exibirRelatorio() {
    const quantidade = quantidadeDeNumeros()
    const maior = maiorNumero()
    const media = mediaDosNumeros()
    const menorImpar = menorNumeroImpar()
    const ocorrencias = quantidadeDeOcorrencias()

    let resultado = `
        <h2>Relatório:</h2>
        <p>a) Quantidade de números lidos: ${quantidade}</p>
        <p>b) Maior número lido: ${maior}</p>
        <p>c) Média dos números lidos: ${media.toFixed(2)}</p>
        <p>d) Menor número ímpar lido: ${menorImpar !== null ? menorImpar : 'Nenhum ímpar digitado'}</p>
        <h3>e) Ocorrências de cada número:</h3>
    `;

    for (const [numero, vezes] of Object.entries(ocorrencias)) {
        resultado += `<p>O número ${numero} ocorreu ${vezes} vez(es).</p>`
    }

    document.getElementById("resultado").innerHTML = resultado
}
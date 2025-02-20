/*
    2 - Escreva uma função que receba um parâmetro do tipo string e retorne uma string como 
        resultado. A função deverá "compactar" a string recebida como parâmetro de entrada. A 
        compactação funcionará escrevendo o caractere encontrado seguido da quantidade de vezes que 
        ele ocorre em sequência. 
        Ex.:
        Parâmetro de entrada: jjjjooaoo
        Resultado da função: j4o2ao2  
*/

function compactarString(str) {

    let resultado = ''
    let contador = 1

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            contador++
        } else {
            resultado += str[i - 1] + contador
            contador = 1
        }
    }
    return resultado
}

console.log(compactarString("jjjjooaoo"))
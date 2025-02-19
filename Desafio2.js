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
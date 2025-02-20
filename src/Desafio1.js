/*  
    1 - Escreva uma função que receba um valor inteiro como parâmetro de entrada e imprima na 
        tela n linhas conforme estrutura apresentada abaixo. Por exemplo, as seguintes linhas devem ser 
        apresentadas ser o parâmetro de entrada for 10.
        NOTA: Caso seja inserido um valor menor ou igual a zero, uma crítica deverá ser exibida e o 
        processo deverá ser abortado.
*/

function piramideDecrescente(valorDeEntrada) {

    if (!Number.isInteger(valorDeEntrada) || valorDeEntrada <= 0) {
        console.log("Valor invalido, o valor deve maior zero");
    } else {
        for (let i = 0; i < valorDeEntrada; i++) {

            let linha = []
            
            for (let j = valorDeEntrada - i; j > 0; j--) {
                linha.push(j * j)
            }
            
            console.log(linha.join(' '))
        }
    }
}

piramideDecrescente(10)
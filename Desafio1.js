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
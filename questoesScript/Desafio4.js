/*
4 - Escreva um programa que leia um arquivo texto(.txt) escolhido pelo usuário.Após a leitura 
do arquivo, o programa deverá exibir qual linha possui mais vogais e qual linha possui mais 
consoantes. Por simplicidade admita que o arquivo conterá apenas letras (sem acentos ou ç) e
espaços em branco. Caso ocorra empate, qualquer uma das linhas poderá ser exibida.
*/

const fs = require('fs');

function contarLetras(linha) {
    
    let vogais = 0
    let consoantes = 0;

    for (let letra of linha.toLowerCase()) {
        if ('aeiou'.includes(letra)) {
            vogais++;
        }
        else if (letra >= 'a' && letra <= 'z') {
            consoantes++;
        }
    }
    return { vogais, consoantes };
}

function processarArquivo(caminhoArquivo) {

    fs.readFile(caminhoArquivo, 'utf8', (erro, data) => {
        if (erro) {
            console.error('Erro ao ler o arquivo:', erro.message);
            return;
        }

        const linhas = data.split(/\r?\n/); // para  garantir a compatibilidade entre diferentes sistemas operacionais
        let linhaVogais = '', linhaConsoantes = '';
        let maxVogais = 0, maxConsoantes = 0;

        for (let linha of linhas) {
            const { vogais, consoantes } = contarLetras(linha);

            if (vogais > maxVogais) {
                maxVogais = vogais;
                linhaVogais = linha;
            }

            if (consoantes > maxConsoantes) {
                maxConsoantes = consoantes;
                linhaConsoantes = linha;
            }
        }

        console.log('Linha com mais vogais:', linhaVogais);
        console.log('Linha com mais consoantes:', linhaConsoantes);
    });
}

// caminho do arquivo
const caminhoArquivo = 'texto.txt';
processarArquivo(caminhoArquivo);

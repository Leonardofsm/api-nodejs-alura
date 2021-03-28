const fs = require('fs')
const path = require('path')


module.exports= (caminho, nomeDoArquivo, callBackImagemCriada) => {
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

    if(tipoEhValido) {
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callBackImagemCriada(false, novoCaminho))
    
    } else {
        const erro = 'Tipo é invalido'
        callBackImagemCriada(erro)
    }
}



// Primeiro modo sem calcback 
// fs.createReadStream('./assets/pirulito.png', (erro, buffer) => {
//     if(erro){
//         console.log('imagem não foibufferizada')
//     } else {
//         console.log('imagem foi bufferizada')
//         console.log(buffer)
//     }

//     fs.writeFile('./assets/pirulito10.jpg', buffer, (erro) => {
//         if(erro){
//             console.log('imagem não foi salva novamente')
//         } else {
//             console.log('imagem foi salva novamente')
//         }
//     })
// })
const conexao = require('../infraestrutura/conexao');

class Coracao {
    amor(res) {
        res.status(200).send('Tamires Linda <3')
    }
}

module.exports = new Coracao
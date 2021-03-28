const query = require('../infraestrutura/database/queries')

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        return query(sql, atendimento)
    }

    lista() {
        const sql = 'SELECT * FROM atendimentos'
        return query(sql)
    }

    listaById(id) {
        const sql = `SELECT * FROM atendimentos WHERE id=${id}` 
        return (query(sql, id))
    }
}

module.exports = new Atendimento()
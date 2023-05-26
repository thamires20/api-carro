import AppDataSource from '../db.js'



export function buscarTodos() {
    return AppDataSource.query('SELECT * FROM carros')
}

export function buscarUm(codigo) {
    return AppDataSource.query('SELECT * FROM carros WHERE codigo = ?', [codigo])
}

export function inserir(modelo, placa) {
    return AppDataSource.query('INSERT INTO carros (modelo, placa) VALUES (?, ?)', [modelo, placa])
}

export function alterar(codigo, modelo, placa) {
    return AppDataSource.query('UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?', [modelo, placa, codigo])

}

export function excluir(codigo) {
    return AppDataSource.query('DELETE FROM carros WHERE codigo = ?', [codigo])
}

export function buscarModelo(modelo) {
    return AppDataSource.query('SELECT * FROM carros WHERE modelo = ?', [modelo])
}




import * as CarroService from '../services/CarroService.js'



export async function buscarTodos(req, res) {

    let json = { error: '', result: [] }

    let carros = await CarroService.buscarTodos()

    for (let i in carros) {
        json.result.push({
            codigo: carros[i].codigo,
            descricao: carros[i].modelo
        });
    }
    res.json(json);
}

export async function buscarUm(req, res) {

    let json = { error: '', result: {} }

    let codigo = req.params.codigo
    let carro = await CarroService.buscarUm(codigo);

    if (carro) {
        json.result = carro;
    }

    res.json(json);


}

export async function inserir(req, res) {

    let json = { error: '', result: {} }

    let modelo = req.body.modelo
    let placa = req.body.placa


    if (modelo && placa) {
        let CarroCodigo = await CarroService.inserir(modelo, placa);
        json.result = {
            codigo: CarroCodigo,
            modelo,
            placa
        };
    } else {
        json.error = 'Campos não enviados'
    }

    res.json(json);

}

export async function alterar(req, res) {

    let json = { error: '', result: {} }

    let codigo = req.params.codigo
    let modelo = req.body.modelo
    let placa = req.body.placa


    if (codigo && modelo && placa) {
        await CarroService.alterar(codigo, modelo, placa);
        json.result = {
            codigo,
            modelo,
            placa
        };
    } else {
        json.error = 'Campos não enviados'
    }
    res.json(json);

}

export async function excluir(req, res) {

    let json = 'item deletado com sucesso'

    await CarroService.excluir(req.params.codigo);

    res.json(json);

}


export async function buscarModelo(req, res) {

    let json = { error: '', result: {} }

    let modelo = req.query.modelo
    let carro = await CarroService.buscarModelo(modelo);

    if (carro) {
        json.result = carro;
    } else {
        json.result = { error: 'nada aqui' }
    }

    res.json(json);

}
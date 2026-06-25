// IMPORTANDO AS FUNÇÕES
import { calcularIdade, calcularSeguro, calcularIpva } from './script_calculo.js';

// PEGANDO ELEMENTOS DO DOM
const formVeiculo = document.querySelector('#form-veiculo');
const divLista = document.querySelector('#div-lista-veiculos');

// CRIANDO ARRAY DE VEÍCULOS
const veiculos = [];

// CAPTURAR EVENTO SUBMIT DO FORMULÁRIO
formVeiculo.addEventListener('submit', (evt) => {
    // IMPEDIR O RECARREGAMENTO DA PÁGINA
    evt.preventDefault();

    // CRIAR OBJETO FORMDATA
    const dadosFormVeiculo = new FormData(formVeiculo);

    // CRIAR OBJETO LITERAL
    const veiculo = {
        modelo: dadosFormVeiculo.get('modelo'),
        marca: dadosFormVeiculo.get('marca'),
        placa: dadosFormVeiculo.get('placa'),
        anoFabricacao: parseInt(dadosFormVeiculo.get('ano_fabricacao')),
        valorMercado: parseFloat(dadosFormVeiculo.get('valor_mercado')),
        tipoCombustivel: dadosFormVeiculo.get('tipo_combustivel')
    };

    // CHAMANDO A FUNÇÃO addVeiculo E PASSANDO O OBJETO LITERAL veiculo
    addVeiculo(veiculo);

    // LIMPAR O FORMULÁRIO
    formVeiculo.reset();
});

// CRIANDO A FUNÇÃO ADICIONAR VEÍCULO
const addVeiculo = (objVeiculo) => {
    // ADICIONANDO O OBJETO LITERAL NO ARRAY VEICULOS
    veiculos.push(objVeiculo);

    // APÓS ADICIONAR O OBJETO LITERAL NO ARRAY CHAMA A FUNÇÃO
    listVeiculos();
};

const formatarMoeda = (valor) => {
    if (valor === 'Isento') return valor;
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
};

// FUNÇÃO PARA LISTAR VEÍCULOS DO ARRAY
const listVeiculos = () => {
    // LIMPANDO A DIV LISTA
    divLista.innerHTML = '';

    // PERCORRER O ARRAY veiculos COM O foreach
    veiculos.forEach((elem, i) => {
        const idade = calcularIdade(elem.anoFabricacao);
        const seguro = calcularSeguro(elem.valorMercado);
        const ipva = calcularIpva(idade, elem.valorMercado, elem.tipoCombustivel);
        const valorFinal = ipva === 'Isento' ? seguro : seguro + ipva;

        divLista.innerHTML += `
            <hr>
            <p><strong>Veículo ${i + 1}</strong></p>
            <p>Modelo: ${elem.modelo}</p>
            <p>Marca: ${elem.marca}</p>
            <p>Placa: ${elem.placa}</p>
            <p>Idade do veículo: ${idade} anos</p>
            <p>Valor Seguro a pagar: ${formatarMoeda(seguro)}</p>
            <p>Valor IPVA a pagar: ${formatarMoeda(ipva)}</p>
            <p>Valor final: ${formatarMoeda(valorFinal)}</p>
            <p>Licenciamento</p>
        `;
    });
};

// CRIANDO AS FUNÇÕES PARA OS CÁLCULOS
const calcularIdade = (anoFabricacao) => {
    const anoAtual = 2026
    return anoAtual - anoFabricacao;
};

const calcularSeguro = (valorMercado) => {
    return valorMercado * 0.10;
};

const calcularIpva = (idade, valorMercado, tipoCombustivel) => {
    if (idade > 20) {
        return 'Isento';
    }

    let ipva = 0;
    if(tipoCombustivel == 'gasolina'){
        ipva = valorMercado * 0.20;
    }else if(tipoCombustivel == 'etanol'){
        ipva = valorMercado * 0.15;
    }else if(tipoCombustivel == 'bicombustivel'){
        ipva = valorMercado * 0.10;
    }else if(tipoCombustivel == 'hibrido'){
        ipva = valorMercado * 0.08;
    }else if(tipoCombustivel == 'eletrico'){
        ipva = valorMercado * 0.02;
    }else{
        ipva = 0
    }
    return ipva;
};

export { calcularIdade, calcularSeguro, calcularIpva };
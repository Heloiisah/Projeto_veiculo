// CRIANDO AS FUNÇÕES PARA OS CÁLCULOS
const calcularIdade = (anoFabricacao) => {
    const anoAtual = new Date().getFullYear();
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
    switch (tipoCombustivel) {
        case 'gasolina':
            ipva = valorMercado * 0.20;
            break;
        case 'etanol':
            ipva = valorMercado * 0.15;
            break;
        case 'bicombustivel':
            ipva = valorMercado * 0.10;
            break;
        case 'hibrido':
            ipva = valorMercado * 0.08;
            break;
        case 'eletrico':
            ipva = valorMercado * 0.02;
            break;
        default:
            ipva = 0;
    }
    
    return ipva;
};

export { calcularIdade, calcularSeguro, calcularIpva };

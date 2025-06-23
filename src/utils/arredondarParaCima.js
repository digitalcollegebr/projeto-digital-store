/**
 * Formata um valor numérico de preço com as seguintes regras:
 * - Arredonda para cima com 1 casa decimal se `arredondarParaCima` for true
 * - Caso contrário, arredonda normalmente para 1 casa decimal
 * - Se o valor final for um número inteiro, exibe sem casas decimais
 *
 * VALOR - O valor numérico do preço
 * ARREDONDARPARACIMA - Define se deve arredondar sempre para cima (true) ou arredondar normalmente (false)
 * RESULTADO - Retorna o valor formatado como string, com ou sem casas decimais, respectivamente fixed(1) e fixed(0)
 */

const formatarPreco = (valor, arredondarParaCima = false) => {
    const resultado = arredondarParaCima
        ? Math.ceil(valor * 10) / 10    // força arredondamento para cima com 1 casa decimal
        : Math.round(valor * 10) / 10;  // faz o arredondamento tradicional

    return resultado % 1 === 0  // Verifica se o número resultante é inteiro
        ? resultado.toFixed(0)  // Se for, retorna sem casas decimais
        : resultado.toFixed(1); // Caso contrário, mantém 1 casa decimal
};

export default formatarPreco;
// Função auxiliar para formatar os nomes técnicos em títulos legíveis
export const formatarTitulo = (nomeDoTipoDeFiltro) => {
    const mapaDeTitulos = {
        brand: "Marca",
        category: "Categoria",
        gender: "Gênero",
        state: "Estado",
        type: "Tipo"
    };

    return mapaDeTitulos[nomeDoTipoDeFiltro] || nomeDoTipoDeFiltro;
};

export default formatarTitulo;
import BannerModel from "../models/banner";
import ProductModel from "../models/product";

const url = "http://localhost:3000";

const apiDigitalStore = {
    getProdutos: async (limit) => {
        return await fetch(`${url}/products?_limit=${limit}`)
            .then(resposta => resposta.json())
            .then(produtos => produtos.map(product => new ProductModel(product)))
            .catch(error => {
                console.error("Erro ao buscar produtos: ", error);
                return [];
            }); 
    },
    getProdutosFiltros: async (query = [], page = 1, perPage = 15) => {
        try {
            // Buscar filtros completos uma vez para mapear ids para nomes
            const filtrosResposta = await fetch(`${url}/filters`);
            const filtrosJSON = await filtrosResposta.json();
            
            const filtros = filtrosJSON[0] || {};

            // Função para mapear id -> nome do filtro (ex: category id=1 => "Esporte e lazer")
            function getNomeFiltro(name, id) {
                if (!filtros[name]) return null;
                const item = filtros[name].find(f => {
                    // id pode ser number ou string, faça cast para garantir comparação correta
                    return String(f.id) === String(id);
                });
                return item ? (item[name] || item.brand || item.category || item.gender || item.state || item.type) : null;
            }

            // Montar parâmetros de consulta amigáveis para products
            const params = new URLSearchParams();
            params.append('_page', page);
            params.append('_per_page', perPage);

            if (query.length > 0) {
                query.forEach(({ name, value }) => {
                // Traduzir id para nome do filtro
                const nomeFiltro = getNomeFiltro(name, value);
                if (nomeFiltro) {
                    params.append(name, nomeFiltro);
                } else {
                    // Se não achou o nome, envia o valor original (fallback)
                    params.append(name, value);
                }
                });
            }

            const resposta = await fetch(`${url}/products?${params.toString()}`);
            const produtosJSON = await resposta.json();

            return {
                dados: produtosJSON.data || produtosJSON.products || [],
                porPagina: perPage,
                paginaAtual: page,
                proxima: produtosJSON.next || null,
                anterior: produtosJSON.prev || null,
                totalItens: produtosJSON.items || 0,
                paginasTotais: produtosJSON.pages || 0
            };

        } catch (error) {
            console.error("Erro ao buscar produtos: ", error);
            return {
                dados: [],
                porPagina: perPage,
                paginaAtual: page,
                proxima: null,
                anterior: null,
                totalItens: 0,
                paginasTotais: 0
            };
        }
    },
    getBanners: async (limit = 4) => {
        return await fetch(`${url}/promotions?_limit=${limit}`)
            .then(resposta => resposta.json())
            .then(banners => banners.map(banner => new BannerModel(banner)))
            .catch(error => {
                console.error("Erro ao buscar promoções: ", error);
                return [];
            });
    },
    getFiltros: async () => {   // Retorna um array formatado contendo todos os filtros disponíveis
        try {
            const dados = await fetch(`${url}/filters`).then(resposta => resposta.json());  // Faz a requisição e já converte a resposta em JSON

            const filtros = dados[0];   // A API retorna um array com um único objeto de filtros

            if (!filtros) return [];    // Se não houver dados, retorna um array vazio

            /* Object.entries() - converte objeto em array de pares [[chave, valor]]. Ex: 
                { 
                    id: 2, 
                    brand: [{id: 1, "brand": "text1"}, {id: 2, "brand": "text2"}], 
                    type: [{id: 1, "type": "text1"}, {id: 2, "type": "text2"}]
                } 
                vira 
                [
                    ["id", 2], 
                    ["brand", [{id: 1, "brand": "text1"}, {id: 2, "brand": "text2"}]], 
                    ["type", [{id: 1, "type": "text1"}, {id: 2, "type": "text2"}]]
                ] 
            */
            return Object.entries(filtros)
                .filter(([chave]) => chave !== 'id')    // Remove array par com chave id. Ex: ["id", 2]
                // flatMap - itera em cada array par. 
                // Ex: ["brand", [{...}, {...}]] onde chave="brand" e itens=[{...}, {...}]
                .flatMap(([chave, itens]) =>            
                    itens.map(item => ({                // Itera cada item do array de objetos. Ex: item = {...}
                        text: item[chave],              // - valor do objeto na chave. Ex: item["brand"]="text1"
                        value: item.id,                 // - valor do input. Ex: item.id=1
                        name: chave                     // - nome do input. Ex: 'brand'
                    }))
                );

        } catch (erro) {
            console.error("Erro ao buscar filtros:", erro);
            return [];
        }
    },
    getProdutoById: async (id) => {
        try {
            const resposta = await fetch(`${url}/products/${id}`);
            
            if (!resposta.ok) {
                throw new Error(`Produto com ID ${id} não encontrado`);
            }

            const produtoJSON = await resposta.json();
            return new ProductModel(produtoJSON);
        } catch (erro) {
            console.error(`Erro ao buscar produto com ID ${id}:`, erro);
            return null;
        }
    },
    getProdutosPorTitulo: async (texto) => {
        try {
            const resposta = await fetch(`${url}/products?title_like=${texto}`);
            const produtos = await resposta.json();
            // console.log(texto, produtos);
            
            return produtos.map(p => new ProductModel(p));
        } catch (error) {
            console.error("Erro ao buscar por título: ", error);
            return [];
        }
    }
}

export default apiDigitalStore;
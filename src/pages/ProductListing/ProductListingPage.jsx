import 'primeicons/primeicons.css';
import { Paginator } from "primereact/paginator";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import apiDigitalStore from "../../api/apiDigitalStore";
import CardProduct from "../../components/CardProduct";
import FilterGroup from '../../components/FilterGroup';
import Select from "../../components/Select";
import formatarTitulo from '../../utils/formatarTitulo';
import { SectionProducts, SectionResults } from "./style";

const ProductListingPage = () => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') || "";
    const [filtros, setFiltros] = useState([]); // lista completa vinda da API (opções)
    const [filtrosSelecionados, setFiltrosSelecionados] = useState([]); // filtro ativo
    const [orderBy, setOrderBy] = useState("mais-relevante");
    const [pagination, setPagination] = useState({
        anterior: null,
        dados: [],
        paginaAtual: 1,
        paginasTotais: 0,
        porPagina: 15,
        proxima: null,
        totalItens: 0
    });
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0); // sobe para o topo
        carregaListaDeFiltros();
    }, []);

    // Sempre que filtros selecionados mudarem, carrega os produtos
    useEffect(() => {
        carregaListaDeProdutos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filtrosSelecionados, pagination.paginaAtual, pagination.porPagina]);

    const carregaListaDeFiltros = async () => {
        const data = await apiDigitalStore.getFiltros();
        setFiltros(data);
    }

    const carregaListaDeProdutos = async () => {
        const data = await apiDigitalStore.getProdutosFiltros(filtrosSelecionados, pagination.paginaAtual, pagination.porPagina);
        setPagination(data);
    }

    // Função chamada ao mudar um filtro (checkbox ou radio)
    const handleFiltroChange = (tipoFiltro, valorFiltro, checked, inputType) => {
        setPagination((prev) => ({ ...prev, paginaAtual: 1 })); // Reset página ao filtrar

        if (inputType === "radio") {
        // Só pode ter um valor por tipo para radio, então remove todos do tipo e adiciona o novo
        setFiltrosSelecionados((prev) => {
            // Remove todos do tipoFiltro
            const outrosFiltros = prev.filter(f => f.name !== tipoFiltro);
            if (checked) {
                return [...outrosFiltros, { name: tipoFiltro, value: valorFiltro }];
            } else {
                return outrosFiltros;
            }
        });
        } else {
        // Checkbox: adiciona ou remove conforme checked
        setFiltrosSelecionados((prev) => {
            if (checked) {
                return [...prev, { name: tipoFiltro, value: valorFiltro }];
            } else {
                return prev.filter(f => !(f.name === tipoFiltro && f.value === valorFiltro));
            }
        });
        }
    };

    const ordenarProdutos = (produtos) => {
        const produtosOrdenados = [...produtos];

        switch (orderBy) {
            case "mais-relevante":
                // Ordena do maior para o menor rating
                produtosOrdenados.sort((a, b) => b.rating - a.rating);
                break;

            case "menor-preco":
                // Ordena do menor para o maior preço com desconto
                produtosOrdenados.sort((a, b) => {
                    const precoA = a.price * (1 - a.discount / 100);
                    const precoB = b.price * (1 - b.discount / 100);
                    return precoA - precoB;
                });
                break;

            case "maior-preco":
                // Ordena do maior para o menor preço com desconto
                produtosOrdenados.sort((a, b) => {
                    const precoA = a.price * (1 - a.discount / 100);
                    const precoB = b.price * (1 - b.discount / 100);
                    return precoB - precoA;
                });
                break;

            default:
                break;
        }

        return produtosOrdenados;
    };

    const listagemDeCardsDeProdutos = () => {
        const produtosOrdenados = ordenarProdutos(pagination.dados);

        return (
            produtosOrdenados.map(produto => <CardProduct key={produto.id} produto={produto} />)
        );
    }

    // Gera os filtros dinamicamente com base na lista retornada da API
    const listagemDeFiltros = () => {
        // Agrupa os filtros por nome da chave (ex: brand, categories, etc.)
        const filtrosAgrupadosPorTipo = filtros.reduce((filtrosAgrupados, filtroAtual) => {
            const nomeDoTipoDeFiltro = filtroAtual.name; // ex: "brand"

            if (!filtrosAgrupados[nomeDoTipoDeFiltro]) {
                filtrosAgrupados[nomeDoTipoDeFiltro] = [];
            }

            filtrosAgrupados[nomeDoTipoDeFiltro].push(filtroAtual);

            return filtrosAgrupados;
        }, {});
    
        // Mapeia cada tipo de filtro para um componente FilterGroup
        return Object.entries(filtrosAgrupadosPorTipo).map(([nomeDoTipoDeFiltro, opcoesDoFiltro]) => {
            const tituloFormatado = formatarTitulo(nomeDoTipoDeFiltro);

            // Corrige os textos para o filtro 'states'
            if (nomeDoTipoDeFiltro === "state") {
                opcoesDoFiltro = opcoesDoFiltro.map(opcao => ({
                    ...opcao,
                    text: opcao.text === "used" ? "Usado" : opcao.text === "new" ? "Novo" : opcao.text
                }));
            }

            // muda o tipo de input para radio
            const tipoInput = nomeDoTipoDeFiltro === "state" ? "radio" : "checkbox";

            // Descobre quais valores estão selecionados para esse tipo
            const selecionadosDoTipo = filtrosSelecionados
                .filter(f => f.name === nomeDoTipoDeFiltro)
                .map(f => f.value);

            return (
                <FilterGroup
                    key={nomeDoTipoDeFiltro}
                    title={tituloFormatado}
                    inputType={tipoInput}
                    options={opcoesDoFiltro}
                    selecionados={selecionadosDoTipo}
                    onChange={(valor, checked) => handleFiltroChange(nomeDoTipoDeFiltro, valor, checked, tipoInput)}
                />
            );
        });
    }

    // ativa filtros lateral e overlay no mobile
    const onMobileModeFilters = () => {
        const main = document.querySelector('.main-container');
        main.classList.toggle("modal__active");
        setIsFilterOpen((valor) => setIsFilterOpen(!valor));
    }

    return (
        <>
            <SectionResults activeTitle={false}>
                <div className="results__box">
                    <p className="results__type">
                        {search.length > 0 ? `Resultados para "${search}"` : "Todos os resultados"}
                    </p>    
                    <span className="results__count">-</span>
                    <span className="results__count">{pagination.totalItens} produtos</span>
                </div>
                <form className="order__by-form" aria-label="Ordenação dos produtos">
                    <Select 
                        options={[
                            {text: "Mais relevantes", value: "mais-relevante"},
                            {text: "Menor preço", value: "menor-preco"},
                            {text: "Maior preço", value: "maior-preco"}
                        ]}
                        orderBy={orderBy} 
                        funcao={evento => setOrderBy(evento.target.value)}
                    />
                    <button type="button" className="icon__button-filter" onClick={onMobileModeFilters}>
                        <i className="pi pi-filter"></i>
                    </button>
                </form>
            </SectionResults>
            <SectionProducts activeTitle={false}>
                <div className="content-box">
                    <div className={`filters-container ${isFilterOpen ? "active" : ""}`}>
                        <div className="info__actions">
                            <h4 className="title-filter-container">Filtrar por</h4>
                            <button type="button" onClick={onMobileModeFilters}>
                                <i className="pi pi-times"></i>
                            </button>
                        </div>
                        <div className="divisor"></div>
                        <form className="form-filters">
                            {listagemDeFiltros()}
                        </form>
                    </div>
                    <div
                        className={`overlay ${isFilterOpen ? "active" : ""}`}
                        onClick={onMobileModeFilters}
                    ></div>
                    <div className="grid__list">
                        {listagemDeCardsDeProdutos()}
                    </div>
                </div>
                <Paginator 
                    // 'first' é o índice do primeiro item (produto) exibido na página atual
                    // O Paginator começa no índice 0 (ou seja, página 1 começa em 0, página 2 começa em 15, pagina 3 começa em 30, etc)
                    // Como a API usa número de página (1, 2, 3...), precisamos converter de índice para número de página
                    first={(pagination.paginaAtual - 1) * pagination.porPagina}

                    // Quantidade de itens por página
                    rows={pagination.porPagina} 

                    // Total de itens disponíveis (usado para calcular total de páginas)
                    totalRecords={pagination.totalItens} 

                    // Opções de quantos itens mostrar por página
                    rowsPerPageOptions={[10, 15, 20]} 

                    // Quando muda de página ou muda a quantidade de itens por página
                    onPageChange={async (e) => {
                        // e.first é o índice do primeiro item da nova página (ex: página 2 → 15)
                        // e.rows é a quantidade de itens por página (ex: 15)
                        // Convertendo o índice para número da página: (15 / 15) + 1 = página 2
                        const page = Math.floor(e.first / e.rows) + 1;
                        const perPage = e.rows;

                        // Busca novos dados da API com base na página e quantidade de itens
                        setPagination(prev => ({
                            ...prev,
                            paginaAtual: page,
                            porPagina: perPage
                        }));
                    }} 

                    // Layout simples com botões de navegação e indicador de página atual
                    template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink RowsPerPageDropdown' }}
                    className="paginator-container"
                />
            </SectionProducts>
        </>
    );
}
 
export default ProductListingPage;
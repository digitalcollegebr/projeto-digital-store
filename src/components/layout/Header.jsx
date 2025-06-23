import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import apiDigitalStore from "../../api/apiDigitalStore";
import logo from "../../assets/logo-header.svg";
import { actionsColors, grayScaleColors } from "../../styles/colors/cores.js";
import ButtonCTA from "../ButtonCTA.jsx";
import CardSearch from "../CardSearchProduct.jsx";
import Input from "../Input.jsx";
import Logo from "../Logo.jsx";
import TitleSection from "../TitleSection.jsx";

const HeaderContainer = styled.header`
  &.cabecalho {
    background-color: ${grayScaleColors.white};
    box-shadow: 0px 10px 30px 0px #8d72200d;
    padding: 2.125rem 6.25rem 1.813rem;

    .container-search {
      background-color: ${grayScaleColors.white};
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      z-index: 2000;
      padding: 1rem;
      border-radius: 0.5rem;

      a:not(:last-child) {
        margin-bottom: 2rem;
      }

      a:last-child {
        text-align: center;
      }
    }

    .btn-login {
      padding-left: 32px;
      padding-right: 32px;
    }

    .nav-link {
      font-size: 1rem;
      line-height: 1.75rem;
      letter-spacing: 0.75px;
    }

    .modal-input-mobile {
      display: none;
      height: 0;
      position: relative;
      visibility: hidden;
      transition: height 0.3s ease;
    }

    .modal-input-mobile.active {
      visibility: visible;
    }
  }

  @media screen and (max-width: 769px) {
    &.cabecalho {
      padding: 1.25rem;

      .container-search {
        padding: 0.5rem;

        a:not(:last-child) {
          margin-bottom: 1rem;
        }
      }

      .modal-input-mobile {
        display: block;
        margin-top: 1.25rem;
      }
    }

    &.cabecalho.fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: 1002;
    }
  }
`;

const Container = styled.header`
  &.container-cabecalho {
    display: flex;
    align-items: center;

    .btn-icone {
      border: none;
      background-color: transparent;
      height: 1.5rem;

      .icone {
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .icone:hover {
        fill: ${actionsColors.primary};
      }
    }

    .btn-hamburguer {
      display: none;
    }
  }

  @media screen and (max-width: 769px) {
    &.container-cabecalho {
      justify-content: space-between;

      .btn-hamburguer {
        display: block;
      }
    }
  }
`;

const RightActions = styled.div`
  &.botoes-e-acoes {
    margin-left: 1.688rem;
    width: 100%;
    display: flex;
    align-items: center;

    .nav-link {
      text-decoration: underline;
      min-width: fit-content;
      height: fit-content;
      margin-left: 3rem;
      margin-right: 1.875rem;
    }

    .btn-search-icon {
      color: ${grayScaleColors.lightGray2};
      background-color: transparent;
      font-size: 1.25rem;
      display: none;
    }
    .btn-search-icon.active {
      color: ${actionsColors.primary};
    }

    .cart-btn {
      position: relative;
      height: fit-content;
      margin-left: 4.375rem;
      cursor: pointer;
      background-color: transparent;

      .icone {
        font-size: 1.5rem;
        color: ${actionsColors.primary};
      }

      .count-orders-cart {
        background-color: ${actionsColors.primary};
        min-width: 1.063rem;
        height: 1.063rem;
        border-radius: 0.75rem;
        color: ${grayScaleColors.white};
        display: flex;
        justify-content: center;
        position: absolute;
        top: -5px;
        left: 16px;
        padding: 0 0.25rem;

        span {
          font-weight: 700;
          font-size: 0.75rem;
          line-height: 1.125rem;
          letter-spacing: 0.5px;
        }
      }
    }
  }

  @media screen and (max-width: 769px) {
    &.botoes-e-acoes {
      width: fit-content;
      margin-left: 0;

      .input-component {
        display: none;
      }

      > .nav-link {
        display: none;
      }

      .btn-login {
        display: none;
      }

      .btn-search-icon {
        display: block;
      }

      .cart-btn {
        margin-left: 0.813rem;
      }
    }
  }
`;

const AsideMenu = styled.aside`
  &.aside-menu {
    display: flex;
    margin-top: 2.5rem;

    .content-menu {
      background-color: ${grayScaleColors.white};

      .menu-items {
        //

        .title-2 {
          display: none;
        }

        .navlist-menu {
          display: flex;
          gap: 2rem;

          .nav-link {
            border-bottom: 2px solid transparent;
            padding-bottom: 0.25rem;
          }
          .nav-link.active {
            font-weight: 700;
            border-bottom: 2px solid ${actionsColors.primary};
          }
        }
      }

      .btn-actions {
        display: none;
      }
    }

    .overlay {
      width: 25vw;
      background: #1f1f1f40;
      display: none;
    }
  }

  @media screen and (max-width: 769px) {
    &.aside-menu {
      position: fixed;
      top: 4.2rem;
      left: -102vw;
      z-index: 1000;
      width: 100vw;
      height: calc(100vh - 4.2rem);
      overflow: hidden;
      margin-top: 0rem;
      transition: left 0.3s ease-in-out;

      .content-menu {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.875rem;

        .menu-items {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .title-2 {
            display: block;
            margin-bottom: 1.25rem;
          }

          .navlist-menu {
            flex-direction: column;
            gap: 0.625rem;

            .nav-link {
              width: fit-content;
              padding-bottom: 0.125rem;
            }
          }
        }

        .btn-actions {
          display: flex;
          flex-direction: column;

          hr {
            border: 1px solid ${grayScaleColors.lightGray2};
            margin-bottom: 1.25rem;
          }

          .btn-login {
            margin-bottom: 1.063rem;
          }

          .nav-link {
            text-align: center;
          }
        }
      }

      .overlay {
        display: block;
      }
    }

    &.aside-menu.active {
      left: 0;
    }
  }
`;

const Header = () => {
  const [termoBusca, setTermoBusca] = useState("");
  const [resultados, setResultados] = useState([]);
  const [ordersNumber, setOrdersNumber] = useState(0);
  const [isHambuguerOpen, setIsHambuguerOpen] = useState(false);
  const [mostrarModalDesktop, setMostrarModalDesktop] = useState(false);
  const [mostrarModalMobile, setMostrarModalMobile] = useState(false);
  const inputDesktopRef = useRef(null);
  const modalDesktopRef = useRef(null);
  const inputMobileRef = useRef(null);
  const modalMobileRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Reseta o campo de busca e oculta o modal ao trocar de rota
  useEffect(() => {
    setTermoBusca("");
    setMostrarModalDesktop(false);
    setMostrarModalMobile(false);
    setResultados([]);
  }, [location.pathname]);

  // Executa a busca com debounce quando o termo de busca muda
  useEffect(() => {
    const timeout = setTimeout(buscarProdutos, 300); // debounce
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termoBusca]);

  useEffect(() => {
    const el = modalMobileRef.current;
    if (!el) return;

    if (mostrarModalMobile) {
      const scrollHeight = el.scrollHeight;
      el.style.height = `${scrollHeight}px`;
      el.style.marginTop = "1.25rem";
    } else {
      el.style.height = "0px";
      el.style.marginTop = "0rem";
    }
  }, [mostrarModalMobile]);

  // Fecha o modal ao clicar fora do campo de entrada e do modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputDesktopRef.current &&
        !inputDesktopRef.current.contains(event.target) &&
        modalDesktopRef.current &&
        !modalDesktopRef.current.contains(event.target)
      ) {
        setMostrarModalDesktop(false);
      }

      if (
        inputMobileRef.current &&
        !inputMobileRef.current.contains(event.target) &&
        modalMobileRef.current &&
        !modalMobileRef.current.contains(event.target)
      ) {
        setMostrarModalMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const buscarProdutos = async () => {
    if (termoBusca.trim().length === 0) {
      setResultados([]);
      return;
    }

    try {
      const produtos = await apiDigitalStore.getProdutosPorTitulo(termoBusca);
      setResultados(
        produtos.filter((p) =>
          p.title.toLowerCase().includes(termoBusca.toLowerCase())
        )
      );
    } catch (erro) {
      console.error("Erro na busca:", erro);
      setResultados([]);
    }
  };

  const irParaLogin = () => {
    navigate("/login");
  };

  const geraModalCarrinho = () => {
    setOrdersNumber(ordersNumber + 1);
    console.log("Modal ativo");
  };

  const onMobileModeAside = () => {
    const main = document.querySelector(".main-container");
    main.classList.toggle("modal__active");
    setIsHambuguerOpen(!isHambuguerOpen);
  };

  return (
    <HeaderContainer
      id="cabecalho"
      className={`cabecalho ${isHambuguerOpen ? "fixed" : ""}`}
    >
      <Container className="container-cabecalho">
        <button
          className="btn-icone btn-hamburguer"
          onClick={onMobileModeAside}
        >
          <box-icon size="sm" name="menu" className="icone"></box-icon>
        </button>
        <Logo to="/" src={logo} alt="Logotipo" />
        <RightActions className="botoes-e-acoes">
          <div style={{ position: "relative", width: "100%" }}>
            <Input
              tipo="texto"
              apelido="Pesquisar Produto..."
              icone={<i className="pi pi-search"></i>}
              valor={termoBusca}
              funcao={(e) => {
                const valor = e.target.value;
                setTermoBusca(valor);
                setMostrarModalDesktop(valor.length > 0);
              }}
              foco={() => {
                if (termoBusca.trim().length > 0) {
                  buscarProdutos();
                  setMostrarModalDesktop(true);
                }
              }}
              referencia={inputDesktopRef}
            />
            {mostrarModalDesktop && resultados.length > 0 && (
              <div
                ref={modalDesktopRef}
                className="container-search"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  zIndex: 1000,
                }}
              >
                {resultados.slice(0, 4).map((produto) => (
                  <CardSearch
                    to={`/products/product/${produto.id}`}
                    key={produto.id}
                    funcao={() => {
                      setMostrarModalDesktop(false);
                      setTermoBusca("");
                    }}
                    search={termoBusca}
                    produto={produto}
                  />
                ))}
                <Link
                  to={`/products?search=${termoBusca}`}
                  onClick={() => {
                    setMostrarModalDesktop(false);
                    setTermoBusca("");
                  }}
                >
                  <span className="text__link">
                    {resultados.length} resultado(s) encontrado(s)
                  </span>
                </Link>
              </div>
            )}
          </div>
          <Link to="/register" className="nav-link">
            Cadastre-se
          </Link>
          <ButtonCTA
            classe="btn-login"
            children="Entrar"
            funcao={irParaLogin}
          />
          <button
            className={`btn-search-icon ${mostrarModalMobile ? "active" : ""}`}
            onClick={() => setMostrarModalMobile(!mostrarModalMobile)}
          >
            <i className="pi pi-search"></i>
          </button>
          <button className="cart-btn" onClick={geraModalCarrinho}>
            <i className="pi pi-cart-minus icone"></i>
            <div className="count-orders-cart">
              <span>{ordersNumber}</span>
            </div>
          </button>
        </RightActions>
      </Container>
      <div
        ref={modalMobileRef}
        className={`modal-input-mobile ${mostrarModalMobile ? "active" : ""}`}
      >
        <Input
          tipo="texto"
          apelido="Pesquisar Produto..."
          icone={<i className="pi pi-search"></i>}
          valor={termoBusca}
          funcao={(e) => {
            const valor = e.target.value;
            setTermoBusca(valor);
            setMostrarModalMobile(valor.length > 0);
          }}
          foco={() => {
            if (termoBusca.trim().length > 0) {
              buscarProdutos();
              setMostrarModalMobile(true);
            }
          }}
          referencia={inputMobileRef}
        />
        {mostrarModalMobile && resultados.length > 0 && (
          <div
            className="container-search"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              zIndex: 1000,
            }}
          >
            {resultados.slice(0, 4).map((produto) => (
              <CardSearch
                to={`/products/product/${produto.id}`}
                key={produto.id}
                funcao={() => {
                  setMostrarModalMobile(false);
                  setTermoBusca("");
                }}
                search={termoBusca}
                produto={produto}
              />
            ))}
            <Link
              to={`/products?search=${termoBusca}`}
              onClick={() => {
                setMostrarModalMobile(false);
                setTermoBusca("");
              }}
            >
              <span className="text__link">
                {resultados.length} resultado(s) encontrado(s)
              </span>
            </Link>
          </div>
        )}
      </div>
      <AsideMenu className={`aside-menu ${isHambuguerOpen ? "active" : ""}`}>
        <div className="content-menu">
          <div className="menu-items">
            <TitleSection>Páginas</TitleSection>
            <ul className="navlist-menu">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={onMobileModeAside}
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={onMobileModeAside}
              >
                Produtos
              </NavLink>
              <NavLink
                to="/categories"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={onMobileModeAside}
              >
                Categorias
              </NavLink>
              <NavLink
                to="/orders"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={onMobileModeAside}
              >
                Meus Pedidos
              </NavLink>
            </ul>
          </div>
          <div className="btn-actions">
            <hr />
            <ButtonCTA
              classe="btn-login"
              children="Entrar"
              funcao={() => {
                onMobileModeAside();
                irParaLogin();
              }}
            />
            <Link
              to="/cadastro"
              className="nav-link"
              onClick={onMobileModeAside}
            >
              Cadastre-se
            </Link>
          </div>
        </div>
        <div className="overlay" onClick={onMobileModeAside}></div>
      </AsideMenu>
    </HeaderContainer>
  );
};

export default Header;

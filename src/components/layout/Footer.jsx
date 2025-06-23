import { Link } from "react-router-dom";
import styled from "styled-components";
import face from "../../assets/facebook.svg";
import insta from "../../assets/instagram.svg";
import logo from "../../assets/logo-footer.svg";
import twitter from "../../assets/twitter.svg";
import { actionsColors, grayScaleColors } from "../../styles/colors/cores";

const FooterComponent = styled.footer`
  &.footer-component {
    padding: 4.5rem 6.25rem 1.375rem;
    background-color: ${grayScaleColors.darkGray};
    color: ${grayScaleColors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .content-top {
      display: flex;
      justify-content: space-between;

      .info-company {
        display: block;
        width: 19.188rem;

        img {
          width: 15.813rem;
          margin-bottom: 2.188rem;
        }

        .description-company {
          line-height: 1.625rem;
          margin-bottom: 2.5rem;
        }

        .box-social {
          display: flex;
          gap: 2.188rem;

          img {
            height: 1.25rem;
            width: 1.25rem;
            margin: 0;
          }
        }
      }

      .items-company {
        display: flex;
        flex-direction: column;
        gap: 1.75rem;

        .title-list {
          font-size: 1.125rem;
          font-weight: 600;
        }

        .list-items {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;

          li {
            a {
              font-size: 1rem;
              line-height: 2.375rem;
              color: ${grayScaleColors.white};
            }

            a:hover {
              color: ${actionsColors.primary};
              text-decoration: underline;
            }
          }

          .item-span {
            line-height: 1.625rem;
            width: 14.438rem;
          }

          .item-span:not(:last-child) {
            margin-bottom: 0.625rem;
          }
        }
      }
    }

    .divisor {
      border: 1px solid ${grayScaleColors.white};
      opacity: 0.3;
      margin: 2.125rem 0 1.438rem;
    }

    .content-bottom {
      font-size: 0.813rem;
      line-height: 1.5rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 769px) {
    &.footer-component {
      padding: 3.125rem 1.25rem 2.875rem;
      justify-content: flex-start;

      .content-top {
        flex-wrap: wrap;
        justify-content: flex-start;

        .info-company {
          margin-bottom: 2.5rem;

          img {
            width: 10.625rem;
            margin-bottom: 1.25rem;
          }

          .description-company {
            line-height: 1.375rem;
            margin-bottom: 1.875rem;
          }
        }

        .items-company {
          gap: 0.625rem;
          width: fit-content;
          margin-right: 2rem;
          margin-bottom: 2.5rem;

          .list-items {
            gap: 0;

            li {
              a {
                line-height: 1.938rem;
              }
            }

            .item-span {
              line-height: 1.938rem;
              width: 17.563rem;
            }

            .item-span:not(:last-child) {
              margin-bottom: 1.5rem;
            }
          }
        }
      }

      .divisor {
        margin: 0 0 1.438rem;
      }
    }
  }
`;

const Footer = () => {
  const ano = new Date().getFullYear();
  const informations = [
    {
      text: "Sobre Drip Store",
      link: "/about",
    },
    {
      text: "Segurança",
      link: "/security-privacity",
    },
    {
      text: "Wishlist",
      link: "/wish-list",
    },
    {
      text: "Blog",
      link: "/blog",
    },
    {
      text: "Trabalhe conosco",
      link: "/work-us",
    },
    {
      text: "Meus Pedidos",
      link: "/my-orders",
    },
    {
      text: "Camisetas",
      link: "/products?type=camisetas",
    },
    {
      text: "Calças",
      link: "/products?type=calcas",
    },
    {
      text: "Bonés",
      link: "/products?type=bones",
    },
    {
      text: "Headphones",
      link: "/products?type=headphones",
    },
    {
      text: "Tênis",
      link: "/products?type=tenis",
    },
  ];

  const geraLinks = (array, comeco = 0, final) => {
    const limiteFinal = final ?? array.length; // usa array.length se final for undefined
    return (
      <ul className="list-items">
        {array.slice(comeco, limiteFinal).map((item) => (
          <li key={`link-footer-${item.text.replaceAll("/", "")}`}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <FooterComponent className="footer-component">
      <div className="content-top">
        <div className="info-company">
          <img src={logo} alt="logo da empresa" />
          <p className="description-company">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="box-social">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={face} alt="Facebook icone" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram icone" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter icone" />
            </a>
          </div>
        </div>
        <div className="items-company">
          <h4 className="title-list">Informação</h4>
          {geraLinks(informations, 0, 5)}
        </div>
        <div className="items-company">
          <h4 className="title-list">Categorias</h4>
          {geraLinks(informations, 6)}
        </div>
        <div className="items-company">
          <h4 className="title-list">Contato</h4>
          <div className="list-items">
            <span className="item-span">
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </span>
            <span className="item-span">(85) 3051-3411</span>
          </div>
        </div>
      </div>
      <hr className="divisor" />
      <div className="content-bottom">
        <p>@ {ano} Digital College</p>
      </div>
    </FooterComponent>
  );
};

export default Footer;

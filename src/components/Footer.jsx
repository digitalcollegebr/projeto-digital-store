import Logo from './Logo'
import FooterInfo from './FooterInfo'

import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

function Footer() {
  const informacoes = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Segurança', link: '/seguranca' },
    { text: 'Wishlist', link: '/wishlist' },
    { text: 'Blog', link: '/blog' },
    { text: 'Trabalhe conosco', link: '/trabalhe-conosco' },
    { text: 'Meus Pedidos', link: '/meus-pedidos' },
  ]

  // Os links levam para a listagem com o termo de busca
  const categorias = [
    { text: 'Camisetas', link: '/products?filter=camisetas' },
    { text: 'Calças', link: '/products?filter=calças' },
    { text: 'Bonés', link: '/products?filter=bonés' },
    { text: 'Headphones', link: '/products?filter=headphones' },
    { text: 'Tênis', link: '/products' },
  ]

  const anoAtual = new Date().getFullYear()

  return (
    <footer className="bg-dark-gray text-white">
      <div className="mx-auto max-w-[1440px] px-4 pt-14 pb-8 md:px-10 md:pt-[72px] xl:px-[100px]">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,_1fr)_auto_auto_auto] lg:gap-16">

          <div className="max-w-[310px]">
            <Logo variant="footer" />

            <p className="mt-8 text-base leading-7">
              A Digital Store é a sua loja de tênis e moda online, com as melhores marcas e preços que cabem no bolso. Compre com segurança e receba no conforto da sua casa.
            </p>

            <ul className="mt-8 flex items-center gap-6">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <img src={facebook} alt="" className="h-5 w-auto" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <img src={instagram} alt="" className="h-5 w-auto" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                  <img src={twitter} alt="" className="h-5 w-auto" />
                </a>
              </li>
            </ul>
          </div>

          <FooterInfo title="Informação" informations={informacoes} />
          <FooterInfo title="Categorias" informations={categorias} />

          <div>
            <h3 className="mb-5 text-lg font-semibold">Contato</h3>
            <address className="text-base leading-7 not-italic">
              Av. Santos Dumont, 1510 - 1 andar -
              <br />
              Aldeota, Fortaleza - CE, 60150-161
              <br />
              <br />
              (85) 3051-3411
            </address>
          </div>
        </div>

        <hr className="mt-12 border-dark-gray-3" />

        <p className="mt-8 text-center text-sm">
          © {anoAtual} Digital Store
        </p>
      </div>
    </footer>
  )
}

export default Footer

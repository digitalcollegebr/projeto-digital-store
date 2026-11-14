import logoHeader from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg';
import cart from '../assets/mini-cart.svg';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import star from '../assets/star-icon.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

const productThumbs = [
  '/images/products/tenis-puma-rosa.jpg',
  '/images/products/tenis-puma-branco.jpg',
  '/images/products/camiseta-branca.jpg',
  '/images/products/camiseta-hm-preta.jpg',
  '/images/products/calca-jeans-levis-501.jpg',
  '/images/products/calca-alfaiataria-hm-preta.jpg',
  '/images/products/bone-trucker.jpg',
  '/images/products/bone-la-bordado.jpg',
];

export const assets = {
  logoHeader,
  logoFooter,
  cart,
  arrowLeft,
  arrowRight,
  star,
  facebook,
  instagram,
  twitter,
  homeSlides: [
    {
      src: productThumbs[1],
      alt: 'Tênis Puma branco em destaque sobre fundo escuro',
      backgroundColor: '#111111',
    },
    {
      src: productThumbs[3],
      alt: 'Camiseta preta de manga curta e gola redonda',
      backgroundColor: '#f7f7f7',
    },
    {
      src: productThumbs[4],
      alt: 'Calça jeans Levi’s azul vista de frente',
      backgroundColor: '#f7f7f7',
    },
    {
      src: productThumbs[7],
      alt: 'Boné camuflado com bordado LA e aba reta',
      backgroundColor: '#f0efed',
    },
  ].map((slide) => ({
    ...slide,
    fit: 'contain',
    position: 'center',
    frameWidth: '60%',
  })),
  collections: [productThumbs[0], productThumbs[2], productThumbs[6]],
  productThumbs,
};

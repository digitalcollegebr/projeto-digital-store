import Logo from "../Logo";
import Information from "../Information/Information";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import "./Footer.css";

const socials = [
  { name: "Facebook", icon: facebook, link: "https://www.facebook.com" },
  { name: "Instagram", icon: instagram, link: "https://www.instagram.com" },
  { name: "Twitter", icon: twitter, link: "https://www.twitter.com" },
];

const institutional = [
  { text: "Sobre Drip Store", link: "/about" },
  { text: "Segurança", link: "/security" },
  { text: "Wishlist", link: "/wishlist" },
  { text: "Blog", link: "/blog" },
  { text: "Trabalhe conosco", link: "/jobs" },
  { text: "Meus Pedidos", link: "/orders" },
];

const categories = [
  { text: "Camisetas", link: "/products?category=camisetas" },
  { text: "Calças", link: "/products?category=calcas" },
  { text: "Bonés", link: "/products?category=bones" },
  { text: "Headphones", link: "/products?category=headphones" },
  { text: "Tênis", link: "/products?category=tenis" },
];

const contact = [
  { text: "Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 60150-161", link: "/contact" },
  { text: "(85) 3051-3411", link: "tel:+558530513411" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <section className="footer__brand">
          <Logo color="white" />
          <p className="footer__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem, quod, quia, voluptas quos quibusdam voluptates
            repellendus.
          </p>
          <div className="footer__socials">
            {socials.map(({ name, icon, link }) => (
              <a key={name} href={link} target="_blank" rel="noreferrer" aria-label={name}>
                <img src={icon} alt={name} />
              </a>
            ))}
          </div>
        </section>

        <Information title="Informações" informations={institutional} />
        <Information title="Categorias" informations={categories} />
        <Information title="Contato" informations={contact} />
      </div>

      <hr className="footer__divider" />
      <p className="footer__copy">© {new Date().getFullYear()} Digital Store</p>
    </footer>
  );
}
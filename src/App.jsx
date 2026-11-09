import Section from "./components/Section.jsx"
import ProductCard from "./components/ProductCard.jsx"

function App() {
  return (
    <main>
      <h1>Digital Store</h1>
      <p>Sejam bem-vindos à loja Digital Store</p>

      <Section
        title="Produtos em alta"
        titleAlign="center"
        link={{text: "Ver todos", href: "/"}}
      >
          <ProductCard
            image="product-thumb-1.jpeg"
            name="Tênis esportivo"
            price={199.99}
            priceDiscount={149.99}
          />

          <ProductCard
            image="product-thumb-1.jpeg"
            name="Tênis esportivo"
            price={199.99}
          />
      </Section>

    </main>
  )
}

export default App

import SobreProjeto from "./components/SobreProjeto.jsx"
import Section from "./components/Section.jsx"

function App() {
  return (
    <main>
      <h1>Digital Store</h1>
      <p>Sejam bem-vindos à loja Digital Store</p>
      <SobreProjeto titulo="Sobre o projeto" descricao="Projeto desenvolvido durante o curso de desenvolvimento fullstack do Geração Tech 4.0" />

      <Section title="Produtos em alta">
        <p>Aqui serão exibidos os produtos da Digital Store</p>
      </Section>

      <Section title="Produtos em alta" titleAlign="center" link={{text: "Ver todos", href: "/"}}>
        <p>Aqui serão exibidos os produtos da Digital Store</p>
      </Section>
    </main>
  )
}

export default App

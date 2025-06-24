import { tabelas } from "./data/tabelas";
import { TabelaPlano } from "./components/TabelaPlano";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <TituloSite>GT Seguros</TituloSite>
      <Descricao>Nossas tabelas comercializadas.</Descricao>

      {tabelas.map((tabela, index) => (
        <TabelaPlano key={index} {...tabela} />
      ))}
    </Container>
  );
}

export default App;

// Styled Components
const Container = styled.div`
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TituloSite = styled.h1`
  text-align: center;
  color: #0038a8;
  margin-bottom: 2rem;
`;

// Aqui um componente para o texto de descrição/subtítulo
const Descricao = styled.h3`
  color: #0038a8;
  font-weight: 600;
  margin: 0 0 1rem 0;
  text-align: center;
  font-family: "Arial", sans-serif;
  font-size: 1.5rem; /* aumenta o tamanho da fonte */
`;

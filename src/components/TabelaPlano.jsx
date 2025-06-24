import styled from "styled-components";

export const TabelaPlano = ({
  nome,
  imagem,
  pdf,
  vigencia,
  campanhaMes,
  linkExtra,
}) => {
  return (
    <Card>
      <Titulo>{nome}</Titulo>

      {imagem ? (
        <Imagem src={imagem} alt={`Tabela do plano ${nome}`} />
      ) : (
        <TextoFaltando>📷 Imagem não disponível</TextoFaltando>
      )}

      <Info>
        <Item>
          <strong>📅 Vigência:</strong> {vigencia || "Não informado"}
        </Item>
        <Item>
          <strong>📣 Campanha do mês:</strong> {campanhaMes || "Não informado"}
        </Item>
      </Info>

      <BotoesWrapper>
        {pdf ? (
          <Botao href={pdf} target="_blank" rel="noopener noreferrer">
            📄 Tabela em PDF
          </Botao>
        ) : (
          <TextoFaltando>📄 PDF não disponível</TextoFaltando>
        )}

        {linkExtra && (
          <BotaoMenor
            href={linkExtra}
            target="_blank"
            rel="noopener noreferrer"
          >
            🌍 Tabela Demais Regiões
          </BotaoMenor>
        )}
      </BotoesWrapper>
    </Card>
  );
};

// Styled Components
const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  margin: 1rem 0;
  max-width: 600px;
  width: 100%;
`;

const Titulo = styled.h2`
  font-size: 1.25rem;
  color: #0038a8; /* Azul Royal */
  margin-bottom: 0.75rem;
`;

const Imagem = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  margin-bottom: 1rem;
`;

const Item = styled.p`
  margin: 0.3rem 0;
`;

// Container flex para os botões
const BotoesWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap; /* para quebra de linha se necessário */
  margin-top: 1rem;
`;

const Botao = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #0038a8;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
  white-space: nowrap;

  &:hover {
    background: #002a80;
  }
`;

// Botão menor para o link extra
const BotaoMenor = styled(Botao)`
  padding: 0.3rem 0.7rem;
  font-size: 0.85rem;
`;

const TextoFaltando = styled.p`
  color: #888;
  font-style: italic;
  margin: 0.5rem 0;
`;

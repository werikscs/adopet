import { Container, Content, ContentTitle, Figure } from "./styles";
import girlCat from "../../assets/garota-milenar-feliz-com-cachorro.webp";

const SectionHomePart2 = () => {
  return (
    <Container>
      <Figure>
        <img src={girlCat} alt="Garota srgurando um gato" />
      </Figure>
      <Content>
        <ContentTitle>
          <h3>Sobre o Adopet</h3>
        </ContentTitle>

        <p>
          Nós fazemos a conexão entre quem deseja adotar um pet com uma rede de
          ONGs e protetores. Usamos o poder da Internet para conectar pessoas,
          com um desejo de adotar, com animais de estimação de abrigos. Dessa
          forma, ajudando animais de estimação a passarem de sozinhos a
          adotados.
        </p>

        <p>
          As ONGs/protetores ficam responsáveis pelo processo e entrevistas com
          os potenciais adotantes. Nosso objetivo e criar um ambiente focado nos
          pets.
        </p>
      </Content>
    </Container>
  );
};

export default SectionHomePart2;

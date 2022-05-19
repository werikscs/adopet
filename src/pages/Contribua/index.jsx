import catImg from "../../assets/gatinho-contribua.png";
import caoSemDono from "../../assets/cao-sem-dono.webp";
import quatroPatinhas from "../../assets/quatro-patinhas.webp";
import projetoEsdras from "../../assets/projeto-esdras.webp";
import SectionHomePart5 from "../../components/section-Home-Part5";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import {
  Main,
  Section,
  Container,
  Content,
  ContentTitle,
  ContainerListOngs,
  ContainerUl,
  LiONGs,
} from "./styles";

// import { useHistory } from "react-router-dom";
const Contribua = () => {
  //   const history = useHistory();
  return (
    <Main>
      <Section>
        <div>
          <h1>Como você pode ajudar</h1>
          <p>
            Que ótimo que você clicou aqui. É muito bonito ver a intenção das
            pessoas quando o assunto é ajudar uma causa que lhes toca. De
            imediato, já agradecemos seu envolvimento.
          </p>
        </div>
        <figcaption>
          <img src={catImg} alt="Gatinho carismático" />
        </figcaption>
      </Section>
      <Container>
        <Content>
          <ContentTitle>
            <h3>Formas de ajudar</h3>
          </ContentTitle>
          <p>
            Por meio deste canal, você pode você pode ajudar ONGs e protetores a
            mudarem a realidade da proteção animal no Brasil. Com a sua ajuda,
            ONGs e protetores continuarão fazendo ainda mais, a diferença na
            vida de milhares de cães e gatos que vivem em abrigos em nosso país.
            Nós, do Adopet, temos orgulho de fazer um trabalho construído a
            várias mãos, que contribui para a ampliação e melhoria das condições
            de atuação de ONGs e protetores parceiros.
          </p>
        </Content>
      </Container>
      <ContainerListOngs>
        <h2>Escolha a ONG</h2>
        <div>
          <ContainerUl>
            <LiONGs>
              <img src={caoSemDono} alt="ONG Cão Sem Dono" />
              <div>
                <h3>Cão Sem Dono</h3>
                <Button orangeSchema={"orangeSchema"}>Ajudar</Button>
              </div>
            </LiONGs>
            <LiONGs>
              <img src={quatroPatinhas} alt="Associação Quatro Patinhas" />
              <div>
                <h3>Ass. Quatro Patinhas</h3>
                <Button orangeSchema={"orangeSchema"}>Ajudar</Button>
              </div>
            </LiONGs>

            <LiONGs>
              <img src={projetoEsdras} alt="ONG Projeto Esdras" />
              <div>
                <h3>Projeto Esdras</h3>
                <Button orangeSchema={"orangeSchema"}>Ajudar</Button>
              </div>
            </LiONGs>
          </ContainerUl>
        </div>
      </ContainerListOngs>
      <SectionHomePart5 />
      <Footer />
    </Main>
  );
};

export default Contribua;

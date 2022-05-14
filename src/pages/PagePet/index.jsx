import defaultImg from "../../assets/proprietario-default-img.svg";
import ButtonOutlined from "../../components/ButtonOutlined";
import Button from "../../components/Button";

import {
  GenericContainer,
  Main,
  Figcaption,
  DivMoreImgs,
  DivInfoPet,
  DivInfoUser,
  DivButtons,
} from "./styles";

const PagePet = () => {
  return (
    <GenericContainer>
      <Main>
        {/* imagem grande do animal */}
        <Figcaption>
          <img
            src="https://uploaddeimagens.com.br/images/003/866/666/original/cao1_1.png"
            alt=""
          />
        </Figcaption>

        {/* outras imagens do animal */}
        <DivMoreImgs>
          <img
            src="https://uploaddeimagens.com.br/images/003/866/666/original/cao1_1.png"
            alt=""
          />
          <img
            src="https://uploaddeimagens.com.br/images/003/866/666/original/cao1_1.png"
            alt=""
          />
          <img
            src="https://uploaddeimagens.com.br/images/003/866/666/original/cao1_1.png"
            alt=""
          />
          <img
            src="https://uploaddeimagens.com.br/images/003/866/666/original/cao1_1.png"
            alt=""
          />
        </DivMoreImgs>

        <DivInfoPet>
          <h1>Fiona</h1>

          <DivInfoUser>
            <img src={defaultImg} alt="" />
            <div>
              <h2>João da Silva</h2>
              <h3>proprietário</h3>
            </div>
          </DivInfoUser>

          <h2>Fêmea</h2>

          <h2>Porte Pequeno</h2>

          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            hendrerit massa ipsum, nec aliquet ante varius non. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Quisque hendrerit massa
            ipsum, nec aliquet ante varius non.Lorem ipsum dolor sit am
          </span>
        </DivInfoPet>

        <DivButtons>
          <ButtonOutlined callback={() => console.log("voltar")}>
            voltar
          </ButtonOutlined>
          <Button onClick={() => console.log("Quero Adotar")} orangeSchema>
            Quero Adotar
          </Button>
        </DivButtons>
      </Main>
    </GenericContainer>
  );
};

export default PagePet;

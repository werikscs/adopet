import {
  CircleHowItWork,
  ContainerHowItWork,
  ContentHowItWork,
} from "./styles";
import house from "../../assets/house.png";
import cadastro from "../../assets/cadastro.png";
import contato from "../../assets/contato.png";
import cachorro from "../../assets/cachorro.png";

const SectionHomePart3 = () => {
  return (
    <ContainerHowItWork>
      <h2>Entenda como funciona</h2>
      <ContentHowItWork>
        <div>
          <CircleHowItWork>
            <img src={house} alt="house" />
          </CircleHowItWork>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            hendrerit massa ipsum, nec aliquet ante varius non.
          </p>
        </div>
        <div>
          <CircleHowItWork>
            <img src={cadastro} alt="cadastro" />
          </CircleHowItWork>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            hendrerit massa ipsum, nec aliquet ante varius non.
          </p>
        </div>
        <div>
          <CircleHowItWork>
            <img src={contato} alt="contato" />
          </CircleHowItWork>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            hendrerit massa ipsum, nec aliquet ante varius non.
          </p>
        </div>
        <div>
          <CircleHowItWork>
            <img src={cachorro} alt="cachorro" />
          </CircleHowItWork>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            hendrerit massa ipsum, nec aliquet ante varius non.
          </p>
        </div>
      </ContentHowItWork>
    </ContainerHowItWork>
  );
};

export default SectionHomePart3;

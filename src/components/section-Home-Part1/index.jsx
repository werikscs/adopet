import Button from "../Button";
import dogImg from "../../assets/dogHome.png";
import { Section } from "./styles";

const SectionHomePart1 = () => {
  return (
    <Section>
      <div>
        <h1>
          Somos amantes de animais de estimação tentando fazer a diferença.
        </h1>
        <Button orangeSchema>Adote um pet</Button>
      </div>
      <figcaption>
        <img src={dogImg} alt="" />
      </figcaption>
    </Section>
  );
};

export default SectionHomePart1;

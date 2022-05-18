import Button from "../Button";
import dogImg from "../../assets/dogHome.png";
import { Section } from "./styles";

import { useHistory } from "react-router-dom";

const SectionHomePart1 = () => {
  const history = useHistory();

  return (
    <Section>
      <div>
        <h1>
          Somos amantes de animais de estimação tentando fazer a diferença.
        </h1>
        <Button orangeSchema onClick={() => history.push("/adote")}>
          Adote um pet
        </Button>
      </div>
      <figcaption>
        <img src={dogImg} alt="" />
      </figcaption>
    </Section>
  );
};

export default SectionHomePart1;

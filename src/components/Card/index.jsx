import { LiCard } from "./style";
import iconMacho from "../../assets/macho.svg";
import iconFemea from "../../assets/femea.svg";

const Card = ({ pets }) => {
  const { name, sex, size, img } = pets;
  return (
    <LiCard>
      <img src={img} alt={name} />
      <div>
        <h3>
          {name} <img src={sex === "m" ? iconMacho : iconFemea} alt="sexo" />
        </h3>
        <span>Porte {size}</span>
      </div>
    </LiCard>
  );
};

export default Card;

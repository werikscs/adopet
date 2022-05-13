import { LiCard } from "./style";
import iconMacho from "../../assets/macho.svg";
import iconFemea from "../../assets/femea.svg";

const Card = ({ pets, isAdote = false }) => {
  const { name, sex, size, img } = pets;
  return (
    <LiCard isAdote={isAdote}>
      <img src={img} alt={name} />
      <div>
        <h3>
          {name} <img src={sex === "m" ? iconMacho : iconFemea} alt="sexo" />
        </h3>
        <h4>Porte {size}</h4>
      </div>
    </LiCard>
  );
};

export default Card;

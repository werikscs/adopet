import Card from "../Card";
import { Ul } from "./styles";

const ListCard = ({ isAdote = false, listPets }) => {
  return (
    <Ul isAdote={isAdote}>
      {listPets.map((pet) => (
        <Card isAdote={isAdote} key={pet.id} pets={pet} />
      ))}
    </Ul>
  );
};

export default ListCard;

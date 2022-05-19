import deleteImg from "../../assets/Trash.svg";
import editImg from "../../assets/Edit_fill.svg";
import { Li, Ul } from "./styles";
import { useHistory } from "react-router-dom";

const ListCardDashboard = ({ listPets }) => {
  const history = useHistory();

  return (
    <Ul>
      {listPets.map((pet) => {
        return (
          <Li key={pet.id}>
            <figcaption>
              <img src={pet.img} alt="" />
            </figcaption>
            <h1>{pet.name}</h1>
            <div>
              <img
                src={editImg}
                alt=""
                onClick={() => history.push(`/user/pet/${pet.id}`)}
              />
              <img
                src={deleteImg}
                alt=""
                onClick={() => console.log("delete")}
              />
            </div>
          </Li>
        );
      })}
    </Ul>
  );
};

export default ListCardDashboard;

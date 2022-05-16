import Logo from "../../assets/Logo.svg";
import HomeIcon from "../../assets/HomeIcon.svg";
import SortIcon from "../../assets/SortIcon.svg";
import AddIcon from "../../assets/AddIcon.svg";
import GiftIcon from "../../assets/GiftIcon.svg";
import { Container, Content } from "./styles";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useState } from "react";
const Header = () => {
  const [handleButton, setHandleButton] = useState("false");

  const buttonClick = () => {
    if (handleButton === false) {
      setHandleButton(true);
    } else {
      setHandleButton(false);
    }
  };

  return (
    <Container>
      <Link className="logo--content" to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      {handleButton ? (
        <Content>
          <ul>
            <li>
              <Link to="/">
                <img src={HomeIcon} alt="Home" /> Início
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={AddIcon} alt="Add" /> Adote um Pet
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={SortIcon} alt="Sort" /> Doe um Pet
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={GiftIcon} alt="Gift" />
                Contribua
              </Link>
            </li>
            <Button>Entrar</Button>
          </ul>
        </Content>
      ) : (
        <Content handleButton>
          <ul>
            <li>
              <Link to="/">
                <img src={HomeIcon} alt="Home" /> Início
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={AddIcon} alt="Add" /> Adote um Pet
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={SortIcon} alt="Sort" /> Doe um Pet
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={GiftIcon} alt="Gift" />
                Contribua
              </Link>
            </li>
            <Button>Entrar</Button>
          </ul>
        </Content>
      )}

      <button
        id="burger"
        className={handleButton ? "burger " : "burger active"}
        onClick={() => buttonClick()}
      >
        <span className="btn--burger"></span>
      </button>
    </Container>
  );
};
export default Header;

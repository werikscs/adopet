import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "../../assets/Logo.svg";
import HomeIcon from "../../assets/HomeIcon.svg";
import SortIcon from "../../assets/SortIcon.svg";
import AddIcon from "../../assets/AddIcon.svg";
import GiftIcon from "../../assets/GiftIcon.svg";
import defaultImg from "../../assets/proprietario-default-img.svg";

import Button from "../Button";

import { Container, Content, DivInfoUser, ExternalContainer } from "./styles";
import api from "../../services/api";

const Header = () => {
  const isLogged = true;

  const [dataOwner, setDataOwner] = useState({});

  const getUserById = (userId) => {
    api.get(`/644/users/${userId}`).then((res) => setDataOwner(res.data));
  };

  const [handleButton, setHandleButton] = useState(false);

  const buttonClick = () => {
    setHandleButton(!handleButton);
  };

  return (
    <ExternalContainer>
      <Container>
        <Link className="logo--content" to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <Content handleButton={handleButton}>
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
            {isLogged ? (
              <DivInfoUser>
                <img src={dataOwner.avatar || defaultImg} alt="" />
                <div>
                  <h5>{dataOwner.name || "João da Silva"}</h5>
                  <h6>perfil</h6>
                </div>
                <button>SAIR</button>
              </DivInfoUser>
            ) : (
              <Button>Entrar</Button>
            )}
          </ul>
        </Content>

        <button
          id="burger"
          className={handleButton ? "burger active" : "burger "}
          onClick={() => buttonClick()}>
          <span className="btn--burger"></span>
        </button>
      </Container>
    </ExternalContainer>
  );
};
export default Header;

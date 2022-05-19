import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import api from "../../services/api";

import Logo from "../../assets/Logo.svg";
import HomeIcon from "../../assets/HomeIcon.svg";
import SortIcon from "../../assets/SortIcon.svg";
import AddIcon from "../../assets/AddIcon.svg";
import GiftIcon from "../../assets/GiftIcon.svg";
import defaultImg from "../../assets/proprietario-default-img.svg";

import Button from "../Button";

import { Container, Content, DivInfoUser, ExternalContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/User";

const Header = () => {
  const history = useHistory();

  const [handleButton, setHandleButton] = useState(false);

  const userInfoLocalStorage =
    JSON.parse(localStorage.getItem("infoUser")) || {};

  const { userData, updateUserData } = useContext(UserContext);

  const buttonClick = () => {
    setHandleButton(!handleButton);
  };

  const closeMenu = () => {
    setHandleButton(false);
  };

  const goToLogin = () => {
    closeMenu();
    history.push("/login");
  };

  const loggoutAndGoToHome = () => {
    localStorage.clear();
    updateUserData({});
    history.push("/");
  };

  const getUserById = (id) => {
    api
      .get("/644/users/" + id)
      .then((res) => updateUserData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (userInfoLocalStorage.id) getUserById(userInfoLocalStorage.id);
  }, []);

  return (
    <ExternalContainer>
      <Container>
        <Link className="logo--content" to="/" onClick={closeMenu}>
          <img src={Logo} alt="Logo" />
        </Link>

        <Content handleButton={handleButton}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                <img src={HomeIcon} alt="Home" /> Início
              </Link>
            </li>
            <li>
              <Link to="/adote" onClick={closeMenu}>
                <img src={AddIcon} alt="Add" /> Adote um Pet
              </Link>
            </li>
            <li>
              <Link to="/user/pets" onClick={closeMenu}>
                <img src={SortIcon} alt="Sort" /> Doe um Pet
              </Link>
            </li>
            <li>
              <Link to="/contribua" onClick={closeMenu}>
                <img src={GiftIcon} alt="Gift" />
                Contribua
              </Link>
            </li>
            {userData.id ? (
              <DivInfoUser>
                <img src={userData.avatar || defaultImg} alt="" />
                <div>
                  <h5>{userData.name || "undefined"}</h5>
                  <h6>perfil</h6>
                </div>
                <button onClick={loggoutAndGoToHome}>SAIR</button>
              </DivInfoUser>
            ) : (
              <Button isLogged onClick={goToLogin}>
                Entrar
              </Button>
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

import Logo from "../../assets/Logo.svg";
import HomeIcon from "../../assets/HomeIcon.svg";
import SortIcon from "../../assets/SortIcon.svg";
import AddIcon from "../../assets/AddIcon.svg";
import GiftIcon from "../../assets/GiftIcon.svg";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import Button from "../Button";

const Header = () => {
  const handleButton = () => {
    const nav = document.getElementById("navBar");
    const btn = document.getElementById("burger");
    nav.classList.toggle("active");
    btn.classList.toggle("active");
  };

  return (
    <Container>
      <Link className="logo--content" to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <nav id="navBar">
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
        </ul>
        <Button>Entrar</Button>
      </nav>

      <button id="burger" className="burger" onClick={() => handleButton()}>
        <span className="btn--burger"></span>
      </button>
    </Container>
  );
};
export default Header;

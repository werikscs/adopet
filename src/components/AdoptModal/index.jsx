import Button from "../Button";
import ButtonOutlined from "../ButtonOutlined";
import { Container } from "./style.js";

const WantAdopt = ({ handleClose, show, dataOwner }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <Container>
      <div className={showHideClassName}>
        <header>
          <p>Informações do dono</p>
          <button onClick={handleClose}>X</button>
        </header>
        <section>
          <main>
            <p>Nome: {dataOwner.name}</p>
            <p>Email: {dataOwner.email}</p>
            <p>Telefone: {dataOwner.phone}</p>
          </main>
          <aside>
            <img src={dataOwner.avatar} alt={dataOwner.name} />
          </aside>
        </section>
        <footer>
          <ButtonOutlined onClick={handleClose}>voltar</ButtonOutlined>
          <Button orangeSchema>
            {" "}
            <a
              href={`https://web.whatsapp.com/send?phone=55${dataOwner.phone}`}
              target={"_blank"}
              rel="noreferrer">
              Whatsapp
            </a>
          </Button>
        </footer>
      </div>
    </Container>
  );
};

export default WantAdopt;

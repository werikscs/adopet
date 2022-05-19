import { Container } from "./style.js";

const WantAdopt = ({ handleClose, show, dataOwner }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  console.log(dataOwner);

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
      </div>
    </Container>
  );
};

export default WantAdopt;

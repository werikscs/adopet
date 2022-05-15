import helpPet from "../../assets/ajudapet.webp";
import "./styles.css";

const SectionHomePart5 = () => {
  return (
    <div className="container container__help">
      <div className="columns">
        <div className="column">
          <div className="content">
            <h3 class="title is-3 title__help">
              Você também pode ajudar de outras maneiras!
            </h3>
            <p className="content__paragraph">
              Você pode ajudar ONGs e protetores a mudarem a realidade da
              proteção animal no Brasil. Sua ajuda pode fazer a diferença na
              vida de milhares de cães e gatos que vivem em abrigos em nosso
              país.
            </p>
            <p className="content__paragraph">
              Nós, do AdoPet, temos orgulho de fazer um trabalho construído a
              várias mãos, que contribui para a ampliação e melhoria das
              condições de atuação de ONGs e protetores parceiros.
            </p>
            <p className="content__paragraph">O que você também pode fazer:</p>
            <ul className="content__paragraph">
              <li>Apadrinhar um pet</li>
              <li>Oferecer um lar temporário</li>
              <li>
                Ser voluntário nos eventos ou nos próprios abrigos das ONGs
              </li>
              <li>Doar itens nos próprios abrigos e para as ONGs</li>
            </ul>
          </div>
        </div>
        <div className="column">
          <figure className="image is-3by3">
            <img
              src={helpPet}
              className="image__help"
              alt="Contribua com nosso serviço"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SectionHomePart5;

import {
  CircleHowItWork,
  ContainerHowItWork,
  ContentHowItWork,
} from "./styles";
import house from "../../assets/house.png";
import cadastro from "../../assets/cadastro.png";
import contato from "../../assets/contato.png";
import cachorro from "../../assets/cachorro.png";

const SectionHomePart3 = () => {
  return (
    <ContainerHowItWork>
      <h2>Entenda como funciona</h2>
      <ContentHowItWork>
        <div>
          <CircleHowItWork>
            <img src={house} alt="house" />
          </CircleHowItWork>
          <p>
            Faça uma busca em nosso espaço dedicado à adoção. Lá você irá
            conhecer um pouco sobre os pets, para criar a conexão perfeita com
            cão e/ou gato que busca um novo lar.
          </p>
        </div>
        <div>
          <CircleHowItWork>
            <img src={cadastro} alt="cadastro" />
          </CircleHowItWork>
          <p>
            Encontrado o seu futuro pet, você deve preencher o formulário de
            interesse que disponibilizamos aqui no Adopet, que a ONG/protetor
            entrará em contato com você.
          </p>
        </div>
        <div>
          <CircleHowItWork>
            <img src={contato} alt="contato" />
          </CircleHowItWork>
          <p>
            A ONG/protetor, irá fazer a análise do seu cadastro/perfil vs pet
            escolhido. Você receberá um feedback por telefone/e-mail caso seja
            preenchido o formulário.
          </p>
        </div>
        <div>
          <CircleHowItWork>
            <img src={cachorro} alt="cachorro" />
          </CircleHowItWork>
          <p>
            Espere o contato. Caso seja aprovado pela ONG/protetor, você poderá
            levar seu pet para casa! Com tudo certo, você busca seu pet no dia
            combinado com a ONG/protetor.
          </p>
        </div>
      </ContentHowItWork>
    </ContainerHowItWork>
  );
};

export default SectionHomePart3;

import { useContext, useEffect } from "react";
import { useState } from "react";

import { useParams, useHistory } from "react-router-dom";

import { UserContext } from "../../providers/User";

import api from "../../services/api";

import defaultImg from "../../assets/proprietario-default-img.svg";

import ButtonOutlined from "../../components/ButtonOutlined";
import Button from "../../components/Button";
import WantAdopt from "../../components/AdoptModal";
<<<<<<< HEAD
import FooterChat from "../../components/footer-Chat";
=======
>>>>>>> 58e657417dbfe160fb869ffd858264a190ab54f4

import * as S from "./styles";

const PagePet = () => {
  const [dataPet, setDataPet] = useState({});
  const [dataOwner, setDataOwner] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const params = useParams();
  const history = useHistory();

  const { userData } = useContext(UserContext);

  const getAnimalById = (id) => {
    api.get(`/644/animals/${id}`).then((res) => setDataPet(res.data));
  };

  const getUserById = (userId) => {
    api.get(`/644/users/${userId}`).then((res) => setDataOwner(res.data));
  };

  const showModal = (data) => {
    setOpenModal(true);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  const wantToAdopt = () => {
    if (userData.id) {
      showModal();
    } else {
      history.push("/login");
    }
  };

  useEffect(() => {
    getAnimalById(params.id);
  }, []);

  useEffect(() => {
    if (dataPet.userId) getUserById(dataPet.userId);
  }, [dataPet]);

  return (
    <S.GenericContainer>
      <S.Main>
        <S.Figcaption>
          <img src={dataPet.img} alt="" />
        </S.Figcaption>

        <S.DivMoreImgs>
          <img src={dataPet.img} alt="" />
          <img src={dataPet.img} alt="" />
          <img src={dataPet.img} alt="" />
          <img src={dataPet.img} alt="" />
        </S.DivMoreImgs>

        <S.DivInfoPet>
          <h1>{dataPet.name}</h1>

          <S.DivInfoUser>
            <img src={dataOwner.avatar || defaultImg} alt="" />
            <div>
              <h5>{dataOwner.name}</h5>
              <h6>proprietário</h6>
            </div>
          </S.DivInfoUser>

          <h2>{dataPet.sex === "m" ? "Macho" : "Fêmea"}</h2>

          <h2>
            {dataPet.size === "small"
              ? "Pequeno"
              : dataPet.size === "medium"
              ? "Médio"
              : "Grande"}
          </h2>

          <span>{dataPet.moreInfo}</span>
        </S.DivInfoPet>

        <WantAdopt
          dataOwner={dataOwner}
          handleClose={hideModal}
          show={openModal}
        />

        <S.DivButtons>
          <ButtonOutlined callback={() => history.goBack()}>
            voltar
          </ButtonOutlined>
          {dataPet.userId === userData.id && (
            <ButtonOutlined
              callback={() => history.push(`/user/pet/${dataPet.id}`)}
            >
              Editar Pet
            </ButtonOutlined>
          )}
          <Button onClick={wantToAdopt} orangeSchema>
            Quero Adotar
          </Button>
        </S.DivButtons>

        <FooterChat />
      </S.Main>
    </S.GenericContainer>
  );
};

export default PagePet;

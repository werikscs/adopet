import defaultImg from "../../assets/proprietario-default-img.svg";
import ButtonOutlined from "../../components/ButtonOutlined";
import Button from "../../components/Button";

import {
  GenericContainer,
  Main,
  Figcaption,
  DivMoreImgs,
  DivInfoPet,
  DivInfoUser,
  DivButtons,
} from "./styles";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PagePet = () => {
  const [dataPet, setDataPet] = useState({});
  const [dataOwner, setDataOwner] = useState({});

  const params = useParams();
  const history = useHistory();

  const getAnimalById = (id) => {
    api.get(`/644/animals/${id}`).then((res) => setDataPet(res.data));
  };

  const getUserById = (userId) => {
    api.get(`/644/users/${userId}`).then((res) => setDataOwner(res.data));
  };

  useEffect(() => {
    getAnimalById(params.id);
  }, []);

  useEffect(() => {
    if (dataPet.userId) getUserById(dataPet.userId);
  });

  return (
    <GenericContainer>
      <Main>
        {/* imagem grande do animal */}
        <Figcaption>
          <img src={dataPet.img} alt="" />
        </Figcaption>

        {/* outras imagens do animal */}
        <DivMoreImgs>
          <img src={dataPet.img} alt="" />
          <img src={dataPet.img} alt="" />
          <img src={dataPet.img} alt="" />
          <img src={dataPet.img} alt="" />
        </DivMoreImgs>

        <DivInfoPet>
          <h1>{dataPet.name}</h1>

          <DivInfoUser>
            <img src={dataOwner.avatar || defaultImg} alt="" />
            <div>
              <h5>{dataOwner.name}</h5>
              <h6>proprietário</h6>
            </div>
          </DivInfoUser>

          <h2>{dataPet.sex === "m" ? "Macho" : "Fêmea"}</h2>

          <h2>
            {dataPet.size === "small"
              ? "Pequeno"
              : dataPet.size === "medium"
              ? "Médio"
              : "Grande"}
          </h2>

          <span>{dataPet.moreInfo}</span>
        </DivInfoPet>

        <DivButtons>
          <ButtonOutlined callback={() => history.push("/")}>
            voltar
          </ButtonOutlined>
          <Button onClick={() => console.log("Quero Adotar")} orangeSchema>
            Quero Adotar
          </Button>
        </DivButtons>
      </Main>
    </GenericContainer>
  );
};

export default PagePet;

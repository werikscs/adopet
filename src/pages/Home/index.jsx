import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";

import Footer from "../../components/Footer";
import ListCard from "../../components/ListCard";

import SectionHomePart1 from "../../components/section-Home-Part1";
import SectionHomePart2 from "../../components/section-Home-Part2";
import SectionHomePart3 from "../../components/section-Home-Part3";
import SectionHomePart5 from "../../components/section-Home-Part5";

import { ContainerListPets, Main } from "./styles";

const Home = () => {
  useEffect(() => {
    getListPets();
  }, []);

  const getListPets = () => {
    api.get(`/animals?_page=1&_limit=9`).then((res) => {
      setlistPet(res.data);
    });
  };

  const [listPet, setlistPet] = useState([]);

  return (
    <Main>
      <SectionHomePart1 />
      <SectionHomePart2 />
      <SectionHomePart3 />
      <ContainerListPets>
        <h2>Animais em Destaque</h2>
        <div>
          <ListCard listPets={listPet} />
        </div>
      </ContainerListPets>
      <SectionHomePart5 />
      <Footer />
    </Main>
  );
};

export default Home;

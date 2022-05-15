import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../components/Footer";
import ListCard from "../../components/ListCard";
import SectionHomePart2 from "../../components/section-Home-Part2";
import SectionHomePart3 from "../../components/section-Home-Part3";
import SectionHomePart5 from "../../components/section-Home-Part5";
import api from "../../services/api";
import { ContainerListPets } from "./styles";

const Home = () => {
  useEffect(() => {
    getListPets();
  }, []);

  const getListPets = () => {
    api.get(`/animals?_page=1&_limit=9`).then((res) => {
      console.log(res.data);
      setlistPet(res.data);
    });
  };

  const [listPet, setlistPet] = useState([]);

  return (
    <>
      <SectionHomePart2 />
      <SectionHomePart3 />
      <ContainerListPets>
        <h2>Animais em Destaque</h2>
        <ListCard listPets={listPet} />
      </ContainerListPets>
      <SectionHomePart5 />
      <Footer />
    </>
  );
};

export default Home;

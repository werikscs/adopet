import { useEffect } from "react";
import { useState } from "react";

import DivSelect from "../../components/DivSelect";
import ListCard from "../../components/ListCard";

import api from "../../services/api";

import { ContainerTotal, ContentFiltro, ContentList } from "./styles";
import iconFilter from "../../assets/filterIcon.svg";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Adote = () => {
  const [sex, setSex] = useState("");
  const [species, setSpecies] = useState("");
  const [size, setSizes] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    filtros();
  }, [sex, name, size, species]);

  const [listpets, setListpets] = useState([]);

  const filtros = () => {
    api.get(`/animals?${name}${sex}${species}${size}`).then((res) => {
      console.log(res.data);
      setListpets(res.data);
    });
  };

  const getName = (value) => {
    const setFilter = "name_like=" + value + "&";

    value ? setName(setFilter) : setName("");
  };

  // chakra
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef()

  return (
    <ContainerTotal>
      <ContentFiltro>
        <div>
          <h2>
            <img src={iconFilter} alt="icon filter" /> Pesquisar por filtro
          </h2>
          <div className="inputDiv">
            <label>NOME</label>
            <input
              type="search"
              placeholder="Pesquise por nome"
              onChange={(e) => getName(e.target.value)}
            />
          </div>
          <DivSelect
            label="PORTE"
            placeholder="qualquer"
            name="size="
            error={""}
            setSelect={setSizes}
          >
            <option value="small">Pequeno</option>
            <option value="medium">Medio</option>
            <option value="large">Grande</option>
          </DivSelect>

          <DivSelect
            label="ESPECIE"
            placeholder="qualquer"
            name="species="
            error={""}
            setSelect={setSpecies}
          >
            <option value="cat">Gato</option>
            <option value="dog">Cachorro</option>
          </DivSelect>

          <DivSelect
            label="SEXO"
            type="text"
            placeholder="qualquer"
            name="sex="
            error={""}
            setSelect={setSex}
          >
            <option value="f">Femea</option>
            <option value="m">Macho</option>
          </DivSelect>
        </div>
        {/* mobile */}
        <button onClick={onOpen}>
          <img src={iconFilter} alt="icon filter" /> Pesquisar por filtro
        </button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          // bgColor="#FFEBC5"
          // finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bgColor="#FFEBC5">
            <DrawerHeader
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              color="var(--color-first)"
            >
              Pesquisar por Filtro
              <DrawerCloseButton />
            </DrawerHeader>

            <DrawerBody
              display="flex"
              flexDirection="column"
              w="100%"
              pl="15px"
            >
              <div>
                <div className="inputDiv">
                  <label>NOME</label>
                  <input
                    type="search"
                    placeholder="Pesquise por nome"
                    onChange={(e) => getName(e.target.value)}
                  />
                </div>
                <DivSelect
                  label="PORTE"
                  placeholder="qualquer"
                  name="size="
                  error={""}
                  setSelect={setSizes}
                >
                  <option value="small">Pequeno</option>
                  <option value="medium">Medio</option>
                  <option value="large">Grande</option>
                </DivSelect>

                <DivSelect
                  label="ESPECIE"
                  placeholder="qualquer"
                  name="species="
                  error={""}
                  setSelect={setSpecies}
                >
                  <option value="cat">Gato</option>
                  <option value="dog">Cachorro</option>
                </DivSelect>

                <DivSelect
                  label="SEXO"
                  type="text"
                  placeholder="qualquer"
                  name="sex="
                  error={""}
                  setSelect={setSex}
                >
                  <option value="f">Femea</option>
                  <option value="m">Macho</option>
                </DivSelect>
              </div>
            </DrawerBody>

            <DrawerFooter>
              {/* <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button> */}
              {/* <Button colorScheme="blue">Save</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ContentFiltro>
      <ContentList>
        <ListCard listPets={listpets} isAdote />
      </ContentList>
    </ContainerTotal>
  );
};

export default Adote;

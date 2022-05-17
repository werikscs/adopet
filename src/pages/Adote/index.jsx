import { useEffect } from "react";
import { useState } from "react";

import DivSelect from "../../components/DivSelect";
import ListCard from "../../components/ListCard";

import api from "../../services/api";

import { Container, ContentTotal, ContentFiltro, ContentList } from "./styles";
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
import InputSeach from "../../components/inputSeach";

const Adote = () => {
  const [sex, setSex] = useState("");
  const [species, setSpecies] = useState("");
  const [size, setSizes] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    filters();
  }, [sex, name, size, species]);

  const [listpets, setListpets] = useState([]);

  const filters = () => {
    api.get(`/animals?${name}${sex}${species}${size}`).then((res) => {
      console.log(res.data);
      setListpets(res.data);
    });
  };

  // chakra
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef()

  return (
    <Container>
      <ContentTotal>
        <ContentFiltro>
          <div>
            <h2>
              <img src={iconFilter} alt="icon filter" /> Pesquisar por filtro
            </h2>
            <InputSeach setName={setName} />
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
            // finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bgColor="var(--color-second)">
              <DrawerHeader
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-around"
                color="var(--color-first)"
                fontWeight="600"
                fontSize="1.4rem"
                borderBottomColor="var(--color-first)"
                borderBottomWidth="1px"
                pb="10px"
                pt="10px"
              >
                <img src={iconFilter} alt="icon filter" /> Pesquisar por Filtro
                <DrawerCloseButton />
              </DrawerHeader>

              <DrawerBody
                display="flex"
                flexDirection="column"
                w="100%"
                pl="15px"
                // overflowY="scroll"
              >
                <div>
                  <InputSeach setName={setName} />
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

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </ContentFiltro>
        <ContentList>
          <ListCard listPets={listpets} isAdote />
        </ContentList>
      </ContentTotal>
    </Container>
  );
};

export default Adote;

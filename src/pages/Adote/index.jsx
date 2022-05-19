import { useEffect } from "react";
import { useState } from "react";

import DivSelect from "../../components/DivSelect";
import ListCard from "../../components/ListCard";
import FooterChat from "../../components/footer-Chat";

import api from "../../services/api";

import { Container, ContentTotal, ContentFiltro, ContentList } from "./styles";
import iconFilter from "../../assets/filterIcon.svg";
import petSad from "../../assets/sadDog.jpeg";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  ChakraProvider,
  Spinner,
} from "@chakra-ui/react";
import InputSeach from "../../components/inputSeach";

const Adote = () => {
  const [loading, setLoading] = useState(true);
  const [sex, setSex] = useState("");
  const [species, setSpecies] = useState("");
  const [size, setSizes] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    filters();
  }, [sex, name, size, species]);

  const [listpets, setListpets] = useState([]);

  const filters = () => {
    setLoading(true);
    api.get(`/animals?${name}${sex}${species}${size}`).then((res) => {
      setListpets(res.data);
      setLoading(false);
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const resetFilter = () => {
    onOpen();
    setName("");
    setSex("");
    setSizes("");
    setSpecies("");
  };

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

          <button onClick={() => resetFilter()}>
            <img src={iconFilter} alt="icon filter" /> Pesquisar por filtro
          </button>
          <ChakraProvider>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
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
                  borderBottomWidth="1px"
                  pb="10px"
                  pt="10px"
                >
                  <img src={iconFilter} alt="icon filter" /> Pesquisar por
                  Filtro
                </DrawerHeader>

                <DrawerBody
                  display="flex"
                  flexDirection="column"
                  w="100%"
                  pl="15px"
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

                <DrawerFooter>
                  <Button
                    variant="solid"
                    mr={3}
                    size="lg"
                    color="#ffffff"
                    bg="var(--color-first)"
                    onClick={onClose}
                  >
                    Voltar
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </ChakraProvider>
        </ContentFiltro>
        <ContentList>
          {loading ? (
            <div>
              <ChakraProvider>
                <Spinner w="200px" h="200px" color="var(--color-first)" />
              </ChakraProvider>
            </div>
          ) : listpets.length > 0 ? (
            <ListCard listPets={listpets} isAdote />
          ) : (
            <div>
              <img src={petSad} alt="pet triste" />
              <h2>
                Não encontramos nenhum pet para adoção que atenda aos filtros
                selecionados.
              </h2>
            </div>
          )}
        </ContentList>
      </ContentTotal>
      <FooterChat />
    </Container>
  );
};

export default Adote;

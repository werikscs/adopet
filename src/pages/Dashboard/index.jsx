import { useContext, useEffect } from "react";
import { useState } from "react";

import DivSelect from "../../components/DivSelect";
import ButtonComponent from "../../components/Button";

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
import { UserContext } from "../../providers/User";
import ListCardDashboard from "../../components/ListCardDashboard";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [sex, setSex] = useState("");
  const [species, setSpecies] = useState("");
  const [size, setSizes] = useState("");
  const [name, setName] = useState("");

  const history = useHistory();

  const { userData } = useContext(UserContext);

  useEffect(() => {
    filters();
  }, [sex, name, size, species, userData]);

  const [listpets, setListpets] = useState([]);

  const filters = () => {
    setLoading(true);
    api
      .get(`/644/animals?userId=${userData.id}&${name}${sex}${species}${size}`)
      .then((res) => {
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
          <div className="new-pet">
            <h1>Meus Pets</h1>
            <ButtonComponent
              orangeSchema
              onClick={() => history.push("/user/doe")}
            >
              Cadastrar Pet
            </ButtonComponent>
          </div>
          {loading ? (
            <div>
              <ChakraProvider>
                <Spinner w="200px" h="200px" color="var(--color-first)" />
              </ChakraProvider>
            </div>
          ) : listpets.length > 0 ? (
            <ListCardDashboard listPets={listpets} isAdote />
          ) : (
            <div className="pet-not-found">
              <img src={petSad} alt="pet triste" />
              <h2>Vocês ainda não cadastrou nenhum pet.</h2>
            </div>
          )}
        </ContentList>
      </ContentTotal>
    </Container>
  );
};

export default Dashboard;

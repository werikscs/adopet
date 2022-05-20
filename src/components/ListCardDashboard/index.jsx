import deleteImg from "../../assets/Trash.svg";
import editImg from "../../assets/Edit_fill.svg";

import { useHistory } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  ChakraProvider,
  useDisclosure,
} from "@chakra-ui/react";

import ButtonOutlined from "../ButtonOutlined";
import Button from "../../components/Button";

import { Li, Ul } from "./styles";

import api from "../../services/api";

import { toast } from "react-toastify";
import { useState } from "react";

const ListCardDashboard = ({ listPets }) => {
  const history = useHistory();

  const [petId, setPetId] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const userInfoLocalStorage = JSON.parse(localStorage.getItem("infoUser"));

  const deletePet = (id) => {
    api
      .delete(`/644/animals/${id}`, {
        headers: {
          Authorization: `Bearer ${userInfoLocalStorage.token}`,
        },
      })
      .then((res) => {
        onClose();
        toast.success("Pet Excluído!");
        history.push(`/adote`);
      })
      .catch((err) => {
        toast.error("Ops! Houve algum erro");
      });
  };

  return (
    <Ul>
      {listPets.map((pet) => {
        return (
          <Li key={pet.id}>
            <figcaption>
              <img src={pet.img} alt="" />
            </figcaption>
            <h1>{pet.name}</h1>
            <div>
              <img
                src={editImg}
                alt=""
                onClick={() => history.push(`/user/pet/${pet.id}`)}
              />
              <img
                src={deleteImg}
                alt=""
                onClick={() => {
                  setPetId(pet.id);
                  onOpen();
                }}
              />
            </div>
          </Li>
        );
      })}

      <ChakraProvider resetCSS={false}>
        <AlertDialog isOpen={isOpen} l onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent
              m="9rem 1rem"
              fontFamily="'Baloo Chettan 2', cursive">
              <AlertDialogHeader
                fontWeight="bold"
                bgColor="var(--color-icons)"
                color="var(--color-seven)"
                fontSize="1.3rem"
                borderTopRightRadius="6px"
                borderTopLeftRadius="6px">
                Deletar
              </AlertDialogHeader>

              <AlertDialogBody>
                Tem certeza que deseja deletar esse Pet ? Você não pode desfazer
                esta ação depois.
              </AlertDialogBody>

              <AlertDialogFooter display="flex" justifyContent="space-between">
                <ButtonOutlined onClick={onClose}>Cancel</ButtonOutlined>
                <Button
                  colorScheme="red"
                  onClick={() => deletePet(petId)}
                  ml={3}
                  orangeSchema>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </ChakraProvider>
    </Ul>
  );
};

export default ListCardDashboard;

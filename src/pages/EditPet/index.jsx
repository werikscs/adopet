import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import api from "../../services/api";

import Button from "../../components/Button";
import ButtonOutlined from "../../components/ButtonOutlined";
import InputTextArea from "../../components/InputTextArea";
import InputInternal from "../../components/InputInternal";

import * as S from "./styles";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  ChakraProvider,
} from "@chakra-ui/react";

import { toast } from "react-toastify";

const EditPet = () => {
  const [dataPet, setDataPet] = useState({});

  const params = useParams();
  const petId = Number(params.id);

  const history = useHistory();

  const userInfoLocalStorage = JSON.parse(localStorage.getItem("infoUser"));

  const getAnimalById = (animalId) => {
    api.get(`/644/animals/${animalId}`).then((res) => setDataPet(res.data));
  };

  useEffect(() => {
    getAnimalById(petId);
  }, []);

  const formSchema = yup.object().shape({
    img: yup
      .string()
      .required("Campo Obrigatório!")
      .matches(
        /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)($|\?.*$)/,
        "Precisar ser uma URL"
      ),
    moreInfo: yup.string().required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    patchPet(data);
  };

  const patchPet = (dataBody) => {
    api
      .patch(`/644/animals/${petId}`, dataBody, {
        headers: {
          Authorization: `Bearer ${userInfoLocalStorage.token}`,
        },
      })
      .then((res) => {
        toast.success("Alterações Salvas!");
        history.push(`/adote/${petId}`);
      })
      .catch((err) => {
        toast.error("Ops! Houve algum erro");
      });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const deletePet = () => {
    api
      .delete(`/644/animals/${petId}`, {
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
    <S.GenericContainer>
      <S.Main>
        {dataPet.id && <h1>{dataPet.name}</h1>}

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          {dataPet.id && (
            <InputInternal
              text={dataPet.img}
              label="Link da imagem"
              type="text"
              placeholder="Link"
              name="img"
              register={register}
              error={errors.img?.message}
            />
          )}

          {dataPet.id && (
            <InputTextArea
              text={dataPet.moreInfo || ""}
              cols="30"
              rows="10"
              label="Outras informações"
              placeholder="Conte-nos um pouco mais sobre o seu bichinho."
              name="moreInfo"
              register={register}
              error={errors.moreInfo?.message}
            />
          )}

          <S.DivButtons>
            <ButtonOutlined type="button" callback={() => history.goBack()}>
              voltar
            </ButtonOutlined>

            <ButtonOutlined type="button" callback={onOpen}>
              Excluir
            </ButtonOutlined>

            <ChakraProvider resetCSS={false}>
              <AlertDialog isOpen={isOpen} l onClose={onClose}>
                <AlertDialogOverlay>
                  <AlertDialogContent
                    mt="10rem"
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
                      Tem certeza que deseja deletar esse Pet ? Você não pode
                      desfazer esta ação depois.
                    </AlertDialogBody>

                    <AlertDialogFooter
                      display="flex"
                      justifyContent="space-between">
                      <ButtonOutlined onClick={onClose}>Cancel</ButtonOutlined>
                      <Button
                        colorScheme="red"
                        onClick={() => deletePet()}
                        ml={3}
                        orangeSchema>
                        Delete
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </ChakraProvider>

            <Button type="submit" orangeSchema>
              Salvar
            </Button>
          </S.DivButtons>
        </S.Form>
      </S.Main>
    </S.GenericContainer>
  );
};

export default EditPet;

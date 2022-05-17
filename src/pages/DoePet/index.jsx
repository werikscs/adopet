import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import api from "../../services/api";

import Button from "../../components/Button";
import ButtonOutlined from "../../components/ButtonOutlined";
import InputInternal from "../../components/InputInternal";

import * as S from "./styles";
import InputTextArea from "../../components/InputTextArea";
import DivSelect from "../../components/DivSelect";

const DoePet = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    img: yup.string().required("Campo Obrigatório!"),
    moreInfo: yup.string().required("Campo Obrigatório!"),
    species: yup.string().required("Campo Obrigatório!"),
    sex: yup.string().required("Campo Obrigatório!"),
    size: yup.string().required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    console.log(data);
    // adicionar o userId
    // chamar registerPet
  };

  const registerPet = (dataBody) => {
    api.post("/644/animals", dataBody, {
      headers: {
        Authorization: `Bearer ${"token"}`,
      },
    });
  };

  return (
    <S.GenericContainer>
      <S.Main>
        <h1>Doe um Pet</h1>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <InputInternal
            label="Nome"
            type="text"
            placeholder="Nome do Pet"
            name="name"
            register={register}
            error={errors.name?.message}
          />
          <InputInternal
            label="Link da imagem"
            type="text"
            placeholder="Link"
            name="img"
            register={register}
            error={errors.img?.message}
          />

          <DivSelect
            label="Porte"
            placeholder="Selecione porte do animal"
            name="size"
            register={register}
            error={errors.size?.message}
            isForm>
            <option value="small">Pequeno</option>
            <option value="medium">Medio</option>
            <option value="large">Grande</option>
          </DivSelect>

          <DivSelect
            label="Tipo"
            placeholder="Selecione tipo do animal"
            name="species"
            register={register}
            error={errors.species?.message}
            isForm>
            <option value="cat">Gato</option>
            <option value="dog">Cachorro</option>
          </DivSelect>

          <DivSelect
            label="Sexo"
            type="text"
            placeholder="Selecione sexo do animal"
            name="sex"
            register={register}
            error={errors.sex?.message}
            isForm>
            <option value="f">Femea</option>
            <option value="m">Macho</option>
          </DivSelect>

          <InputTextArea
            cols="30"
            rows="10"
            label="Outras informações"
            placeholder="Conte-nos um pouco mais sobre o seu bichinho."
            name="moreInfo"
            register={register}
            error={errors.moreInfo?.message}
          />

          <S.DivButtons>
            <ButtonOutlined
              type="button"
              callback={() => console.log("voltar")}>
              voltar
            </ButtonOutlined>
            <Button type="submit" orangeSchema>
              Registrar
            </Button>
          </S.DivButtons>
        </S.Form>
      </S.Main>
    </S.GenericContainer>
  );
};

export default DoePet;

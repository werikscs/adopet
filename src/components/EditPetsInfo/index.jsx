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

const EditPetInfo = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    img: yup.string(),
    moreInfo: yup.string(),
  });

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });


  const onSubmit = (data) => {
    console.log(data);
   if (data.img) {
     console.log("Imagem");
     //chamar editPetImg(data.img)
   }
   if (data.moreInfo) {
     console.log("info");
     //chamar editPetInfo(data.morrInfo)
   }

  };

  const editPetImg = (image) => {
    api.post(`/644/animals/${"id"}`, 
        {
            img: image,
        },
        {
            headers: 
                {
                    Authorization: `Bearer ${"token"}`,
                },
        }
    );
  };

  const editPetInfo = (descrition) => {
    console.log(descrition);
    api.post(`/644/animals/${"id"}`, 
        {
            moreInfo: descrition,
        },
        {
            headers: 
                {
                    Authorization: `Bearer ${"token"}`,
                },
        }
    );
  };

  return (
    <S.GenericContainer>
      <S.Main>
        <h1>Edit seu Pet</h1>
  <S.Form onSubmit={handleSubmit(onSubmit)}>

        <InputInternal
          label="Link da imagem"
          type="text"
          placeholder="Link"
          name="img"
          register={register}
          error={errors.img?.message}
        />

        <S.DivButtons>
          <ButtonOutlined
            type="button"
            callback={() => console.log("voltar")}>
            voltar
          </ButtonOutlined>
          <Button type="submit" orangeSchema>
            Alterar
          </Button>
        </S.DivButtons>
      </S.Form>

  <S.Form onSubmit={handleSubmit(onSubmit)}>

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
              Alterar
            </Button>
          </S.DivButtons>
        </S.Form>
      </S.Main>
    </S.GenericContainer>
  );
};

export default EditPetInfo;


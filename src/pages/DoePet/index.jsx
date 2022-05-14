import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import ButtonOutlined from "../../components/ButtonOutlined";
import InputInternal from "../../components/InputInternal";
import {
  DivButtons,
  DivTextArea,
  Form,
  GenericContainer,
  Main,
} from "./styles";

const DoePet = () => {
  const history = useHistory();

  const [textArea, setTextArea] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit massa ipsum, nec aliquet ante varius non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit massa ipsum, nec aliquet ante varius non.Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit massa ipsum, nec aliquet ante varius non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit massa ipsum, nec aliquet ante varius non.Lorem ipsum dolor sit am"
  );

  return (
    <GenericContainer>
      <Main>
        <h1>Doe um Pet</h1>

        <Form>
          <InputInternal label="Nome" type="text" placeholder="Nome do Pet" />

          <DivTextArea>
            <label>Outras Informações</label>
            <textarea
              name=""
              cols="30"
              rows="10"
              onChange={(e) => setTextArea(e.target.value)}
              value={textArea}
            />
          </DivTextArea>

          <DivButtons>
            <ButtonOutlined callback={() => console.log("voltar")}>
              voltar
            </ButtonOutlined>
            <Button onClick={() => console.log("Registrar")} orangeSchema>
              Registrar
            </Button>
          </DivButtons>
        </Form>
      </Main>
    </GenericContainer>
  );
};

export default DoePet;

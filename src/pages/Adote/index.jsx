import { useState } from "react";
import DivSelect from "../../components/DivSelect";
import api from "../../services/api";
import { ContainerTotal, ContentFiltro, ContentList } from "./styles";

const Adote = () => {
  const [sex, setSex] = useState("");
  const [species, setSpecies] = useState("");
  const [size, setSizes] = useState("");

  const filtros = () => {
    api.get(`/animals?${sex}${species}${size}`).then((res) => {
      console.log(res.data);
    });
  };

  filtros();
  return (
    <ContainerTotal>
      <ContentFiltro>
        <div>
          <DivSelect
            label="Porte"
            placeholder="qualquer"
            name="size="
            // register={register}
            error={""}
            setSelect={setSizes}
          >
            <option value="small">Pequeno</option>
            <option value="medium">Medio</option>
            <option value="large">Grande</option>
          </DivSelect>

          <DivSelect
            label="Tipo"
            placeholder="qualquer"
            name="species="
            // register={register}
            error={""}
            setSelect={setSpecies}
          >
            <option value="cat">Gato</option>
            <option value="dog">Cachorro</option>
          </DivSelect>

          <DivSelect
            label="Sexo"
            type="text"
            placeholder="qualquer"
            name="sex="
            // register={register}
            error={""}
            setSelect={setSex}
          >
            <option value="f">Femea</option>
            <option value="m">Macho</option>
          </DivSelect>
        </div>
      </ContentFiltro>
      <ContentList></ContentList>
    </ContainerTotal>
  );
};

export default Adote;

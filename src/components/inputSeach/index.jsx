import { ContentInput } from "./styles";

const InputSeach = ({ setName }) => {
  const getName = (value) => {
    const setFilter = "name_like=" + value + "&";

    value ? setName(setFilter) : setName("");
  };

  return (
    <ContentInput>
      <label>NOME</label>
      <input
        type="text"
        placeholder="Pesquise por nome"
        onChange={(e) => getName(e.target.value)}
      />
    </ContentInput>
  );
};

export default InputSeach;

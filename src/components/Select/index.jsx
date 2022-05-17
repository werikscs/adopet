import { Container } from "./style";

const Select = ({ name, register }) => {
  return (
    <Container>
      <select name={name} {...register(name)} id="">
        <option value="Pessoa">Pessoa</option>
        <option value="Instituição">Instituição</option>
      </select>
    </Container>
  );
};

export default Select;

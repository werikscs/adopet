import { Container } from "./style";

const Select = ({ name, register, orangeSchema = false }) => {
  return (
    <Container orangeSchema={orangeSchema}>
      <select name={name} {...register(name)} id="">
        <option value="Pessoa">Pessoa</option>
        <option value="Instituição">Instituição</option>
      </select>
    </Container>
  );
};

export default Select;

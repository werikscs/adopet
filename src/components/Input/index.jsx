import { Container, InputContainer } from "./styles";

const Input = ({
  label,
  type,
  placeholder,
  icon: Icon,
  orangeSchema = false,
  register,
  name,
  error = "",
  ...rest
}) => {
  return (
    <Container>
      <label>
        {label} {!!error && <span> {error}</span>}
      </label>
      <InputContainer isErrored={!!error} orangeSchema={orangeSchema}>
        {Icon && <Icon size={20} />}
        <input type={type} name={name} {...register(name)} {...rest} placeholder={placeholder} />
      </InputContainer>
    </Container>
  );
};

export default Input;

//{...register(`${name}`)}

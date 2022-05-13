import { Container, InputContainer } from "./styles";

const Input = ({
  label,
  icon: Icon,
  orangeSchema = false,
  register,
  name,
  error = "",
  ...rest
}) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> {error}</span>}
      </div>
      <InputContainer isErrored={!!error} orangeSchema={orangeSchema}>
        {Icon && <Icon size={20} />}
        {/* <input {...register(name)} {...rest} /> */}
        <input {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;

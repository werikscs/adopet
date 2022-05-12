import { Container } from "./styles";

const Button = ({ children, orangeSchema = false, ...rest }) => {
  return (
    <Container orangeSchema={orangeSchema} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;

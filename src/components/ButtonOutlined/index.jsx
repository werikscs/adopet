import "./styles";
import { Button } from "./styles";

const ButtonOutlined = ({ callback, children, ...rest }) => {
  return (
    <Button onClick={callback} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonOutlined;

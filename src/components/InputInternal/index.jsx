// Input utilizado onde não for login ou cadastro

import { DivInput } from "./styles";

const InputInternal = ({ label, ...rest }) => {
  return (
    <DivInput>
      <label>{label}</label>
      <input {...rest} />
    </DivInput>
  );
};

export default InputInternal;

// Input utilizado onde não for login ou cadastro

import SpanError from "../SpanError";
import { DivInput } from "./styles";

const InputInternal = ({ label, name, register, error = "", ...rest }) => {
  return (
    <DivInput>
      <label>{label}</label>
      <input {...register(name)} {...rest} />
      {error && <SpanError message={error} />}
    </DivInput>
  );
};

export default InputInternal;

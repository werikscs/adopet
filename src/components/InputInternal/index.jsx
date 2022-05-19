// Input utilizado onde não for login ou cadastro

import { useState } from "react";
import SpanError from "../SpanError";
import { DivInput } from "./styles";

const InputInternal = ({
  label,
  name,
  register,
  error = "",
  text = "",
  ...rest
}) => {
  const [value, setValue] = useState(text);
  return (
    <DivInput>
      <label>{label}</label>
      <input
        {...register(name)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />
      {error && <SpanError message={error} />}
    </DivInput>
  );
};

export default InputInternal;

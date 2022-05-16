import { useState } from "react";
import SpanError from "../SpanError";
import { DivTextArea } from "./styles";

const InputTextArea = ({ label, name, register, error = "", ...rest }) => {
  const [textArea, setTextArea] = useState("");

  return (
    <DivTextArea>
      <label>{label}</label>
      <textarea
        {...register(name)}
        {...rest}
        name="moreInfo"
        onChange={(e) => setTextArea(e.target.value)}
        value={textArea}
      />
      {error && !Boolean(textArea.trim()) && <SpanError message={error} />}
    </DivTextArea>
  );
};

export default InputTextArea;

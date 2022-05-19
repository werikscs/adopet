import { useState } from "react";
import SpanError from "../SpanError";
import { DivTextArea } from "./styles";

const InputTextArea = ({
  label,
  name,
  register,
  error = "",
  text = "",
  ...rest
}) => {
  // console.log(text);
  const [textArea, setTextArea] = useState(text);
  // console.log(textArea);

  return (
    <DivTextArea>
      <label>{label}</label>
      {/* {console.log(text)} */}
      <textarea
        {...register(name)}
        {...rest}
        name="moreInfo"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      {error && !Boolean(textArea.trim()) && <SpanError message={error} />}
    </DivTextArea>
  );
};

export default InputTextArea;

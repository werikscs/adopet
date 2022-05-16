import SpanError from "../SpanError";
import { Divselect } from "./styles";
import { ChakraProvider, Select } from "@chakra-ui/react";

const DivSelect = ({
  children,
  label,
  name,
  register,
  placeholder,
  error,
  isForm = false,
  setSelect,
}) => {
  const filter = (value) => {
    const setFilter = name + value + "&";
    if (!isForm) {
      value ? setSelect(setFilter) : setSelect("");
    }
  };

  return (
    <Divselect isForm={isForm}>
      <label>{label}</label>
      <ChakraProvider>
        <Select
          {...(isForm ? { ...register(name) } : "")}
          placeholder={placeholder}
          bgColor="#fff"
          border="2px"
          borderColor={isForm ? "#FF8E15" : "#fff"}
          h="54px"
          fontSize="1.25rem"
          fontWeight="600"
          color="rgba(51,52,55,0.6)"
          _hover={{
            borderColor: "#FF8E15",
          }}
          _focus={{
            borderColor: "#FF8E15",
          }}
          onChange={(e) => filter(e.target.value)}
        >
          {children}
        </Select>
      </ChakraProvider>
      {error && <SpanError message={error} />}
    </Divselect>
  );
};

export default DivSelect;

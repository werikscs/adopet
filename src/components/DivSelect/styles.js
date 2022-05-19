import styled from "styled-components";

export const Divselect = styled.div`
  width: ${(props) => (props.isForm ? "100%" : "90%")};

  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 16px;

  label {
    font-size: ${(props) => (props.isForm ? "1.25rem" : "1.1rem")};
    font-weight: 600;
    font-family: "Baloo Chettan 2", cursive;

    padding-left: 16px;
  }
`;

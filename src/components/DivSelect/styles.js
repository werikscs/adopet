import styled from "styled-components";

export const Divselect = styled.div`
  width: ${(props) => (props.isForm ? "100%" : "90%")};

  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 1.25rem;
    font-weight: 600;

    padding-left: 16px;
  }
`;

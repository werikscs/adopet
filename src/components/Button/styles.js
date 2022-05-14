import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.orangeSchema ? "#FF8E15" : "#FFEBC5")};
  color: ${(props) => (props.orangeSchema ? "#ffffff" : "#FF6853")};

  padding: 4px 16px;

  border-radius: 8px;

  font-size: 1.2rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
`;

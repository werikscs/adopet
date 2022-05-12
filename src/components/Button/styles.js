import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.orangeSchema ? "#FF8E15" : "#FFEBC5")};
  color: ${(props) => (props.orangeSchema ? "#FFEBC5" : "#FF6853")};
  height: 45px;
  width: 50%;
  border-radius: 8px;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin: 15px 0px 3px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

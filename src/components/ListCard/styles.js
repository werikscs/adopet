import styled from "styled-components";

export const Ul = styled.ul`
  box-sizing: border-box;
  background-color: var(--color-fifth);
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: "row";
  flex-wrap: ${(props) => (props.isAdote ? "wrap" : "nowrap")};
  align-items: center;
  justify-content: ${(props) => (props.isAdote ? "space-around" : "stretch")};
  overflow-x: ${(props) => (props.isAdote ? "hidden" : "scroll")};
  overflow-y: ${(props) => (props.isAdote ? "scroll" : "hidden")};
  background-color: var(--color-fourth);
  @media (min-width: 1024px) {
    justify-content: space-around;
    max-height: none;
    padding: 2%;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    background-color: ${(props) => (props.isAdote ? "#fff" : "#C4C4C4")};
    border-radius: 20px;
  }
`;

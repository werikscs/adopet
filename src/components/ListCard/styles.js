import styled from "styled-components";

export const Ul = styled.ul`
  width: 100%;
  max-width: 1200px;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: ${(props) => (props.isAdote ? "wrap" : "nowrap")};
  justify-content: ${(props) => (props.isAdote ? "space-around" : "stretch")};
  padding: 16px;

  overflow-x: ${(props) => (props.isAdote ? "hidden" : "scroll")};
  overflow-y: ${(props) => (props.isAdote ? "scroll" : "hidden")};

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: stretch;

    overflow-y: ${(props) => (props.isAdote ? "scroll" : "hidden")};
    overflow-x: hidden;

    background-color: ${(props) =>
      props.isAdote ? "#fff" : "var(--color-bg-homept1)"};
  }
`;

import styled from "styled-components";

export const Ul = styled.ul`
  width: 100%;
<<<<<<< HEAD
  max-width: 1200px;
=======
  max-width: 1440px;
>>>>>>> 621edb3ccca5da628ffb734a5cc8f36cea024ee7
  height: 100%;
  /* min-height: 400px;
  max-height: 400px; */

  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: ${(props) => (props.isAdote ? "wrap" : "nowrap")};
  justify-content: ${(props) => (props.isAdote ? "space-around" : "stretch")};
  padding: 16px;

  overflow-x: ${(props) => (props.isAdote ? "hidden" : "scroll")};
  overflow-y: ${(props) => (props.isAdote ? "scroll" : "hidden")};

  /* background-color: var(--color-fifth); */
<<<<<<< HEAD
  /* background-color: var(--color-fourth); */
=======
  background-color: var(--color-fourth);
>>>>>>> 621edb3ccca5da628ffb734a5cc8f36cea024ee7

  @media (min-width: 1024px) {
    /* max-height: none; */
    /* padding: 2%; */
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;

    overflow: hidden;

    background-color: ${(props) =>
      props.isAdote ? "#fff" : "var(--color-bg-homept1)"};
    /* border-radius: 20px; */
  }
`;

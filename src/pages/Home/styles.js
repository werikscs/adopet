import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  /* max-width: 1440px; */

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  position: fixed;
  top: 100px;

  overflow-y: auto;

  background-color: rosybrown;

  /* background: url(${imgBg});
  background-color: rgba(255, 255, 255, 0.5); */
`;

export const ContainerListPets = styled.div`
  width: 100%;
  max-width: var(--max-width);

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;

  h2 {
    font-size: 1.25rem;
    padding-bottom: 16px;
  }

  > div {
    background-color: var(--color-bg-homept1);
    width: 100%;
    max-width: 1440px;
    background-color: var(--color-bg-homept1);

    ul {
      max-width: 1250px;
      gap: 16px;
    }

    /* background-color: var(--color-bg-homept1); */

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: 1.6rem;
      padding-bottom: 16px;
    }
  }
`;

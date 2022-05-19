import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: var(--max-width);
  height: 100%;
  max-height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background-color: var(--color-bg-homept1);

  div {
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    max-width: 300px;

    h1 {
      font-size: 1.25rem;
      text-align: center;
    }

    button {
      font-size: 1.2rem;

      width: 180px;
      height: 40px;
    }

    z-index: 10;
  }

  figcaption {
    max-height: 250px;

    img {
      display: block;

      width: 100%;
      max-height: 250px;

      object-fit: cover;

      opacity: 0.25;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 0 32px;
    padding-bottom: 0;
    max-height: 450px;

    div {
      position: static;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 16px;

      max-width: 450px;

      h1 {
        font-size: 1.6rem;
        text-align: left;
      }

      button {
        font-size: 1.65rem;

        width: 230px;
        height: 50px;
      }

      z-index: 10;
    }

    figcaption {
      max-height: 450px;

      img {
        display: block;

        width: 100%;
        max-height: 450px;

        object-fit: cover;

        opacity: 1;
      }
    }
  }
`;

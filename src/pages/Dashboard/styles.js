import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: rosybrown;

  position: fixed;
  top: 100px;

  overflow: initial;

  position: relative;
`;

export const ContentTotal = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-end;
    position: relative;
    max-width: 1440px;
  }
`;

export const ContentFiltro = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  position: fixed;
  z-index: 10;

  background-color: white;

  border-bottom: 2px solid white;

  @media (min-width: 1024px) {
    width: 30%;
    max-width: 425px;
    left: 0;
    position: absolute;
    background-color: transparent;
    padding-right: 16px;
    padding-top: 16px;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-second);
    width: 90%;
    border-radius: 10px;
    @media (max-width: 1023px) {
      display: none;
    }

    > h2 {
      color: var(--color-first);

      font-weight: 600;
      font-family: "Baloo Chettan 2", cursive;
      font-size: 1.35rem;

      height: 50px;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      border-bottom: 1px solid var(--color-first);

      padding: 4px;

      > img {
        margin-right: 10px;
      }
    }
  }
  button {
    color: white;
    background-color: var(--color-first);
    font-weight: 600;
    font-family: "Baloo Chettan 2", cursive;
    font-size: 1.5rem;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 10px; */
    @media (min-width: 1024px) {
      display: none;
      border-radius: 10px;
    }

    > img {
      margin-left: 16px;
      margin-right: 10px;
      filter: invert(0%) sepia(35%) saturate(0%) hue-rotate(200deg)
        brightness(102%) contrast(1000%);
    }
  }
`;

export const ContentList = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 16px;
  padding-top: 34px;

  border-radius: 8px;

  .new-pet {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 16px;

    height: 50px;

    padding: 0 16px;
    /* margin-bottom: 16px; */

    border-bottom: 1px solid var(--color-first);

    background-color: var(--color-first);

    @media screen and (min-width: 1024px) {
      border-radius: 8px 8px 0 0;
    }

    .pet-not-found {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding-top: 16px;

      img {
        width: fit-content;
      }
    }

    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
    }

    button {
      font-size: 1rem;
      padding: 4px 8px;
      height: 35px;
      border: 2px solid white;
    }
  }

  @media (min-width: 1024px) {
    /* width: 100%; */
    max-width: 1440px;

    padding-top: 0px;

    width: 70%;

    > ul {
      width: 100%;
      max-width: 100%;
    }

    > ul li {
      margin: 0;
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 20px; */

    > img {
      width: 200px;
      height: 200px;
    }
    > h2 {
      width: 300px;
      text-align: center;
      color: var(--color-first);
      font-weight: 600;
      font-family: "Baloo Chettan 2", cursive;
      font-size: 1.5rem;
    }
  }
`;

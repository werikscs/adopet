import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  /* height: 80vh; */

  /* padding-top: 100px; */

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

  /* padding-top: 490px;
  padding-bottom: 100px;

  @media screen and (min-width: 466px) {
    padding-top: 0px;
    padding-bottom: 0px;
  } */

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

  max-width: 618px;

  display: flex;
  flex-direction: column;

  align-items: center;

  position: fixed;
  z-index: 10;

  background-color: var(--color-fourth);
  border: 1px solid var(--color-fourth);
  /* padding-top: 2rem; */
  padding: 16px;
  @media (min-width: 1024px) {
    width: 30%;
    max-width: 425px;
    left: 0;
    position: absolute;
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
    color: var(--color-first);
    background-color: var(--color-second);
    font-weight: 600;
    font-family: "Baloo Chettan 2", cursive;
    font-size: 1.5rem;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    @media (min-width: 1023px) {
      display: none;
    }

    > img {
      margin-left: 16px;
      margin-right: 10px;
    }
  }
`;

export const ContentList = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  /* max-width: 600px; */
  /* margin-top: 1rem; */

  display: flex;
  justify-content: center;

  padding-top: 82px;
  /* padding-bottom: 100px; */

  /* padding-top: 55px; */

  > ul {
    /* justify-content: cen; */
    gap: 16px;

    height: fit-content;

    max-width: calc(206px * 3);

    overflow: hidden;

    padding-top: 0;
  }

  > ul li {
    margin: 0;
    box-shadow: none;
  }
  @media (min-width: 1024px) {
    /* width: 100%; */
    max-width: 1440px;

    padding-top: 16px;

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
    padding: 20px;

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

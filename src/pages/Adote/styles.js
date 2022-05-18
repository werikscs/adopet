import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* height: 80vh; */

  /* padding-top: 100px; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: rosybrown;

  position: fixed;
  top: 100px;

  overflow-y: auto;
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
    justify-content: space-around;
    max-width: 1440px;
  }
`;

export const ContentFiltro = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;

  align-items: center;

  /* position: fixed;
  top: 100px;
  z-index: 10; */

  background-color: white;
  /* padding-top: 2rem; */
  padding: 16px 0;
  @media (min-width: 1024px) {
    max-width: 30%;
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
      font-size: 1.5rem;
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid var(--color-first);

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
    width: 90%;
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
  /* max-width: 600px; */
  /* margin-top: 1rem; */

  display: flex;
  justify-content: center;

  padding-bottom: 100px;

  /* padding-top: 55px; */

  > ul {
    /* justify-content: cen; */
    gap: 16px;

    max-width: calc(206px * 3);

    overflow: hidden;

    padding-top: 0;
  }
  @media (min-width: 1024px) {
    /* width: 100%; */
    max-width: 1440px;

    padding-top: 16px;

    > ul {
      width: 100%;
      max-width: 70%;
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

import styled from "styled-components";

export const ContainerTotal = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
    max-width: 1440px;
  }
`;

export const ContentFiltro = styled.div`
  width: 100%;
  display: flex;
  max-width: 500px;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  @media (min-width: 1024px) {
    width: 32%;
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
  max-width: 600px;
  margin-top: 1rem;
  @media (min-width: 1024px) {
    width: 66%;
    max-width: 1440px;
  }
`;

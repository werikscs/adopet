import styled from "styled-components";

export const ContainerTotal = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ContentFiltro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  @media (min-width: 1023px) {
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
      border-bottom: 1px solid var(--color-first);
      margin-bottom: 16px;

      > img {
        margin-left: 16px;
        margin-right: 10px;
      }
    }
    > div {
      width: 90%;
      display: flex;
      flex-direction: column;
      padding-bottom: 10px;
      height: 100px;
      justify-content: space-between;
      > label {
        padding-left: 16px;
        font-weight: 600;
        font-size: 1.1rem;
      }
      > input {
        width: 100%;
        height: 54px;
        border-radius: 5px;
        border: 2px solid transparent;

        &:hover {
          border: 2px solid var(--color-first);
        }
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
  margin-top: 1rem;
  @media (min-width: 1023px) {
    width: 66%;
  }
`;

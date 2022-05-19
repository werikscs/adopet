import styled from "styled-components";

export const GenericContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: rosybrown;

  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  width: 90%;
  max-width: 768px;
  min-width: var(--min-width);
  height: fit-content;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;

  background-color: var(--color-second-50);

  footer {
    width: 100%;
    height: 20px;
    background-color: transparent;
  }
`;

export const Figcaption = styled.figcaption`
  width: 100%;
  max-width: 768px;
  min-height: 220px;

  img {
    display: block;

    width: 100%;

    object-fit: cover;

    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 768px;

    img {
      display: block;

      width: 100%;
      height: 450px;
    }
  }
`;

export const DivMoreImgs = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  gap: 16px;

  overflow-x: auto;

  img {
    width: 72px;
    height: 72px;

    object-fit: cover;

    border-radius: 8px;

    cursor: pointer;

    :hover {
      filter: brightness(0.9);
    }
  }
`;

export const DivInfoUser = styled.div`
  width: 100%;

  display: flex;
  gap: 12px;

  img {
    width: 50px;
    height: 50px;

    border-radius: 8px;

    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h5 {
      font-size: 1.25rem;

      color: var(--color-title);
    }

    h6 {
      font-size: 1rem;

      color: var(--color-title-50);

      margin-top: -10px;
    }
  }
`;

export const DivInfoPet = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 56px;

  h1 {
    font-size: 2rem;
    text-transform: capitalize;
  }

  h2 {
    font-size: 1.25rem;
  }

  span {
    font-size: 1.25rem;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  padding: 16px 0;

  width: 100%;
  max-width: 768px;

  background-color: var(--color-second-50);

  button:nth-child(2) {
    margin-left: auto;
  }
`;

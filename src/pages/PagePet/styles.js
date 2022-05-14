import styled from "styled-components";

export const GenericContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: var(--color-second-50);

  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 768px;
  min-width: var(--min-width);

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;

  background-color: var(--color-second-50);
`;

export const Figcaption = styled.figcaption`
  width: 100%;

  img {
    display: block;

    width: 100%;
    max-width: 768px;

    object-fit: cover;

    border-radius: 8px;
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
  }
`;

export const DivInfoUser = styled.div`
  width: 100%;

  display: flex;
  gap: 12px;

  img {
    width: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 1.25rem;

      color: var(--color-title);
    }

    h3 {
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

  span {
    font-size: 1rem;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  bottom: 0;
  left: 0;

  padding: 16px;

  width: 100%;
  max-width: 768px;

  background-color: var(--color-second-50);
`;

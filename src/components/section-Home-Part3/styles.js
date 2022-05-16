import styled from "styled-components";
import test from "../../assets/circuloImg.png";

export const ContainerHowItWork = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px;

  h2 {
    font-size: 1.25rem;
    padding: 0 16px 16px;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 1.6rem;
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }
`;
export const ContentHowItWork = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10%;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10%;

    @media (min-width: 768px) {
      width: 40%;

      align-items: center;
      flex-direction: column;
    }

    @media (min-width: 1024px) {
      width: 200px;

      align-items: center;
      flex-direction: column;
    }

    > p {
      width: 100%;
      max-width: 200px;

      text-align: justify;

      font-size: 0.9rem;

      @media (min-width: 1024px) {
        width: 100%;

        padding-top: 0.5rem;

        font-size: 1.2rem;
      }
    }
  }
`;

export const CircleHowItWork = styled.div`
  width: 100px;
  height: 100px;

  background-image: url(${test});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 150px;
    height: 150px;
  }

  img {
    width: 80%;
    height: 80%;
  }
`;

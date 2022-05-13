import styled from "styled-components";
import test from "../../assets/circuloImg.png";

export const ContainerHowItWork = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;

  h2 {
    padding-bottom: 1.5rem;
  }
`;
export const ContentHowItWork = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  > div {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding-bottom: 1rem;
    align-items: center;
    @media (min-width: 1024px) {
      align-items: center;
      flex-direction: column;
      width: 200px;
    }

    > p {
      width: 40%;
      text-align: center;
      font-size: 0.8rem;
      @media (min-width: 1024px) {
        padding-top: 0.5rem;
        width: 100%;
        font-size: 1rem;
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

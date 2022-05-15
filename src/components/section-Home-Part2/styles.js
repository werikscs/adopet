import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 599px) {
    width: 50%;
    margin: 0 auto;
    margin-top: 15px;
    border-radius: 5px;
    background: var(--input-background-color-secondary);
    border: 2px solid black;
  }
`;

export const Figure = styled.div`
  img {
    width: 40vw;
    border-top-left-radius: 35px;
    border-bottom-right-radius: 35px;
    box-shadow: 6px 6px antiquewhite;
    height: auto;
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
  }
  @media (max-width: 599px) {
    display: none;
  }
  @media (min-width: 600px) {
    margin-top: 60px;
  }
  @media (min-width: 720px) {
    margin-top: 60px;
  }
  @media (min-width: 880px) {
    margin-top: 0px;
  }
  @media (min-width: 1100px) {
    margin-left: 70px;
    margin-right: 30px;

    img {
      width: 520px;
      height: 410px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-right: 15px;
  margin-left: 15px;
  p {
    color: var(--color-text);
    font-size: 12px;
  }
  @media (min-width: 600px) {
    p {
      width: 80%;
      font-size: 12px;
      max-width: 325px;
    }
  }
  @media (min-width: 720px) {
    max-width: 400px;

    p {
      font-size: 13px;
    }
  }
  @media (min-width: 1100px) {
    p {
      font-size: 15px;
      max-width: 600px;
    }
  }
  @media (min-width: 1360px) {
    max-width: 740px;
    p {
      font-size: 20px;
    }
  }
`;

export const ContentTitle = styled.div`
  margin-top: 15px;
  margin-bottom: 12px;
  h3 {
    font-size: 15px;
  }
  @media (min-width: 600px) {
    h3 {
      font-size: 18px;
      font-weight: bold;
    }
  }
  @media (min-width: 720px) {
    h3 {
      font-size: 20px;
      font-weight: bold;
    }
  }
  @media (min-width: 1100px) {
    h3 {
      font-size: 21px;
    }
  }
  @media (min-width: 1360px) {
    margin-left: 30px;
    margin-right: 70px;
    max-width: 740px;

    h3 {
      font-size: 31px;
      margin-left: -25px;
    }
  }
`;

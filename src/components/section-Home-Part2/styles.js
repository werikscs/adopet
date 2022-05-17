import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  justify-content: center;

  padding: 0 16px;
  padding-top: 16px;

  background-color: white;

  /* @media (min-width: none;: 599px) {
    width: 100%;
    margin: 0 auto;
    margin-top: 15px;
    border-radius: 5px;
    background: var(--input-background-color-secondary);
    border: 2px solid black;
  } */

  @media screen and (min-width: 1024px) {
    justify-content: center;
    gap: 70px;

    padding-top: 32px;
  }
`;

export const Figure = styled.div`
  display: none;

  width: 50%;
  max-width: 520px;

  img {
    object-fit: cover;
    border-top-left-radius: 35px;
    border-bottom-right-radius: 35px;
    /* box-shadow: 6px 6px antiquewhite; */
    /* height: auto;
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px; */
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
  /* @media (max-width: 599px) {
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
  } */
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    width: 100%;

    color: var(--color-text);
    text-align: justify;

    font-size: 0.9rem;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
    max-width: 550px;

    p {
      font-size: 1.2rem;
    }
  }
  /* p {
    width: 80%;
    font-size: 12px;
    max-width: 325px;
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
  } */
`;

export const ContentTitle = styled.div`
  h3 {
    text-align: center;
    font-size: 1.25rem;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 1.6rem;
    }
  }
  /* @media (min-width: 600px) {
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
  } */
`;

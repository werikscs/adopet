import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  top: 100px;
  overflow-y: auto;

  background-color: rosybrown;
`;

export const Section = styled.section`
  width: 100%;
  max-width: var(--max-width);
  height: 100%;
  max-height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background-color: var(--color-bg-homept1);

  div {
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    max-width: 300px;

    h1 {
      font-size: 1.25rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
    }

    z-index: 10;
  }

  figcaption {
    max-height: 250px;

    img {
      display: block;

      width: 100%;
      max-height: 250px;

      object-fit: cover;

      opacity: 0.25;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 0 32px;
    padding-bottom: 0;
    max-height: 450px;

    div {
      position: static;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 16px;

      max-width: 450px;

      h1 {
        font-size: 1.6rem;
        text-align: left;
      }

      p {
        font-size: 1.25rem;
      }

      z-index: 10;
    }

    figcaption {
      max-height: 450px;

      img {
        display: block;

        width: 100%;
        max-height: 450px;

        object-fit: cover;

        opacity: 1;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  justify-content: center;

  padding: 0 16px;
  padding-top: 16px;

  background-color: white;

  @media screen and (min-width: 1024px) {
    justify-content: center;
    padding-top: 32px;
  }
`;

export const Content = styled.div`
  width: 100%;

  p {
    width: 100%;

    color: var(--color-text);
    text-align: center;

    font-size: 0.9rem;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    max-width: 85%;

    p {
      font-size: 1.25rem;
    }
  }
`;

export const ContentTitle = styled.div`
  h3 {
    text-align: center;
    font-size: 1.25rem;
    padding-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 1.6rem;
    }
  }
`;

export const ContainerListOngs = styled.div`
  width: 100%;

  max-width: var(--max-width);

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;

  h2 {
    font-size: 1.25rem;
    padding-bottom: 16px;
  }

  > div {
    width: 100%;
    max-width: 1440px;
    background-color: var(--color-bg-homept1);

    ul {
      max-width: 1250px;
      gap: 16px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: 1.6rem;
      padding-bottom: 16px;
    }
  }
`;

export const ContainerUl = styled.ul`
  width: 100%;
  max-width: 1200px;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: stretch;

    background-color: var(--color-bg-homept1);
  }
`;

export const LiONGs = styled.li`
  list-style: none;
  width: 290px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-top: 12px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: var(--color-second);

  @media (max-width: 1024px) {
    width: 250px;
    height: 280px;
    margin-left: 10px;
    padding: 4px;
  }
  @media (min-width: 1024px) {
    margin: 1%;
  }

  > img {
    width: 290px;
    height: 200px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    object-fit: cover;
    @media (max-width: 1023px) {
      width: 250px;
      height: 235px;
    }
  }

  > div {
    position: relative;
    top: -12px;
    width: 100%;
    height: 105px;
    margin-top: 20px;
    background-color: var(--color-second);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 1023px) {
      width: 250px;
      height: 65px;
      top: -10px;
    }

    h3 {
      color: var(--color-first);
      font-weight: bold;
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
      margin-top: 1rem;
      display: flex;

      text-transform: capitalize;
      @media (max-width: 1023px) {
        font-size: 1.4rem;
        margin-bottom: 0;
        margin-top: 0.6rem;
      }

      > img {
        margin-left: 0.8rem;
        transform: translate(0, 5px);
        width: 18px;
        height: 27px;
        @media (max-width: 1023px) {
          margin-left: 0.8rem;
          height: 24px;
          width: 15px;
        }
      }
    }
  }
`;

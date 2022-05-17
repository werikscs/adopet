import styled, { css } from "styled-components";
export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;

  width: 100%;
  height: 100px;

  background-color: #ffebc5;

  position: fixed;
  top: 0;
  z-index: 99999;

  /* box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.75); */

  .logo--content {
    /* width: 30%; */
    height: 100%;
  }
  .logo--content img {
    width: 100%;
  }

  .burger {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;

    border: none;
    background: none;
  }
  .btn--burger {
    border-top: 4px solid var(--input-background-color-primary);
    width: 40px;
    display: block;
  }
  .btn--burger::after,
  .btn--burger::before {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    background: var(--input-background-color-primary);
    margin-top: 5px;
    transition: ease 0.4s;
    position: relative;
  }
  .burger.active .btn--burger {
    border-top: none;
  }
  .burger.active .btn--burger::before {
    transform: rotate(135deg);
  }
  .burger.active .btn--burger::after {
    transform: rotate(-135deg);
    top: -7px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;

    .logo--content {
      /* width: 30%; */
      height: 100%;
    }
    .logo--content img {
      width: 240px;
      height: 100px;

      object-fit: cover;
    }

    .burger {
      display: none;
    }
  }
`;

export const Content = styled.nav`
  display: block;
  width: 100%;
  height: 0px;

  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;

  background: #ffebc5;

  overflow-y: hidden;
  visibility: hidden;

  transition: ease 0.7s;

  border-top: 1px solid rgba(200, 200, 200, 0.5);

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    gap: 36px;
  }
  li {
    /* padding: 1rem 0;
    margin: 0 1rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  a {
    width: 280px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-size: 1.25rem;
    font-weight: bold;

    text-decoration: none;

    color: var(--color-title);

    gap: 36px;
  }
  a img {
    width: 40px;
    height: 40px;
    margin-left: 50px;
    /* margin-left: 18%; */
  }
  button {
    width: 280px;

    margin: 0 auto;

    background-color: var(--input-background-color-primary);
    color: var(--color-background);
  }
  ${({ handleButton }) =>
    handleButton &&
    css`
      height: 100%;
      max-height: 100vh;
      visibility: visible;
      overflow: hidden;
      padding: 48px 0;
      margin: 0;
    `}

  @media (min-width: 1024px) {
    display: block;

    position: relative;
    top: 0px;
    z-index: 1;

    width: fit-content;
    height: 100px;

    visibility: visible;

    padding: 0;

    a img {
      /* width: 35%;
      height: 28px; */
      display: none;
    }
    ul {
      width: 100%;
      height: 100px;

      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      padding: 0;
      margin: 0;

      gap: 16px;
    }
    li {
      display: block;

      width: fit-content;

      padding: 0;
      margin: 0;
      /* font-size: 0.8rem; */
      /* text-align: center;
      width: fit-content; */

      a {
        width: fit-content;
      }
    }
    button {
      width: 110px;
      height: 50px;
    }
  }
`;

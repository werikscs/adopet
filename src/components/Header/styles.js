import styled, { css } from "styled-components";

export const ExternalContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;

  background-color: #ffebc5;

  position: fixed;
  top: 0;
  z-index: 99999;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 0px 0px;
`;

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;

  width: 100%;
  height: 100px;

  background-color: #ffebc5;

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
    max-width: var(--max-width);

    flex-direction: row;
    justify-content: flex-start;

    margin: 0 auto;
    position: absolute;

    gap: 8px;

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
    gap: 24px;
  }
  li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    order: 1;
  }

  a {
    width: 280px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-size: 1.25rem;
    font-weight: bold;
    font-family: "Hind";

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
    order: ${({ isLogged }) => (isLogged ? 0 : 3)};

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
      overflow-y: scroll;
      padding: 100px 0;
      margin: 0;
    `}

  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-start;

    position: relative;
    top: 0px;
    z-index: 1;

    width: 90%;
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
      order: 0;
      padding: 0;
      margin: 0;
      margin-left: 2px;
      /* font-size: 0.8rem; */
      /* text-align: center;
      width: fit-content; */

      a {
        width: fit-content;
        transition: 0.35s;
      }
      transition: 0.3s ease;
    }
    li:hover {
      a {
        color: var(--color-first);
        transition: 0.35s;
      }
      /* padding: 0px 3px 0px 3px;
      border-radius: 6px;
      background-color: var(--input-background-color-primary);
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
      transition: ease 0.3s;
      a {
        color: #fff;
      } */
    }
    button {
      order: 0;

      margin: 0;
      margin-left: auto;

      width: 110px;
      height: 50px;
    }
  }
`;

export const DivInfoUser = styled.div`
  /* width: 100%; */

  display: flex;
  gap: 12px;

  margin-left: auto;

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

    overflow: hidden;

    h5 {
      font-size: 1.25rem;
      font-weight: 700;

      color: var(--color-title);

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    h6 {
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-title-50);

      margin-top: -10px;
    }
  }

  > button {
    width: fit-content;

    padding: 0 16px;

    font-size: 1.75rem;
    font-weight: bold;
    font-family: "Baloo Chettan 2";

    color: var(--color-first);
    background-color: transparent;
  }

  @media screen and (max-width: 1023px) {
    justify-content: center;
    order: 0;

    width: 100%;

    margin-left: 0;

    padding: 0 0 8px;

    > img {
      margin-left: 60px;
    }

    button {
      margin: 0;
    }
  }
`;

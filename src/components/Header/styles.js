import styled, { css } from "styled-components";
export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ffebc5;
  width: 100%;
  height: 100px;
  box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.75);

  .logo--content {
    width: 30%;
  }
  .logo--content img {
    width: 100%;
  }

  .burger {
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    border: none;
    background: none;
  }
  .btn--burger {
    border-top: 2px solid var(--input-background-color-primary);
    width: 20px;
    display: block;
  }
  .btn--burger::after,
  .btn--burger::before {
    content: "";
    display: block;
    width: 20px;
    height: 2px;
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
    .logo--content {
      width: 15%;
    }
    .logo--content img {
      width: 100%;
    }
    .burger {
      display: none;
    }

    li {
      padding: 0;
      margin: 0;
      text-align: center;
      width: 60%;
    }
  }
`;

export const Content = styled.nav`
  display: block;
  position: absolute;
  top: 100px;
  background: #ffebc5;
  width: 100%;
  height: 0px;
  z-index: 1000;
  overflow-y: hidden;
  visibility: hidden;
  padding: 0;
  transition: ease 0.7s;

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  li {
    padding: 1rem 0;
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  a {
    width: 80%;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    text-decoration: none;
    color: #000;
    font-size: 1rem;
    gap: 4%;
  }
  a img {
    width: 32px;
    height: 28px;
    margin-left: 18%;
  }
  button {
    width: 50%;
    margin: 0 auto;
    margin-top: 4%;
    background-color: var(--input-background-color-primary);
    color: var(--color-background);
  }
  ${(props) =>
    props.handleButton &&
    css`
      height: calc(100vh - 100px);
      visibility: visible;
    `}

  @media (min-width: 1024px) {
    display: block;
    top: 0px;
    width: 100%;
    height: 100px;
    z-index: 1;
    position: relative;
    visibility: visible;
    padding: 0;
    a img {
      width: 35%;
      height: 28px;
    }
    ul {
      width: 90%;
      height: 100px;
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      padding: 0;
      margin: 0;
    }
    li {
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;
      width: 60%;
    }
    button {
      width: 33%;
      margin: 0;
      margin-left: 3%;
    }
  }
`;

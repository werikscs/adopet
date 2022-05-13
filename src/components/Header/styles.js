import styled from "styled-components";
export const Container = styled.header`
  @media (max-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffebc5;
    width: 100%;
    box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.75);

    .logo--content {
      width: 30%;
    }
    .logo--content img {
      width: 100%;
    }
    nav {
      display: block;
      position: absolute;
      top: 60px;
      background: rgba(255, 235, 197, 0.3);
      width: 100%;
      height: 0px;
      z-index: 1000;
      transition: ease 0.7s;
      overflow-y: hidden;
      visibility: hidden;
      padding: 0;
    }
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
    nav a {
      width: 80%;
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      text-decoration: none;
      color: #000;
      font-size: 1rem;
      gap: 4%;
    }
    nav a img {
      width: 35px;
      height: 28px;
      margin-left: 18%;
    }
    nav button {
      width: 40%;
      margin: 0 auto;
      margin-top: 4%;
      background-color: var(--input-background-color-primary);
      color: var(--color-background);
    }
    .active {
      display: block;
      visibility: visible;
      height: calc(100vh - 60px);
      overflow: auto;
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
  }
  @media (min-width: 721px) {
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffebc5;
    height: 15vh;
    width: 100vw;
    box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.75);
    .logo--content {
      width: 15%;
      height: 15vh;
    }
    .logo--content img {
      width: 100%;
      height: 10vh;
    }
    .burger {
      display: none;
    }
    nav {
      visibility: visible;
      display: flex;
    }
    ul {
      width: 200%;
      display: flex;
      gap: 6%;
      align-items: center;
      justify-content: space-between;
      margin-right: 10%;
    }
    li {
      margin-right: 3%;
      font-size: 1rem;
      box-sizing: border-box;
      list-style: none;
      width: 170px;

      text-align: center;
    }
    a {
      width: 100%;
      gap: 6%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
    }
    a img {
      width: 20px;
      height: 20px;
    }
    nav button {
      width: 180px;
      margin-bottom: 2%;
      background-color: var(--input-background-color-primary);
      color: var(--color-background);
    }
  }
`;

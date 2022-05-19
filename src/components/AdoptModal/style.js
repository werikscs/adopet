import styled from "styled-components";

export const Container = styled.div`
  div {
    border-radius: 8px;
    background: var(--color-second);
    color: var(--color-title);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 35%;
    display: flex;
    flex-direction: column;
  }

  header {
    background-color: var(--color-first);
    font-size: 1.25rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding: 10px 20px;
    height: 25%;
    color: #fff;

    button {
      background: none;
      font-size: 1.5rem;
      color: #fff;
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50%;
    padding: 0 30px;

    aside {
      img {
        margin: 0 auto;
        width: 100px;
      }
    }
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }

  @media screen and (min-width: 768px) {
    div {
      width: 60%;
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      width: 40%;
    }
  }

  @media screen and (min-width: 2560px) {
    div {
      width: 25%;
    }
  }

  footer {
    height: 25%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;

    a {
      text-decoration: none;
      color: var(--color-second);
    }
  }
`;

import styled from "styled-components";
import fundoLogin from "../../assets/loginDogs.png";

export const Container = styled.div`
  background-image: url(${fundoLogin});
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50px;

  form {
    margin: 50px 0;
    width: 90%;
    padding: 20px;
    background-color: rgba(255, 198, 74, 0.7);
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    h1 {
      color: #fff;
      font-size: 2rem;
      align-self: center;
      padding-bottom: 30px;
    }

    p {
      font-size: 0.75rem;
    }

    label {
      margin-bottom: -10px;
    }

    h3,
    h4 {
      align-self: center;
      padding-top: 30px;
    }

    h4 {
      color: #fd3700;
    }
  }

  button {
    margin: 30px auto 0;
  }

  @media screen and (min-width: 768px) {
    form {
      width: 50%;
    }
  }

  @media screen and (min-width: 1024px) {
    form {
      width: 35%;
    }
  } ;
`;

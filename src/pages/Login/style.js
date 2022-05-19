import styled from "styled-components";
import fundoLogin from "../../assets/loginDogs.png";

export const ExternalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${fundoLogin});
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  backdrop-filter: blur(7px);

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50px;

  form {
    margin: 50px 0;
    width: 85%;
    max-width: 600px;
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
      color: var(--color-title);
      font-weight: 600;
      font-size: 1.1rem;
    }

    h3,
    h4 {
      align-self: center;
      padding-top: 30px;
    }

    h4 {
      color: #fd3700;
      font-size: 1.1rem;
      padding-top: 25px;
    }
  }

  button {
    margin: 50px auto 0;
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

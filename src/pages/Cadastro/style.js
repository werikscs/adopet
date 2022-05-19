import styled from "styled-components";
import signupDogs from "../../assets/signupDogs.jpg";

export const Container = styled.div`
  background-image: url(${signupDogs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  padding-top: 100px;
  @media (min-height: 850px) {
    height: 100vh;
  }
  form {
    margin: 50px 0;
    max-width: 600px;
    width: 85%;
    padding: 20px;
    background-color: rgba(255, 198, 74, 0.7);
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    h1 {
      color: #fff;
      font-size: 2rem;
      align-self: center;
      padding-bottom: 10px;
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
      padding-top: 20px;
    }

    h4 {
      font-size: 1.1rem;
      color: var(--color-error-form);
    }
  }

  button {
    margin: 20px auto 0;
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

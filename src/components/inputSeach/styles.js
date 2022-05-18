import styled from "styled-components";

export const ContentInput = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  padding-top: 16px;
  height: 120px;
  justify-content: space-between;

  > label {
    padding-left: 16px;
    font-weight: 600;
    font-size: 1.2rem;
    font-family: "Baloo Chettan 2", cursive;
  }
  > input {
    width: 100%;
    height: 54px;
    border-radius: 8px;
    border: 2px solid transparent;
    padding: 16px;

    &::placeholder {
      font-weight: 600;
      font-size: 1.2rem;
      /* padding-left: 16px; */
      font-family: "Baloo Chettan 2", cursive;
      color: var(--color-text);
    }

    &:hover,
    &:focus {
      border: 2px solid var(--color-first);
    }
  }
`;

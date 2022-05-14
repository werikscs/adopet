import styled from "styled-components";

export const GenericContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: var(--color-second-50);

  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 768px;
  min-width: var(--min-width);
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;

  background-color: var(--color-second-50);

  h1 {
    width: 100%;

    text-align: center;

    font-size: 2.25rem;

    color: var(--color-title);

    border-bottom: 1px solid var(--color-title-50);

    padding-bottom: 8px;
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DivTextArea = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 1.25rem;
    font-weight: 600;

    padding-left: 16px;
  }

  textarea {
    resize: none;

    padding: 16px;

    border: 2px solid var(--color-first);
    border-radius: 8px;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 0;

  width: 100%;
  max-width: 768px;

  background-color: var(--color-second-50);
`;

import styled from "styled-components";

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

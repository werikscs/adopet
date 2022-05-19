import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;

  select {
    border-radius: 25px;
    border: none;
    width: 100%;
    height: 45px;
    display: flex;
    transition: 0.4s;
    margin: 10px 0;
    padding-left: 10px;
    color: var(--color-text);
    font-size: 1rem;

    ${(props) =>
      props.orangeSchema
        ? css`
            background: var(--input-background-color-primary);
            color: var(--color-second);
          `
        : css`
            background: #fff9f2;
          `}
  }
`;

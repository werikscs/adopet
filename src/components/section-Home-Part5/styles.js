import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  justify-content: center;

  padding: 0 16px;
  padding-top: 16px;
  padding-bottom: 35px;

  background-color: white;

  @media screen and (min-width: 1024px) {
    justify-content: center;
    gap: 70px;

    padding-top: 32px;
  }
`;

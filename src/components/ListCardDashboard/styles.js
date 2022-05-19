import styled from "styled-components";

export const Ul = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--color-second-50);

  @media screen and (min-width: 1024px) {
  }
`;

export const Li = styled.li`
  width: 100%;
  height: 90px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  list-style-type: none;

  border-bottom: 1px solid #c4bcbc;

  padding: 8px 32px;

  :last-child {
    border-radius: 8px;
  }

  figcaption {
    width: fit-content;
    height: 100%;

    img {
      width: 100%;
      max-width: 90px;

      height: 100%;

      border-radius: 8px;

      object-fit: cover;
    }
  }

  h1 {
    text-transform: capitalize;

    font-size: 1.7rem;
    font-weight: 600;
  }

  div {
    display: flex;
    gap: 16px;

    margin-left: auto;

    img {
      width: 32px;

      cursor: pointer;

      :hover {
        filter: brightness(0.9);
      }
    }
  }
`;

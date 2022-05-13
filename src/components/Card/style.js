import styled from "styled-components";

export const LiCard = styled.li`
  list-style: none;
  width: 280px;
  height: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin: 8px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: var(--color-second);

  > img {
    width: 280px;
    height: 250px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  > div {
    position: relative;
    top: -45px;
    width: 280px;
    height: 150px;
    background-color: var(--color-second);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border-top-left-radius: 60%;
    border-top-right-radius: 60%;

    h3 {
      color: var(--color-first);
      font-weight: bold;
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
      margin-top: 0.8rem;

      > img {
        margin-left: 0.8rem;
        transform: translate(0, 4px);
      }
    }

    span {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--color-title);
    }
  }
`;

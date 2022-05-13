import styled from "styled-components";

export const LiCard = styled.li`
  list-style: none;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin: 8px;

  > img {
    position: absolute;
    width: 300px;
    height: 250px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  > div {
    position: relative;
    top: 185px;
    width: 300px;
    height: 140px;
    background-color: var(--color-second);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;

    h3 {
      color: var(--color-first);
      font-weight: bold;
      font-size: 1.8rem;
      margin-bottom: 1rem;

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

import styled from "styled-components";

export const LiCard = styled.li`
  list-style: none;
  width: 290px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-top: 12px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: var(--color-second);
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
  @media (max-width: 1023px) {
    width: ${(props) => (props.isAdote ? "134px" : "290px")};
    height: ${(props) => (props.isAdote ? "200px" : "320px")};
    margin-left: ${(props) => (props.isAdote ? "0" : "10px")};
  }
  @media (min-width: 1024px) {
    margin: 1%;
  }

  > img {
    width: 290px;
    height: 275px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    @media (max-width: 1023px) {
      width: ${(props) => (props.isAdote ? "134px" : "290px")};
      height: ${(props) => (props.isAdote ? "170px" : "275px")};
    }
  }

  > div {
    position: relative;
    top: -40px;
    width: 290px;
    height: 105px;
    background-color: var(--color-second);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border-top-left-radius: 60%;
    border-top-right-radius: 60%;
    @media (max-width: 1023px) {
      width: ${(props) => (props.isAdote ? "134px" : "290px")};
      height: ${(props) => (props.isAdote ? "80px" : "105px")};
      top: ${(props) => (props.isAdote ? "-25px" : "-40px")};
    }

    h3 {
      color: var(--color-first);
      font-weight: bold;
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
      margin-top: 0.8rem;
      @media (max-width: 1023px) {
        font-size: ${(props) => (props.isAdote ? "1.2rem" : "1.8rem")};
        margin-bottom: ${(props) => (props.isAdote ? "0" : "0.5rem")};
        margin-top: ${(props) => (props.isAdote ? "0" : "0.8rem")};
      }

      > img {
        margin-left: 0.8rem;
        transform: translate(0, 4px);
        width: 18px;
        height: 27px;
        @media (max-width: 1023px) {
          margin-left: ${(props) => (props.isAdote ? "0.5rem" : "0.8rem")};
          heigth: ${(props) => (props.isAdote ? "18px" : "27px")};
          width: ${(props) => (props.isAdote ? "11px" : "18px")};
        }
      }
    }

    h4 {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--color-title);
      @media (max-width: 1024px) {
        font-size: ${(props) => (props.isAdote ? "0.9rem" : "1.2rem")};
      }
    }
  }
`;

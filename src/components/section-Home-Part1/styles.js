import styled from "styled-components";
import dogHome from "../../assets/dogHome.svg";


export const Conteiner = styled.div`

    height: 430px;
    display: flex;
    align-items: stretch;
    background: #C1C1C1;
    justify-content: center;

`;

export const Background = styled.div`


   @media(min-width: 1024px) {
    flex: 1;
    background: url(${dogHome}) no-repeat center, #C1C1C1;

    background-size: 750px 435px;
    
    max-width: 525px;

}
`;

export const Contetnt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width:100%;

    max-width: 345px;
    background: #C1C1C1;
    h1 {
        font-size: 24px;
        margin-left: 135px;
    }

    @media(min-width: 300px) {
        h1 {
            font-size: 19px;
            margin-left: 0px;
        }
    }

    @media(min-width: 600px) {
        h1 {
            margin-left: 0px;
        }
    }
`;



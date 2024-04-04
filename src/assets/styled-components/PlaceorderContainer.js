import styled from "styled-components";

export const PlaceOrderContainer = styled.div`
    postion:relative;
    margin: 2rem 3rem;
    height:400px;
    width:95%;
    @media screen and (max-width:432px) and (min-width:340px){
        margin: 0;
        height:auto;
    }

`;

export const BoxContainer = styled.div`
    position:absolute;
    top:22%; 
    left:25%;
    width:650px;
    height:50%;
    border: 3px solid #E3E3E3;
    box-shadow: 14px 16px 23px 2px rgba(0, 0, 0, 0.11);
    @media screen and (max-width:432px) and (min-width:340px){
        width:360px;
        top:20%; 
        left:7%;
        height:54%;
        border-radius:10px;
    }
`;
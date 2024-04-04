import styled from "styled-components";
import { colors } from "./global/theme";

export const FeedbackButton = styled.button`
  width: 50px;
  height: 3rem;
  border-radius: 50%;
  background-color: ${colors.whitetextcolor};
  box-shadow: 1px 0px 30px 0px #00000040;
  margin:0.5rem;
  right: 4rem;
  bottom: 2.5rem;
  position: fixed;
  z-index: 13;
  @media screen and (max-width:432px) and (min-width:340px){
    bottom:3.8rem;
  }
`;

export const FeedbackBoxContainer =  styled.div`
    width:300px;
    height:280px;
    position:fixed;
    bottom: 5.8rem;
    border-radius:10px;
    right: 4rem;
    z-index:12;
    padding:1.5rem;
    background-color:${colors.whitetextcolor};
    box-shadow: 0px 0px 20px 0px #0000005E;
    @media screen and (max-width:432px) and (min-width:340px){
     width:240px;
     height:240px;
     bottom: 7.5rem;
     right: 2rem;
    }
`;

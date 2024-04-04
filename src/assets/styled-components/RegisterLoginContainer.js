import styled, { css } from "styled-components";
import { colors } from "./global/theme";

export const RegisterLoginWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    max-width: 440px;
    height: auto;
    margin:0.5rem 0.5rem;
    border-radius: 23.2px;  
    border: 1.2px solid ${colors.inputfieldborder};

    @media screen and (min-width: 768px) {
      padding:0.5rem 1.5rem;
    }

    @media screen and (max-width: 767px) {
        border-radius: 5px;   
        padding:0.5rem 1.5rem;
      }

`;

export const FormFieldContainer= styled.div`
    margin: 0.5rem 0rem;
    width: 100%;
    @media screen and (max-width: 767px) {
      margin-top: 0rem;
    }

`;

export const InputField = styled.input`
    width: 100%;
    height: 45px;
    border-radius:8px;
    border: 2px solid ${colors.inputfieldborder};
    padding: 0.5rem;
    margin-top:0.5rem;
    @media screen and (min-width: 768px) {
      height:30px;
  }
    @media screen and (max-width: 768px) {
        height: 30px;
    }
`;

export const SubmitButton = styled.button`
    width:${(props)=>props.hasWidth || `100%`};
    margin:${(props)=>props.hasmargin || `1rem 0rem`};
    text-align: center;
    font-size: ${(props) => props.fontSize || "inherit"};
    font-family:Roboto;
    color: ${(props) => props.color || `${colors.whitetextcolor}`};
    background-color: ${(props) => props.backgroundcolor || `${colors.headerfooterbgcolor}`};
    padding: 0.5rem;
    border: none;
    cursor: pointer;
    border-radius:8px;
    border: ${(props) => props.hasBorder ? `2px solid ${colors.inputfieldborder}` : 'none'};    
 
    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
        margin:0.5rem 0rem;
    }

    @media screen and (max-width:385px){
      font-size:${(props)=>props.androidFontSize};
      margin:0.2rem 0rem;
    }
`;

export const SpanText=styled.span`
font-size: ${(props) => props.fontSize || "inherit"};
  /* Add horizontal lines */
  font-family:Roboto;
  font-weight:400;
  display: flex;
  flex-direction: row;
  margin-bottom:0.5rem;

  &::before,
  &::after {
    content: "";
    width: 120px;
    flex: 1 1;
    border:2px solid ${colors.horizontalLine};
    margin: auto;
  }

  &::before {
    margin-right: 20px;
  }

  &::after {
    margin-left: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px; /* Adjust font size for smaller screens */
    &::before,
    &::after {
      width: 90px; /* Adjust the width of the lines for smaller screens */
    }
  }

  @media screen and (min-width:768px){
    margin:0.5rem;
  }
  
  `;

  export const WelcomeContainer= styled.div`
    width:98%;
    display:flex;
    justify-content:flex-start;
    @media screen and (max-width:431px){
      margin-top:0rem;
    }
  `;
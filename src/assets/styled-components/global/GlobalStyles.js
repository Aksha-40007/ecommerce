import styled,{css} from "styled-components";
import { colors } from "./theme";

export const FlexContainer = styled.div`
  display: flex;
  ${(props) => props.direction && css`flex-direction: ${props.direction};`}
  ${(props) => props.justify && css`justify-content: ${props.justify};`}
  ${(props) => props.align && css`align-items: ${props.align};`}
  ${(props) => props.gap && css`gap: ${props.gap};`}
  ${(props) => props.margin && css`margin: ${props.margin};`}
  ${(props) => props.padding && css`padding: ${props.padding};`}

  @media screen and (max-width:432px){
    gap:0.5rem;
  }

 .toast-container{
  @media screen and (max-width:432px){
    font-size: 14px;
    width:70%;
    margin:2.5rem 6rem;
  }
 }

 .home{
  margin-left:3rem;
  @media screen and (max-width:432px){
    margin-left:0.5rem;
  }
 }
`;

export const Image = styled.img`
    ${(props)=>props.height && css`height:${props.height};`}
    ${(props)=>props.width && css`width:${props.width};`}
    ${(props)=>props.position && css`position:${props.position};`}

    @media screen and (max-width:768px){
      ${(props)=>props.mobileImageWidth && css`width:${props.mobileImageWidth};`}
      ${(props)=>props.mobileImageHeight && css`height:${props.mobileImageHeight};`}
    }
    @media screen and (max-width:432px){
      ${(props)=>props.androidImageWidth && css`width:${props.androidImageWidth};`}
      ${(props)=>props.androidImageHeight && css`height:${props.androidImageHeight};`}
    }

`;

export const StyledText = styled.span`
  font-size: ${(props) => props.fontSize || "inherit"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-family: ${(props) => props.fontFamily || "Roboto"};
  padding: ${(props) => props.padding || "0"};
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

    @media screen and (min-width: 418px) and (max-width:1400px){
      font-size: ${(props) => props.mobileFontSize || props.fontSize || "inherit"};
    }

    @media screen and (max-width:432px){
      font-size:${(props)=>props.androidFontSize};
    }
`;

export const Button = styled.button`
  /* Default styles */
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  font-family:Roboto;
  cursor: pointer;
  text-align:center;

  /* Conditional styles based on props */
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  @media screen and (max-width: 768px) {
    width: ${(props) => props.mobileWidth || props.width || 'auto'};
    height: ${(props) => props.mobileHeight || props.height || 'auto'};
    font-size: ${(props) => props.mobileFontSize || props.fontSize || '1rem'};
    padding: ${(props) => props.mobilePadding || props.padding || '0.5rem 1rem'};
    margin: ${(props) => props.mobileMargin || props.margin || '0'};
  }
`;

export const Select = styled.select`
  width:100px;
  height:2rem;
  padding:0.5rem;
  border:2px solid #BEBEBE;
`;

export const HorizontalLine = styled.div`
  width: 101%;
  height: 2px; 
  background-color: ${(props)=>props.backgroundcolor || `${colors.sortbyborder}`} ; 
  margin: 10px 0; 

  @media screen and (max-width:432px){
    height:3px;
  }
  `;

export const VerticalLine = styled.div`
  width: 2px;
  height: 110%; 
  background-color: ${colors.sortbyborder}; 
  margin: 8px 0.5rem; 

`;
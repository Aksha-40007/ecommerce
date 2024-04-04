import styled,{css} from "styled-components";
import { colors } from "./global/theme";

export const FilterContainer = styled.div`
    width:95%;
    height:2rem;
    margin:0 0 1.5rem 0;
    @media screen and (max-width:432px) and (min-width:340px){
      width:430px;
      height:1.5rem;
      margin:1rem 0 1.5rem 0;
    }
`;

export const SelectButton = styled.button`
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
  @media screen and (max-width: 432px) and (min-width:340px) {
    width: ${(props)=>props.androidwidth||"170px"};
    height: ${(props)=>props.androidheight||"1.8rem"};;
    font-size: 13px;
    border-radius:6px;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  z-index: 120;
  background-color: ${colors.whitetextcolor};
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  list-style-type: none;
  display: none;
  width:${(props)=>props.width||"180px"};
  height:auto;
  display: block;
  top:auto;
  right:${(props)=>props.right || ""};


  @media screen and (max-width:432px) and (min-width:340px) and (max-height:801px) {
    position: absolute;
    left:${(props)=>props.left || '0'};
    right:50%;
    top:auto;
    height:auto;
    width:170px;
    z-index:11;
}

`;


export const DropdownItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  text-align:left;
  &:hover {
      background-color:${colors.blue};
    color: black;
  }
`;

export const DropdownListSelect = styled.option`
  z-index: 10;
  background-color: ${colors.whitetextcolor};
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width:180px;
  height:auto;
  text-align:left;

  @media screen and (max-width:432px){
    max-width:170px;
    height:auto;
    z-index:11;
}
`;


export const FilterImage = styled.img`
    ${(props)=>props.height && css`height:${props.height};`}
    ${(props)=>props.width && css`width:${props.width};`}
    ${(props)=>props.position && css`position:${props.position};`}

    @media screen and (max-width:768px){
      ${(props)=>props.mobileImageWidth && css`width:${props.mobileImageWidth};`}
      ${(props)=>props.mobileImageHeight && css`height:${props.mobileImageHeight};`}
    }
    @media screen and (max-width:431px){
      display:none;
    }

`;

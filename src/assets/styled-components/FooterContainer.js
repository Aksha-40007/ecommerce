import styled from "styled-components";
import { colors } from "./global/theme";

export const FooterContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position: fixed;
  z-index:999;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5%;
  background-color: ${colors.headerfooterbgcolor};
  color: ${colors.whitetextcolor};

  @media screen and (max-width: 768px)
  {
    height:4%;
  }

  @media screen and (max-width: 432px) and (min-width:340px)
  {
    display:none;
  }
`;

export const MobileFooterContainer = styled.div`
  @media screen and (max-width: 432px) and (min-width:340px)
  {
    display:flex;
    justify-content:center;
    align-items:center;
    position: fixed;
    z-index:999;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8%;
    background-color: ${colors.whitetextcolor};
    color: ${colors.whitetextcolor};  
    border-top: 1px solid #ccc; 
  }
`;

export const FooterItemContainer = styled.div`
@media screen and (max-width: 432px) and (min-width:340px)
{
  position: relative;
  z-index:1;
  width: 44px;
  height: 50px;
  text-align: center;
  top:0;
  padding-top:2px;
  margin: 0 1rem;

  ${({ isSelected }) => isSelected && `
    &::after {
      content: '';
      position: absolute;
      top:0;
      left: 0;
      width: 44px;
      height: 4px;
      background-color: ${colors.headerfooterbgcolor};
    }
  `}
}
`

export const FooterItem = styled.div`
@media screen and (max-width: 432px) and (min-width:340px)
{
  position: absolute;
  left:0;
  width: 34px;
  height: 34px;
  text-align: center;
  top:4px;
  margin-top:7px;
  z-index:2;  
}
`;

export const GreenCircle = styled.div`
@media screen and (max-width: 432px ) and (min-width:340px) {
  width: 15px;
  height: 15px;
  background-color: green;
  border-radius: 50%;
  position: absolute;
  z-index: 4;
  top: 2px;
  right: 8px;
  font-size:9px;
  transform: translate(50%, -50%);
}
`;


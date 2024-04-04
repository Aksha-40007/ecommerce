import styled from "styled-components";
import { colors } from "./global/theme";

export const NavbarWrapper = styled.div`
    width:95%;
    height:7%;

    @media screen and (max-width: 768px) {
      width:1380px;
    }

    @media screen and (max-width: 432px) {
     display:none;
    }
`;

export const Circle = styled.div`
  width: 50px; 
  height: 50px;
  border-radius: 50%;
  border:1px solid black;
  background-color: transparent;
  color: black; /* Example color */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px; /* Adjust font size as needed */
`;

export const DropdownContainer = styled.div`
  display:flex;
  margin-top:0.5rem;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:80px;
  width:180px;
  margin-right:0.4rem;
  border:1px solid #DDDDDD;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1),0px -2px 5px rgba(0, 0, 0, 0.1);
  border-radius:20px;
  background-color:${colors.whitetextcolor};
  position: absolute;
  z-index: 10;
  .horizontaLine{
    width:100%;
    border:1px solid ${colors.grey};
  }
`;
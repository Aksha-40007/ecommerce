import styled from "styled-components";
import { colors } from "./global/theme";

export const SearchContainerMobileView = styled.div`
  @media screen and (max-width:432px) and (min-width:340px){
    position: fixed;
    top: 0;
    left: 0;
    width:430px;
    max-width:100%;
    color: ${colors.whitetextcolor};
    background-color: ${colors.headerfooterbgcolor};
    z-index: 11;
    padding: 0.4rem 2rem 0 0.5rem;
  } 

`;

export const SearchbarContainer = styled.div`
  text-align: center;
  height: 2.5rem;
  width: 95%;
  min-width: 500px; /* Adjust the max-width as needed */
  margin: 0.5rem 0rem; /* Center the search bar */
  border-radius: 40px;
  border: 3px solid ${colors.grey};
  background-color: ${colors.whitetextcolor};

  @media screen and (max-width: 432px) and (min-width:340px) {
    min-width: 99%;
    margin: 0.5rem 0rem;
    border-radius: 3px;
  }
`;

export const TextInput = styled.input`
  color: #666666;
  font-size: 20px;
  border: none;
  width: calc(100% - 30px); /* Adjust the input width */
  padding-left: 10px; /* Add padding for better appearance */
  vertical-align: middle;

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: none;
    width: calc(100% - 60px); /* Adjust width on focus */
  }

  @media screen and (max-width: 768px) {
    font-size: 18px; /* Adjust font size for smaller screens */
  }

  @media screen and (max-width:432px) and (min-width:340px){
    width:428px;
  }

`;

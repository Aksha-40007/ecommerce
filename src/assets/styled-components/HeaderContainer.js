import styled from "styled-components";
import { colors } from "./global/theme";

export const HeaderWrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    max-height:6%;
    min-height:3%;
    color:${colors.whitetextcolor};
    background-color:${colors.headerfooterbgcolor};
    z-index:11;
    
      @media screen and (max-width: 432px) and (min-width:340px) {
        display:none;
    }

`;

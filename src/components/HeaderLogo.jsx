import React, { useState, useEffect } from "react";
import {
  FlexContainer,
  Image,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import LogoImage from "../assets/images/logomusic.png";
import { StyleSheetManager } from "styled-components";
import { colors } from "../assets/styled-components/global/theme";
import styled from "styled-components"; // Import styled-components

const HeaderLogo = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsFixed(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
    };
  }, []);

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        !["direction", "align", "gap", "isFixed"].includes(prop)
      }
    >
      {isFixed ? (
        <FlexContainerFixed
          direction="row"
          align="center"
          gap="1rem"
          isFixed={isFixed}
        >
          <Image src={LogoImage} alt="Logo Image" width="38px" height="38px" />
          <StyledText fontSize="35.13px" fontWeight="600" fontFamily="Roboto">
            Musicart
          </StyledText>
        </FlexContainerFixed>
      ) : (
        <FlexContainer direction="row" align="center" gap="0.5rem" style={{margin:"0.5rem"}}>
          <Image src={LogoImage} alt="Logo Image" width="40px" height="40px" />
          <StyledText fontSize="44.13px" fontWeight="600" fontFamily="Roboto">
            Musicart
          </StyledText>
        </FlexContainer>
      )}
    </StyleSheetManager>
  );
};

const FlexContainerFixed = styled(FlexContainer)`
  color: ${colors.whitetextcolor};
  background-color: ${colors.headerfooterbgcolor};
  position: ${(props) => (props.isFixed ? "fixed" : "relative")};
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  padding-left:15px;
  height:7%;
`;

export default HeaderLogo;

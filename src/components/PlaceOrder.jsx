import React from "react";
import {
  BoxContainer,
  PlaceOrderContainer,
} from "../assets/styled-components/PlaceorderContainer";
import {
  Button,
  FlexContainer,
  Image,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import LogoImage from "../assets/images/logomusic.png";
import confetti from "../assets/icons/confetti.svg";
import { colors } from "../assets/styled-components/global/theme";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { StyleSheetManager } from "styled-components";
import useWindowSize from "./useWindowSize";
import MobileHeader from './MobileHeader';
import MobileViewFooter from './MobileviewFooter';

const PlaceOrder = () => {
  const isMobile = useWindowSize();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <StyleSheetManager Prop={(prop) =>
      ![
        "borderRadius",
        "backgroundColor",
        "align",
        "gap",
        "margin",
        "justify"
      ].includes(prop)}
    >
      <PlaceOrderContainer>
      {isMobile && <MobileHeader/>}
      <FlexContainer
        direction="row"
        align="baseline"
        gap="0.5rem"
        margin="0.5rem 0rem"
      >
        {!isMobile &&(<>
          <Image src={LogoImage} alt="Logo Image" width="38px" height="38px" />
        <StyledText
          fontSize="44.13px"
          fontWeight="600"
          fontFamily="Roboto"
          color="black"
        >
          Musicart
        </StyledText>
        </>)}
      </FlexContainer>
      <BoxContainer>
        <FlexContainer
          direction="column"
          justify="center"
          align="center"
          margin={isMobile? " 2rem 1rem":"3rem"}
          padding={isMobile && "2rem 0 0 0"}
          gap="2rem"
        >
          <Image src={confetti} height="80px" />
          <div>
            <StyledText fontSize="25px" fontWeight="600" androidFontSize="18px">Order is placed successfully!</StyledText><br />
            <StyledText fontSize="20px"  color={colors.placeordertext} androidFontSize="15px">
              You will be receiving a confirmation email with order details
            </StyledText>
          </div>
          <Button
            width={isMobile?"260px":"320px"}
            height="2.5rem"
            borderRadius={isMobile?"5px":"10px"}
            backgroundColor={colors.headerfooterbgcolor}
            color={colors.whitetextcolor}
            fontSize={isMobile?"16px":"20px"}
            fontWeight="500"
            onClick={handleClick}
          >
            Go back to Home page
          </Button>
        </FlexContainer>
      </BoxContainer>
      {isMobile ? <MobileViewFooter /> : <Footer />} 
    </PlaceOrderContainer>
    </StyleSheetManager>
  );
};

export default PlaceOrder;

import React from "react";
import { StyleSheetManager } from "styled-components";
import {
  Rectanglecontainer,
  RectangleImage,
  RectangleText,
} from "../assets/styled-components/RectangleImageContainer";
import rectangleImage from "../assets/images/rectimage.png";
import {
  Button,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import { colors } from "../assets/styled-components/global/theme";
import useWindowSize from './useWindowSize';

const RectangleHeader = () => {
  const isMobile = useWindowSize();
  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        ![
          "fontSize",
          "color",
          "fontWeight",
          "mobileImageWidth",
          "mobileImageHeight",
          "mobileFontSize",
          "androidFontSize",
          "androidImageWidth",
          "androidImageHeight",
          "backgroundColor",
          "borderRadius"
        ].includes(prop)
      }
    >
      <Rectanglecontainer>
        <RectangleText>
          <StyledText
            fontSize="50px"
            fontWeight="600"
            color={colors.headerfooterbgcolor}
            mobileFontSize="48px"
            androidFontSize="22px"
          >
            Grab upto 50% off on Selected headphones
          </StyledText>
           {isMobile &&  <Button
         borderRadius="20px"
         fontSize="12px"
                 fontWeight="600"
              color={colors.whitetextcolor}
              backgroundColor={colors.headerfooterbgcolor}
            >
              Buy Now
            </Button>}
        </RectangleText>
        <RectangleImage
          src={rectangleImage}
          alt="Image"
          mobileImageWidth="250px"
          mobileImageHeight="212px"
        />
      </Rectanglecontainer>
    </StyleSheetManager>
  );
};

export default RectangleHeader;

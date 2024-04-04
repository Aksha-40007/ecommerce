// DeliveryAddressSection.js
import React, { useEffect, useState } from "react";
import {
  FlexContainer,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import { colors } from "../assets/styled-components/global/theme";
import { TextAreaContainer } from "../assets/styled-components/OrderContainer";
import { useSelector } from "react-redux";
import useWindowSize from "./useWindowSize";
import { StyleSheetManager } from "styled-components";

const DeliveryAddressSection = ({ deliveryAddress, handleAddressChange }) => {
  const userName = useSelector((state) => state.currentAuthUser?.user?.name);
  const isMobile = useWindowSize();
  const [initials, setInitials] = useState("");
  useEffect(() => {
    if (userName.length > 2) {
      const initials = userName[0].toUpperCase() + userName.slice(1);
      setInitials(initials);
    } else {
      const capitalizedUserName =
        userName.charAt(0).toUpperCase() + userName.slice(1);
      setInitials(capitalizedUserName);
    }
  }, [userName]);

  const addressModified = deliveryAddress.trim().length > 15;
  return (
    <StyleSheetManager
      shouldForwardProp={(prop) => !["androidFontSize"].includes(prop)}
    >
      {isMobile ? (
        <FlexContainer direction="column">
          <StyledText
            fontSize="24px"
            color={colors.ordertextcolor}
            androidFontSize="20px"
          >
            1. Delivery Address
          </StyledText>
          <StyledText fontSize="20px" androidFontSize="18px">
            {initials}
          </StyledText>
          <TextAreaContainer
            className={`${addressModified ? "zero-len" : ""}`}
            value={deliveryAddress}
            onChange={handleAddressChange}
          />
        </FlexContainer>
      ) : (
        <FlexContainer gap="10rem" padding="0 0 0 1rem">
          <StyledText fontSize="24px" color={colors.ordertextcolor}>
            1. Delivery Address
          </StyledText>
          <div>
            <StyledText fontSize="20px">{initials}</StyledText>
            <br />

            <TextAreaContainer
              className={`${addressModified ? "zero-len" : ""}`}
              value={deliveryAddress}
              onChange={handleAddressChange}
            />
          </div>
        </FlexContainer>
      )}
    </StyleSheetManager>
  );
};

export default DeliveryAddressSection;

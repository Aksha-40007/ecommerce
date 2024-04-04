import React from "react";
import {
  OrderDetailsContainer,
  OrderItemDetailContainer,
} from "../assets/styled-components/OrderContainer";
import {
  Button,
  FlexContainer,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import { colors } from "../assets/styled-components/global/theme";
import { useNavigate } from "react-router-dom";
import OrderItem from "./OrderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const MobileOrderDetails = () => {
  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate("/cart");
  };
  return (
    <OrderDetailsContainer>
      <FlexContainer direction="column" gap="0.5rem" margin="0.5rem 0.5rem">
      <Button
          width="45px"
          height="2.7rem"
          borderRadius="50%"
          backgroundColor={colors.whitetextcolor}
          color={colors.black}
          style={{ boxShadow: "0px 1px 4px 0px #00000054" }}
          onClick={handleProductClick}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <OrderItemDetailContainer>
          <FlexContainer direction="column" justify="center" align="normal" >
            <FlexContainer justify="center" align="end">
              <StyledText fontSize="28px" fontWeight="600">
                <u>Checkout</u>
              </StyledText>
            </FlexContainer>
            <OrderItem/>        
          </FlexContainer>
        </OrderItemDetailContainer>
      </FlexContainer>
    </OrderDetailsContainer>
  );
};

export default MobileOrderDetails;

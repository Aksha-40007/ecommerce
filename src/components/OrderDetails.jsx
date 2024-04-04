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

const OrderDetails = () => {
  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate("/cart");
  };
  return (
    <OrderDetailsContainer>
      <FlexContainer direction="column" gap="1.5rem" margin="0 1.5rem">
        <Button
          width="200px"
          height="2rem"
          borderRadius="10px"
          backgroundColor={colors.headerfooterbgcolor}
          color={colors.whitetextcolor}
          fontSize="25px"
          fontWeight="500"
          onClick={handleProductClick}
        >
          Back to Cart
        </Button>
        <OrderItemDetailContainer>
          <FlexContainer direction="column" justify="center" align="normal" >
            <FlexContainer justify="center" align="end">
              <StyledText fontSize="28px" fontWeight="600" padding="0 1rem">
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

export default OrderDetails;

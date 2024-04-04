import React from "react";
import {
  Button,
  FlexContainer,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import { useSelector } from "react-redux";
import {
  CartPriceItem,
  PriceGridContainer,
} from "../assets/styled-components/CartContainer";
import { colors } from "../assets/styled-components/global/theme";
import { useNavigate } from "react-router-dom";

const CartItemPriceDetail = () => {
  const priceDetails = useSelector(
    (state) => state.cart?.cartProducts?.cart?.priceDetails
  );

  const navigate = useNavigate();
  const handleOrderClick = () =>{
    navigate('/order');
  }
  return (
    <CartPriceItem>
      <StyledText fontSize="20px" fontWeight="600">
        PRICE DETAILS
      </StyledText>
      <FlexContainer direction="column" gap="8rem" padding="1rem 0 0 0 ">
        <PriceGridContainer>
          <div>
            <StyledText fontSize="18px">Total MRP </StyledText>
            <br />
            <StyledText fontSize="18px">Discount on MRP</StyledText>
            <br />
            <StyledText fontSize="18px">Convenience Fee</StyledText>
          </div>
          <div>
            <StyledText fontSize="18px">
              ₹{priceDetails?.totalMRP.toLocaleString()}
            </StyledText>
            <br />
            <StyledText fontSize="18px">₹{priceDetails?.discount}%</StyledText>
            <br />
            <StyledText fontSize="18px">
              ₹{priceDetails?.convenienceFee.toLocaleString()}
            </StyledText>
          </div>
        </PriceGridContainer>
        <div>
          <StyledText fontSize="20px" fontWeight="600" padding="0 1.5rem 0 0 ">
            Total Amount
          </StyledText>
          <StyledText fontSize="20px" fontWeight="600">
            ₹{priceDetails?.totalAmount.toLocaleString()}
          </StyledText>
        </div>
      </FlexContainer>
      <Button
        width="200px"
        height="2rem"
        fontWeight="600"
        borderRadius="8px"
        margin="2rem 0 0 0"
        backgroundColor={colors.addtocart}
        onClick={handleOrderClick}
      >
        PLACE ORDER
      </Button>
    </CartPriceItem>
  );
};

export default CartItemPriceDetail;

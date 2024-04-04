import React from "react";
import {
  FlexContainer,
  Image,
  Select,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles"; 
import { colors } from "../assets/styled-components/global/theme";
import { ImageContainer,CartGridContainer } from "../assets/styled-components/CartContainer";
import useWindowSize from "./useWindowSize";
import { useSelector } from "react-redux";

const CartItem = ({ priceDetails, imageUrl, product, handleQuantityChange }) => {
  const isMobile=useWindowSize();
  const { name, color, availability, price, productId, quantity, productPictures } = product;
  return (
    <CartGridContainer >
      {isMobile ? (<>
        <div>
      <ImageContainer>
        <Image
          src={`${imageUrl}/${productPictures[0].img}`}
          height="140px"
          width="140px"
        />
      </ImageContainer>
      </div>
      <FlexContainer direction="column" gap="0.5rem">
        <StyledText fontSize="26px" fontWeight="600" color="black" style={{ whiteSpace: 'wrap' }}>{name}</StyledText>
        <StyledText fontSize="28px" fontWeight="500" color="black">
        ₹{price.toLocaleString()}
        </StyledText>
        <StyledText color="black" fontSize="22px">
          Colour: {color} <br />
        </StyledText>
        <StyledText color="black" fontSize="22px">
          {availability ? "In stock" : "Out of stock"}
        </StyledText>
        <StyledText fontSize="22px">Convenience Fee: ₹{priceDetails?.convenienceFee.toLocaleString()}</StyledText>
        <StyledText fontSize="26px" fontWeight="500" padding="1rem 0 0 0">Total: ₹{priceDetails?.totalAmount.toLocaleString()}</StyledText>

      </FlexContainer>

      </>)
      : (<>
        <ImageContainer>
        <Image
          src={`${imageUrl}/${productPictures[0].img}`}
          height="140px"
          width="140px"
        />
      </ImageContainer>
        <div>
        <StyledText fontSize="28px" fontWeight="500" color="black" androidFontSize="20px" style={{ whiteSpace: 'nowrap' }}>{name}</StyledText> <br />
        <StyledText color={colors.carttextcolor} fontSize="22px">
          Colour: {color} <br />
        </StyledText>
        <StyledText color={colors.carttextcolor} fontSize="22px">
          {availability ? "In stock" : "Out of stock"}
        </StyledText>
      </div>
      <FlexContainer direction="column">
        <StyledText fontSize="28px" fontWeight="500" color="black">
          Price
        </StyledText>
        <StyledText fontSize="20px">₹{price.toLocaleString()}</StyledText>
      </FlexContainer>
      <FlexContainer direction="column">
        <StyledText fontSize="28px" fontWeight="500" color="black">Quantity</StyledText>
        <Select value={quantity} onChange={(e) => handleQuantityChange(e, productId)}>
          {[...Array(8)].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </Select>
      </FlexContainer>
      <FlexContainer direction="column">
        <StyledText fontSize="28px" fontWeight="500" color="black">
          Total
        </StyledText>
        <StyledText fontSize="20px"> ₹{(price * quantity).toLocaleString()}</StyledText>
      </FlexContainer> 
      </>)}
    </CartGridContainer>
  );
};

export default CartItem;

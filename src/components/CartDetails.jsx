import React, { useEffect, useState } from "react";
import {
  CartDetailsContainer,
  CartItemPriceContainer,
  CartPriceDetails,
  CartProduct,
  CartProductContainer,
} from "../assets/styled-components/CartContainer";
import {
  Button,
  FlexContainer,
  HorizontalLine,
  Image,
  StyledText,
  Select,
  VerticalLine,
} from "../assets/styled-components/global/GlobalStyles"; // Assuming you have a Select component

import { colors } from "../assets/styled-components/global/theme";
import { useNavigate } from "react-router-dom";
import cartbag from "../assets/icons/cartbag.svg";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartItemPriceDetail from "./CartItemPriceDetail";
import { getCartProducts, updateCart } from "../store/slices/cartSlice";

const CartDetails = () => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const cartProducts = useSelector(
    (state) => state.cart?.cartProducts?.cart?.products
  );
  const cartCount = useSelector((state) => state.cart?.cartProducts?.count);
  const token = useSelector((state)=>state.currentAuthUser?.authToken);
  useEffect(() => {
    if (cartCount > 0) {
      setShouldDisplay(true);
    }
  }, []);

  const priceDetails = useSelector(
    (state) => state.cart?.cartProducts?.cart?.priceDetails
  );

  const handleProductClick = () => {
    navigate("/");
  };

  const handleQuantityChange = (event, productId) => {
    const quantity = parseInt(event.target.value);
    dispatch(updateCart({ productId, quantity,token })).then(()=>{
      dispatch(getCartProducts(token))
      navigate('/cart');
    });
  };

  return (
    <CartDetailsContainer>
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
          Back to products
        </Button>
        {shouldDisplay ? (
          <CartProductContainer>
            <FlexContainer direction="column" justify="center" align="normal">
              <FlexContainer justify="center" align="end">
                <Image src={cartbag} />
                <StyledText fontSize="38px" fontWeight="600" padding="0 1rem">
                  My Cart
                </StyledText>
              </FlexContainer>
              <FlexContainer >
                <FlexContainer
                  direction="column"
                  align="flex-start"
                  padding="0.5rem"
                >
                  <HorizontalLine />
                  <CartProduct>
                    {cartProducts?.map((product, index) => (
                      <FlexContainer
                        direction="column"
                        justify="center"
                        align="flex-start"
                        padding="0.5rem"
                        key={index}
                      >
                        <CartItem
                          imageUrl={imageUrl}
                          product={product}
                          handleQuantityChange={handleQuantityChange}
                        />
                      </FlexContainer>
                    ))}
                  </CartProduct>
                </FlexContainer>
                <div>
                  <VerticalLine />
                </div>
                <CartPriceDetails>
                  <CartItemPriceDetail />
                </CartPriceDetails>
              </FlexContainer>
              <CartItemPriceContainer>
                <HorizontalLine />
                <StyledText
                  fontSize="22px"
                  fontWeight="600"
                  padding="0 4rem 0 17rem"
                >
                  {cartCount} Item
                </StyledText>
                <StyledText
                  fontSize="22px"
                  fontWeight="600"
                  padding="0 1rem 0 23rem"
                >
                  ₹{priceDetails?.totalMRP.toLocaleString()}{" "}
                </StyledText>
              </CartItemPriceContainer>
            </FlexContainer>
          </CartProductContainer>
        ) : (
          <StyledText fontSize="30px" padding="0 0 0 1rem">
            Oops No products in cart to display. Please add products to view it!
          </StyledText>
        )}
      </FlexContainer>
    </CartDetailsContainer>
  );
};

export default CartDetails;

import React, { useEffect, useState } from "react";
import {
  CartDetailsContainer,
  CartProduct,
  CartProductContainer,
} from "../assets/styled-components/CartContainer";
import {
  Button,
  FlexContainer,
  HorizontalLine,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles"; // Assuming you have a Select component

import { colors } from "../assets/styled-components/global/theme";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartProducts, updateCart } from "../store/slices/cartSlice";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileCartDetails = ({ isMobile }) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showNoProductsText, setShowNoProductsText] = useState(false);
  const cartProducts = useSelector(
    (state) => state.cart?.cartProducts?.cart?.products
  );

  useEffect(() => {
    if (cartProducts === undefined || cartProducts.length === 0) {
      setShowNoProductsText(true);
    } else {
      setShowNoProductsText(false);
    }
  }, []);

  const token = useSelector((state) => state.currentAuthUser?.authToken);

  const priceDetails = useSelector(
    (state) => state.cart?.cartProducts?.cart?.priceDetails
  );

  const handleProductClick = () => {
    navigate("/");
  };

  const handlePlaceOrder = () => {
    navigate("/order");
  };

  const handleQuantityChange = (event, productId) => {
    const quantity = parseInt(event.target.value);
    dispatch(updateCart({ productId, quantity, token })).then(() => {
      dispatch(getCartProducts(token));
      navigate("/cart");
    });
  };

  return (
    <CartDetailsContainer>
      <FlexContainer direction="column" gap="1.5rem" margin="0.5rem">
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
        {showNoProductsText && (
          <StyledText fontSize="30px" padding="0 0 0 1rem">
            Oops No products in cart to display. Please add products to view it!
          </StyledText>
        )}
        <CartProduct>
          <CartProductContainer>
            {cartProducts?.map((product, index) => (
              <div key={index} >
                <FlexContainer
                  direction="column"
                  justify="center"
                  align="flex-start"
                >
                  <CartItem
                    priceDetails={priceDetails}
                    isMobile={isMobile}
                    imageUrl={imageUrl}
                    product={product}
                    handleQuantityChange={handleQuantityChange}
                  />
                </FlexContainer>
                <HorizontalLine backgroundcolor="white" />
              </div>
            ))}
          </CartProductContainer>
          {!showNoProductsText && (
            <>
              <HorizontalLine backgroundcolor="black" />
              <StyledText fontSize="24px" fontWeight="600" padding="0 0">
                Total Amount:₹{priceDetails?.totalAmount.toLocaleString()}
              </StyledText>
              <Button
                width="360px"
                height="2.5rem"
                borderRadius="10px"
                fontSize="20px"
                fontWeight="600"
                backgroundColor={colors.addtocart}
                color={colors.black}
                margin="1rem 0"
                onClick={handlePlaceOrder}
              >
                PLACE ORDER
              </Button>
            </>
          )}{" "}
        </CartProduct>
      </FlexContainer>
    </CartDetailsContainer>
  );
};

export default MobileCartDetails;

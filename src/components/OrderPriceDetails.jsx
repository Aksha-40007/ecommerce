import React from "react";
import { OrderPriceItem } from "../assets/styled-components/OrderContainer";
import {
  Button,
  FlexContainer,
  HorizontalLine,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import { colors } from "../assets/styled-components/global/theme";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOrderHistory, placeOrder } from "../store/slices/orderSlice";
import { getCartProducts } from "../store/slices/cartSlice";
import useWindowSize from "./useWindowSize";
import { ToastContainer, toast } from "react-toastify";

const OrderPriceDetails = ({
  priceDetails,
  deliveryAddress,
  paymentMethod,
}) => {
  const isMobile = useWindowSize();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.currentAuthUser?.authToken);
  const navigate = useNavigate();
  const handleOrderClick = () => {
    dispatch(
      placeOrder({ deliveryAddress, paymentMode: paymentMethod, token })
    ).then((response) => {
      dispatch(getCartProducts(token));
      if(!response.error){
        navigate("/placeOrder");
      }else{
        toast.error("Please fill in all details before ordering",{
          position:"top-right",
          style: { marginTop: "2rem" } 
          })
      }
    });
    dispatch(getOrderHistory(token));
  };

  return (
    <>
    <ToastContainer/>
      {isMobile ? (
        <FlexContainer
          direction="column"
          justify="center"
          align="center"
          gap="1rem"
        >
          <div style={{ textAlign: "left", margin:`${isMobile && "0rem 0 1rem 0"}` }}>
            <StyledText fontSize="20px" fontWeight="600">
              Order Summary
            </StyledText>
            <FlexContainer gap="1rem">
              <div>
                <StyledText>Items :</StyledText>
                <br />
                <StyledText>Delivery :</StyledText>
              </div>
              <div>
                <StyledText>
                  {/* Access the correct properties from priceDetails */}₹
                  {priceDetails?.totalMRP?.toLocaleString() ||
                    priceDetails?.products[0]?.price?.toLocaleString()}
                </StyledText>
                <br />
                <StyledText>
                  {/* Provide a fallback value if convenienceFee is not available */}
                  ₹{priceDetails?.convenienceFee?.toLocaleString() || "45"}
                </StyledText>
              </div>
            </FlexContainer>
          </div>
          <div>
            <StyledText fontSize="20px" color="#B52B00" padding="0 2rem 0 0">
              Order Total:
            </StyledText>
            <StyledText fontSize="20px" color="#B52B00">
              {/* Access the correct properties from priceDetails */}₹
              {priceDetails?.totalAmount?.toLocaleString() ||
                priceDetails?.ordertotal?.toLocaleString()}
            </StyledText>
          </div>
          {!priceDetails?.ordertotal && (
          <>
            <Button
              width="100%"
              height="2rem"
              fontWeight="600"
              borderRadius="8px"
              margin="1rem 0 0.5rem 0"
              backgroundColor={colors.addtocart}
              onClick={handleOrderClick}
            >
              Place your order
            </Button>
          </>
        )}
        </FlexContainer>
      ) : (
        <OrderPriceItem height={ priceDetails?.ordertotal && "200px"}>

        <FlexContainer
          direction="column"
          justify="center"
          align="center"
          gap="1rem"
        >
          {!priceDetails?.ordertotal && (
            <>
              <Button
                width="100%"
                height="2rem"
                fontWeight="600"
                borderRadius="8px"
                margin="2rem 0 0 0"
                backgroundColor={colors.addtocart}
                onClick={handleOrderClick}
              >
                Place your order
              </Button>
              <StyledText>
                By placing your order, you agree to Musicart privacy notice and
                conditions of use.
              </StyledText>
              <HorizontalLine />
            </>
          )}
          <div style={{ textAlign: "left" }}>
            <StyledText fontSize="20px" fontWeight="600">
              Order Summary
            </StyledText>
            <FlexContainer gap="10rem">
              <div>
                <StyledText>Items :</StyledText>
                <br />
                <StyledText>Delivery :</StyledText>
              </div>
              <div>
                <StyledText>
                  {/* Access the correct properties from priceDetails */}₹
                  {priceDetails?.totalMRP?.toLocaleString() ||
                    priceDetails?.products[0]?.price?.toLocaleString()}
                </StyledText>
                <br />
                <StyledText>
                  {/* Provide a fallback value if convenienceFee is not available */}
                  ₹{priceDetails?.convenienceFee?.toLocaleString() || "45"}
                </StyledText>
              </div>
            </FlexContainer>
          </div>
          <HorizontalLine />
          <div>
            <StyledText fontSize="20px" color="#B52B00" padding="0 8rem 0 0">
              Order Total:
            </StyledText>
            <StyledText fontSize="20px" color="#B52B00">
              {/* Access the correct properties from priceDetails */}₹
              {priceDetails?.totalAmount?.toLocaleString() ||
                priceDetails?.ordertotal?.toLocaleString()}
            </StyledText>
          </div>
        </FlexContainer>
    </OrderPriceItem>
      )}</>
  );
};

export default OrderPriceDetails;

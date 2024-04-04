// PlaceOrderButton.js
import React from "react";
import { colors } from "../assets/styled-components/global/theme";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RectangleBox } from "../assets/styled-components/OrderContainer";
import { Button, FlexContainer, StyledText } from "../assets/styled-components/global/GlobalStyles";
import { getOrderHistory, placeOrder } from "../store/slices/orderSlice";
import { getCartProducts } from "../store/slices/cartSlice";
import useWindowSize from "./useWindowSize";
import { ToastContainer, toast } from "react-toastify";

const PlaceOrderSection = ({priceDetails,deliveryAddress,paymentMethod}) => {
    const isMobile = useWindowSize();
    const dispatch= useDispatch();

    const token = useSelector((state)=>state.currentAuthUser?.authToken);
    const navigate = useNavigate();
    const handleOrderClick = () => {
        dispatch(placeOrder({deliveryAddress,paymentMode:paymentMethod,token})).then((response)=>{
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
   {!isMobile && (<RectangleBox>
    <Button
      width="200px"
      height="2rem"
      fontWeight="600"
      borderRadius="8px"
      backgroundColor={colors.addtocart}
      onClick={handleOrderClick}
    >
      PLACE ORDER
    </Button>
    <FlexContainer direction="column">
    <StyledText color="#B52B00">Order Total: ₹{priceDetails?.totalAmount.toLocaleString()}</StyledText>
    <StyledText>By placing your order, you agree to Musicart privacy notice and conditions of use.</StyledText>
    </FlexContainer>
  </RectangleBox>)}
   </>
  );
};

export default PlaceOrderSection;

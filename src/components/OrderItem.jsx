import React, {  useState } from "react";
import {
  FlexContainer
} from "../assets/styled-components/global/GlobalStyles";
import { useSelector } from "react-redux";

import PlaceOrderSection from "./PlaceOrderSection";
import DeliveryAddressSection from "./DeliveryAddressSection";
import PaymentMethodSection from "./PaymentMethodSection";
import ReviewitemsSection from "./ReviewitemsSection";
import OrderPriceDetails from "./OrderPriceDetails";
import { HorizontalLine } from "../assets/styled-components/OrderContainer";
import useWindowSize from "./useWindowSize";

const OrderItem = () => {
  const isMobile = useWindowSize();
  const cartProducts = useSelector(
    (state) => state.cart?.cartProducts?.cart?.products
  );

  const priceDetails = useSelector(
    (state) => state.cart?.cartProducts?.cart?.priceDetails
  );

  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddressChange = (event) => {
    setDeliveryAddress(event.target.value);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <FlexContainer margin={isMobile && "0 0 3rem 0"} >
      <FlexContainer direction="column" gap="0.5rem" >
      <DeliveryAddressSection
        deliveryAddress={deliveryAddress}
        handleAddressChange={handleAddressChange}
      />
      <HorizontalLine/>
      <PaymentMethodSection
        paymentMethod={paymentMethod}
        handlePaymentMethodChange={handlePaymentMethodChange}

      />
            <HorizontalLine/>
      <ReviewitemsSection
        selectedProduct={selectedProduct}
        cartProducts={cartProducts}
        handleImageClick={handleImageClick}
      />
            <HorizontalLine/>
        {isMobile ?   
        <OrderPriceDetails priceDetails={priceDetails} deliveryAddress={deliveryAddress} paymentMethod={paymentMethod}/>
        :   <PlaceOrderSection priceDetails={priceDetails} deliveryAddress={deliveryAddress} paymentMethod={paymentMethod} />
        }
      </FlexContainer>
      {!isMobile && <OrderPriceDetails priceDetails={priceDetails} deliveryAddress={deliveryAddress} paymentMethod={paymentMethod}/> }   
    </FlexContainer>
  );
};

export default OrderItem;

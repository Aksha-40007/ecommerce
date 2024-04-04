import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlexContainer } from "../assets/styled-components/global/GlobalStyles";
import DeliveryAddressSection from "./DeliveryAddressSection";
import { HorizontalLine } from "../assets/styled-components/OrderContainer";
import PaymentMethodSection from "./PaymentMethodSection";
import ReviewitemsSection from "./ReviewitemsSection";
import PlaceOrderSection from "./PlaceOrderSection";
import OrderPriceDetails from "./OrderPriceDetails";
import { getOrderHistory } from "../store/slices/orderSlice";
import useWindowSize from "./useWindowSize";

const InvoiceItem = () => {
  const isMobile = useWindowSize();
  const dispatch = useDispatch();
  const orderHistory = useSelector(
    (state) => state.order?.orderedProducts?.orders
  );
  const [selectedProduct, setSelectedProduct] = useState(null);
  const token = useSelector((state) => state.currentAuthToken?.authToken);
  const cartProducts = useSelector(
    (state) => state.cart?.cartProducts?.cart?.products
  );
  useEffect(() => {
    dispatch(getOrderHistory(token));
  }, []);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };
  // console.log(orderHistory.map((product)=> product.price));
  return (
    <FlexContainer>
      {isMobile ? (
        <>
          <FlexContainer direction="column" gap="0rem">
            {orderHistory && orderHistory.length > 0 && (
              <>
                <DeliveryAddressSection
                  deliveryAddress={orderHistory[0].deliveryAddress}
                />
                <HorizontalLine />
                <PaymentMethodSection
                  paymentMethod={orderHistory[0].paymentMode}
                />
                <HorizontalLine />
                <ReviewitemsSection
                  selectedProduct={selectedProduct}
                  cartProducts={orderHistory[0].products}
                  handleImageClick={handleImageClick}
                />
                <HorizontalLine />
                <OrderPriceDetails priceDetails={orderHistory[0]} />
              </>
            )}
          </FlexContainer>

        </>
      ) : (
        <>
          <FlexContainer direction="column" gap="0.5rem">
            {orderHistory && orderHistory.length > 0 && (
              <>
                <DeliveryAddressSection
                  deliveryAddress={orderHistory[0].deliveryAddress}
                  // Pass handleAddressChange if required
                />
                <HorizontalLine />
                <PaymentMethodSection
                  paymentMethod={orderHistory[0].paymentMode}
                />
                <HorizontalLine />
                <ReviewitemsSection
                  selectedProduct={selectedProduct}
                  cartProducts={orderHistory[0].products}
                  handleImageClick={handleImageClick}
                />
                <HorizontalLine />
              </>
            )}
          </FlexContainer>
          <OrderPriceDetails priceDetails={orderHistory[0]} />
        </>
      )}
    </FlexContainer>
  );
};

export default InvoiceItem;

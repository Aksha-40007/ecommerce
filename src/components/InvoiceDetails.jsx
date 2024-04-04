import React, { useState, useEffect } from "react";
import {
  InvoiceDetailsContainer,
  InvoiceItemDetailContainer,
} from "../assets/styled-components/InviceContainer";
import {
  Button,
  FlexContainer,
  HorizontalLine,
  Image,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import { colors } from "../assets/styled-components/global/theme";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../store/slices/orderSlice";
import invoicedit from "../assets/icons/invoiceedit.svg";
import InvoiceItem from "./InvoiceItem";
import useWindowSize from "./useWindowSize";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InvoiceDetails = () => {
  const isMobile = useWindowSize();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedOrder, setSelectedOrder] = useState(false);
  const token = useSelector((state) => state.currentAuthUser?.authToken);
  const user = useSelector((state)=>state.currentAuthUser?.user?.name);
  const handleClick = () => {
    navigate("/");
  };
  const orderHistory = useSelector(
    (state) => state.order?.orderedProducts?.orders
  );

  useEffect(() => {
    dispatch(getOrderHistory(token));
  }, []);

  const handleInvoiceClick = () => {
    setSelectedOrder(true);
  };

  return (
    <InvoiceDetailsContainer>
      <FlexContainer direction="column" gap={isMobile?"0":"1.5rem"} margin={isMobile?"1rem 0rem":"0 1.5rem"}>
        {isMobile ? (
          <Button
            width="45px"
            height="2.7rem"
            borderRadius="50%"
            backgroundColor={colors.whitetextcolor}
            color={colors.black}
            style={{ boxShadow: "0px 1px 4px 0px #00000054",zIndex:14 }}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        ) : (
          <Button
            width="200px"
            height="2rem"
            borderRadius="10px"
            backgroundColor={colors.headerfooterbgcolor}
            color={colors.whitetextcolor}
            fontSize="25px"
            fontWeight="500"
            onClick={handleClick}
          >
            Back to Home
          </Button>
        )}{" "}
        <InvoiceItemDetailContainer>
          <FlexContainer direction="column" justify="center" align="normal" margin="1rem 0">
            <FlexContainer justify="center" align="end">
              <StyledText fontSize="28px" fontWeight="600" padding="0 1rem">
                My Invoices
              </StyledText>
            </FlexContainer>
          {selectedOrder ? (
            <InvoiceItem />
          ) : (
            // Otherwise, render orderHistory
            orderHistory?.map((order, index) => (
              <div key={index}>
                <FlexContainer justify= "space-between"  align="center">
                  <FlexContainer align="center" gap="1rem">
                    <Image src={invoicedit} height={isMobile && "60px"} weight={isMobile && "60px"} />
                    <FlexContainer direction="column">
                      <StyledText fontSize="20px" androidFontSize="12px">{user}</StyledText>
                      <StyledText fontSize="20px" androidFontSize="12px">
                        {order.deliveryAddress}
                      </StyledText>
                    </FlexContainer>
                  </FlexContainer>
                  <Button
                    width={isMobile?"100px":"200px"}
                    height="2rem"
                    borderRadius="10px"
                    backgroundColor={colors.headerfooterbgcolor}
                    color={colors.whitetextcolor}
                    fontSize={isMobile ?"10px" :"25px"}
                    fontWeight="500"
                    onClick={() => handleInvoiceClick()} // Pass the order to handleInvoiceClick
                  >
                    View Invoice
                  </Button>
                </FlexContainer>
                <HorizontalLine />
              </div>
            ))
          )}
          </FlexContainer>
        </InvoiceItemDetailContainer>
      </FlexContainer>
    </InvoiceDetailsContainer>
  );
};

export default InvoiceDetails;

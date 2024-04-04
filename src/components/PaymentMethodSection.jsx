// PaymentMethodSection.js
import React, { useState } from "react";
import {  SelectPayment } from "../assets/styled-components/OrderContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { DropdownItem, DropdownList, SelectButton } from "../assets/styled-components/FilterContainer";
import { FlexContainer, StyledText } from "../assets/styled-components/global/GlobalStyles";
import { colors } from "../assets/styled-components/global/theme";
import useWindowSize from "./useWindowSize";
import { StyleSheetManager } from "styled-components";

const PaymentMethodSection = ({ paymentMethod, handlePaymentMethodChange }) => {
  const isMobile = useWindowSize();
  const paymentMethods = ["Pay on Delivery", "UPI", "Card"];
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the state
  };
  return (
    <StyleSheetManager
    shouldForwardProp={(prop) =>
      ![
        "justify",
        "padding",
        "align",
        "gap",
        "margin",
        "backgroundColor",
        "borderRadius",
        "androidFontSize"
      ].includes(prop)
    }
  >
   {isMobile?( <FlexContainer direction="column">
      <StyledText fontSize="24px" color={colors.ordertextcolor} androidFontSize="20px" padding="1rem 0 ">
        2. Payment Method
      </StyledText>
      <SelectPayment>
        <SelectButton width="200px" height="2rem" borderRadius="5px" color="#797979" backgroundColor="#F3F3F3" value={paymentMethod} onClick={toggleDropdown}>
        {paymentMethod === "" ? (  <>
          Mode of payment <FontAwesomeIcon icon={faAngleDown} />
          {isOpen && (
            <DropdownList top="80%">
              {paymentMethods.map((method, index) => (
                <React.Fragment key={index}>
                  <DropdownItem  onClick={() => handlePaymentMethodChange(method)}>{method}</DropdownItem>
                  <hr />
                </React.Fragment>
              ))}
            </DropdownList>
          )}
        </>):(<>{paymentMethod}</>)}
        </SelectButton>
      </SelectPayment>
    </FlexContainer>):(
     <FlexContainer gap="10rem" padding="0 0 0 1rem">
     <StyledText fontSize="24px" color={colors.ordertextcolor} androidFontSize="20px">
       2. Payment Method
     </StyledText>
     <SelectPayment>
       <SelectButton width="200px" height="2rem" borderRadius="5px" color="#797979" backgroundColor="#F3F3F3" value={paymentMethod} onClick={toggleDropdown}>
       {paymentMethod === "" ? (  <>
         Mode of payment <FontAwesomeIcon icon={faAngleDown} />
         {isOpen && (
           <DropdownList top="80%">
             {paymentMethods.map((method, index) => (
               <React.Fragment key={index}>
                 <DropdownItem  onClick={() => handlePaymentMethodChange(method)}>{method}</DropdownItem>
                 <hr />
               </React.Fragment>
             ))}
           </DropdownList>
         )}
       </>):(<>{paymentMethod}</>)}
       </SelectButton>
     </SelectPayment>
   </FlexContainer>
   )}
    </StyleSheetManager>
  );
};

export default PaymentMethodSection;

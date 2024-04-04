import React, { useEffect, useState } from "react";
import {
  FooterItem,
  FooterItemContainer,
  GreenCircle,
  MobileFooterContainer,
} from "../assets/styled-components/FooterContainer";
import {
  FlexContainer,
  Image,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import Home from "../assets/icons/Home.svg";
import Cart from "../assets/icons/CartMobileview.svg";
import User from "../assets/icons/User.svg";
import Invoice from "../assets/icons/Invoice.svg"
import { colors } from "../assets/styled-components/global/theme";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheetManager } from "styled-components";
import { removeAuthUser } from "../store/slices/authSlice";

const MobileViewFooter = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.currentAuthUser?.authToken
  );
  const productCount = useSelector((state)=>state.cart?.productCount);
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null); // State to track selected item index

  const handleItemClick = (destination, index) => {
    if (destination === "/login" && !isAuthenticated) {
      setTimeout(() => navigate("/login"), 500);
    } else if(destination==='/'){
      setTimeout(() => navigate("/"), 500);
    } else if (destination === "/logout") {
      dispatch(removeAuthUser());
      setTimeout(() => navigate("/"), 500);
    }else if (destination === "/invoice") {
      setTimeout(() => navigate("/invoice"), 500);
    }else{
      setTimeout(()=>navigate('/cart'),500);
    }
    setSelectedItem(index);
  };

  const footerItems = [
    { src: Home, text: "Home", destination: "/" },
    { src: Cart, text: "Cart", destination: isAuthenticated ? "/cart" : "/login" },
    { src: Invoice, text: "Invoice", destination: isAuthenticated ? "/invoice" : "/login" },
    {
      src: User,
      text: isAuthenticated && location.pathname === "/" ? "Logout" : "Login",
      destination: isAuthenticated ? "/logout" : "/login",
    },
  ];

  useEffect(()=>{},[productCount]);
  return (
    <StyleSheetManager shouldForwardProp={(prop) =>
        ![
          "isSelected",
        ].includes(prop)
      }>
        <MobileFooterContainer>
      <FlexContainer justify="center" align="center">
        {footerItems.map((item, index) => (
          <FooterItemContainer
            key={index}
            onClick={() => handleItemClick(item.destination, index)}
            isSelected={selectedItem === index}
          >
            <FooterItem>
              <FlexContainer direction="column" gap="0">
            {item.src === Cart && isAuthenticated && <GreenCircle>{productCount}</GreenCircle>}
                <Image src={item.src} alt="icons" height="15px" />
                <StyledText
                  fontSize="8px"
                  fontWeight="600"
                  color={colors.headerfooterbgcolor}
                >
                  {item.text}
                </StyledText>
              </FlexContainer>
            </FooterItem>
          </FooterItemContainer>
        ))}
      </FlexContainer>
    </MobileFooterContainer>
    </StyleSheetManager>
  );
};

export default MobileViewFooter;

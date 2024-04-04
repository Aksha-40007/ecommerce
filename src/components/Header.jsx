import React from "react";
import {
  FlexContainer,
  Image,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import { StyleSheetManager } from "styled-components";
import PhoneIcon from "../assets/icons/phoneicon.svg";
import {
  HeaderWrapper,
} from "../assets/styled-components/HeaderContainer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeAuthUser } from "../store/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state)=>state.currentAuthUser?.authToken);
  const goToLogin = () => {
    navigate("/login");
  };

  // Function to navigate to register page
  const goToRegister = () => {
    navigate("/register");
  };

  const handleLogout = (e) => {
    e.stopPropagation();
    dispatch(removeAuthUser()); 
    navigate("/"); // Redirect to the home page after logout
  };

  const isRestrictedRoute = () => {
    const restrictedRoutes = ["/cart", "/productDetails", "/orders"];
    return restrictedRoutes.some(route => location.pathname.startsWith(route));
  };
  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        ![
          "justify",
          "padding",
          "align",
        ].includes(prop)
      }
    >
      <HeaderWrapper>
        <FlexContainer
          direction="row"
          justify="space-between"
          align="center"
          padding=" 0.5rem 2rem"
        >
          <div style={{ textAlign: "center" }}>
            <Image src={PhoneIcon} alt="Icon" height="13px" width="30px" />
            <StyledText>912121131313</StyledText>
          </div>
          <StyledText>Get 50% off on selected items</StyledText>
          <div style={{cursor:"pointer"}}>
          { token ? (
              isRestrictedRoute() ? (
                <StyledText onClick={(e)=>handleLogout(e)}>Logout</StyledText>
              ) : (
                <StyledText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledText>
              )
            ) : (
              <>
                <StyledText onClick={()=>goToLogin()}>Login</StyledText> | 
                <StyledText onClick={goToRegister}> Signup</StyledText>
              </>
            )}
          </div>
        </FlexContainer>
      </HeaderWrapper>
    </StyleSheetManager>
  );
};

export default Header;

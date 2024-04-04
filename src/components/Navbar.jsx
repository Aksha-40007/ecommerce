import React, { useEffect, useState } from "react";
import {
  Button,
  FlexContainer,
  Image,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import LogoImage from "../assets/images/logomusic.png";
import CartIcon from "../assets/icons/cart.svg";
import { colors } from "../assets/styled-components/global/theme";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { removeAuthUser } from "../store/slices/authSlice";
import {
  Circle,
  DropdownContainer,
  NavbarWrapper,
} from "../assets/styled-components/NavbarContainer";
import { fetchProductById } from "../store/slices/productSlice";
import { getCartProducts } from "../store/slices/cartSlice";

const Navbar = ({ productId }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.currentAuthUser?.authToken);
  const navigate = useNavigate();
  const location = useLocation();
  const [initials, setInitials] = useState("");
  const user = useSelector((state) => state.currentAuthUser?.user);
  const productCount = useSelector((state) => state.cart?.productCount);
  const [userName, setUserName] = useState("");

  const productById = useSelector(
    (state) => state.products?.productById?.product
  );

  useEffect(() => {
      dispatch(getCartProducts(token));
  }, [productCount, token]);

  useEffect(() => {
    setUserName(user?.name);
  }, [user]);

  useEffect(() => {
    if (user !== undefined) {
      const processedUserName =
        userName?.length > 2
          ? userName
              .split(" ")
              .map((word) => word[0])
              .join("")
              .toUpperCase()
          : userName?.charAt(0).toUpperCase() + userName?.slice(1);
      setInitials(processedUserName);
    }
  }, [userName]);

  useEffect(() => {
    if (productId !== undefined) {
      dispatch(fetchProductById(productId));
    }
  }, [productId]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getRouteText = () => {
    const pathname = location.pathname;
    if (pathname === "/") return "Home";
    if (pathname === "/cart") return "Home/ View Cart";
    if (pathname === "/order") return "Home/ Checkout";
    if (pathname === "/invoicedetails") return "Home/ Invoices";
    if (pathname.startsWith("/productdetails"))
      return `Home/ ${productById?.name || ""}`;
    return "Home";
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  const handleInvoiceClick = () => {
    navigate("/invoice");
  };
  const handleLogout = () => {
    setIsDropdownOpen(!isDropdownOpen);
    dispatch(removeAuthUser()); // Dispatch the removeAuth action
    navigate("/"); // Navigate to the home page
  };
  return (
    <NavbarWrapper>
      <FlexContainer direction="row" justify="space-between" align="center">
        <FlexContainer
          direction="row"
          align="baseline"
          gap="1rem"
          margin="0.5rem 0rem"
        >
          <Image src={LogoImage} alt="Logo Image" width="33px" height="34px" />
          <StyledText
            fontSize="44.13px"
            fontWeight="600"
            fontFamily="Roboto"
            color="black"
          >
            Musicart
          </StyledText>
          <StyledText
            fontSize="20px"
            fontWeight="500"
            fontFamily="Roboto"
            color="black"
          >
            {getRouteText()}
          </StyledText>
          {location.pathname === "/" && (
            <StyledText
              fontSize="20px"
              fontWeight="500"
              fontFamily="Roboto"
              color="black"
              onClick={handleInvoiceClick}
            >
              Invoice
            </StyledText>
          )}
        </FlexContainer>
        {token &&
          location.pathname !== "/order" &&
          location.pathname !== "/invoicedetails" && (
            <FlexContainer direction="row" align="center" gap="1rem">
              <Button
                width="200px"
                height="40px"
                color={colors.whitetextcolor}
                backgroundColor={colors.cartbuttonbgcolor}
                fontSize="1.2rem"
                fontWeight="bold"
                borderRadius="47px"
                onClick={navigateToCart}
              >
                <Image
                  src={CartIcon}
                  alt="cart Image"
                  width="18px"
                  height="16px"
                />
                <StyledText
                  fontSize="20px"
                  fontWeight="400"
                  color={colors.whitetextcolor}
                  padding="0 0.5rem"
                >
                  View Cart &nbsp;
                  {location.pathname !== "/invoice" && productCount}
                </StyledText>
              </Button>
              {location.pathname === "/" && (
                <Circle onClick={toggleDropdown}>{initials}</Circle>
              )}
            </FlexContainer>
          )}
      </FlexContainer>
      {isDropdownOpen && (
        <FlexContainer justify="flex-end">
          <DropdownContainer>
            <StyledText
              fontSize="1.2rem"
              color="black"
              fontWeight="bold"
              padding="0.3rem 0"
            >
              {userName}
            </StyledText>
            <hr className="horizontaLine" />
            <Button
              height="20px"
              backgroundColor={colors.whitetextcolor}
              fontSize="1.2rem"
              fontWeight="bold"
              borderRadius="25px"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </DropdownContainer>
        </FlexContainer>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;

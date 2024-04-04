import React from "react";
import { StyleSheetManager } from 'styled-components';
import LoginForm from "../components/LoginForm";
import { RegisterLoginWrapper } from "../assets/styled-components/RegisterLoginContainer";
import { FlexContainer } from "../assets/styled-components/global/GlobalStyles";
import HeaderLogo from "../components/HeaderLogo";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <RegisterLoginWrapper>
      <>
        <StyleSheetManager shouldForwardProp={(prop) => !['justify', 'align', 'direction', 'gap'].includes(prop)}>
          <FlexContainer direction="column" justify="space-around" align="center" style={{marginTop:"0.5rem"}}>
            <HeaderLogo />
            <LoginForm />
          </FlexContainer>
        </StyleSheetManager>
        <Footer />
      </>
    </RegisterLoginWrapper>
  );
};

export default LoginPage;

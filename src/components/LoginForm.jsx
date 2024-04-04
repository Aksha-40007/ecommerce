import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheetManager } from "styled-components";
import {
  FlexContainer,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import {
  FormContainer,
  FormFieldContainer,
  InputField,
  SpanText,
  SubmitButton,
  WelcomeContainer,
} from "../assets/styled-components/RegisterLoginContainer";
//import { useDispatch } from 'react-redux'; // Assuming you're using Redux
import { ToastContainer, toast } from "react-toastify"; // Assuming you're using react-toastify
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { colors } from "../assets/styled-components/global/theme";
import useWindowSize from "./useWindowSize";


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isMobile = useWindowSize();
  const authToken = useSelector((state) => state.currentAuthUser.authToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const formData = watch(); // Use watch to get form data

  useEffect(() => {
    if (authToken) {
      navigate("/");
    }

  }, [authToken]);

  const onSubmit = (formData) => {
    const {  password, identifier } = formData;
    const isEmail = identifier.includes("@");
    const mobno = /^\d+$/.test(identifier) ? parseInt(identifier, 10) : identifier;

    const loginData = isEmail ? { email: identifier, password } : { mobno: /^\d+$/.test(identifier) ? parseInt(identifier, 10) : identifier, password };  

    try {
      dispatch(login(loginData));
      reset();
    } catch (error) {
      toast.error("Not able to login, try again!!", {
        backgroundColor: "red", // Set background color for error message
      });
    }
  };

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        ![
          "fontSize",
          "color",
          "hasBorder",
          "hasWidth",
          "hasBorder",
          "mobileFontSize",
          "justify",
          "padding",
          "align",
        ].includes(prop)
      }
    >
      <ToastContainer className="toast-container" />
      <div>
        <FlexContainer
          direction="column"
          justify="space-around"
          align="center"
          style={{ marginTop: isMobile ? "2.4rem" : "0" }}
        >
          <WelcomeContainer>
            {isMobile && (
              <>
                <StyledText
                  fontSize="37px"
                  fontWeight="500"
                  mobileFontSize="31px"
                >
                  Welcome
                </StyledText>
              </>
            )}
          </WelcomeContainer>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            {isMobile ? (
              <div style={{ textAlign: "center" }}>
                <StyledText
                  fontSize="35px"
                  fontWeight="400"
                  mobileFontSize="22px"
                >
                  Sign in. &nbsp;
                </StyledText>
                <StyledText
                  fontSize="22px"
                  fontWeight="50"
                  mobileFontSize="17px"
                >
                  Already a customer
                </StyledText>
              </div>
            ) : (
              <StyledText
                fontSize="35px"
                fontWeight="400"
                mobileFontSize="27px"
              >
                Sign in
              </StyledText>
            )}
            <FormFieldContainer>
              <StyledText
                fontSize="22px"
                fontWeight="500"
                mobileFontSize="18px"
              >
                Enter your email or mobile number
              </StyledText>
              <InputField
                type="text"
                name="identifier"
                {...formRegister("identifier", {
                  required: "Identifier is required",
                })}
              />
            </FormFieldContainer>
            {errors.identifier && (
              <StyledText color="red">{errors.identifier.message}</StyledText>
            )}

            <FormFieldContainer>
              <StyledText
                fontSize="22px"
                fontWeight="500"
                mobileFontSize="18px"
              >
                Password
              </StyledText>
              <InputField
                type={showPassword ? "text" : "password"}
                name="password"
                {...formRegister("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
            </FormFieldContainer>
            {errors.password && (
              <StyledText color="red">{errors.password.message}</StyledText>
            )}

            <SubmitButton type="submit" fontSize="27px">
              Continue
            </SubmitButton>
            <StyledText fontSize="18px">
              By continuing, you agree to Musicart privacy notice and conditions
              of use.
            </StyledText>
          </FormContainer>
          <SpanText fontSize="20px">New to Musicart?</SpanText>
          <SubmitButton
            bordercolor="transparent"
            hasBorder
            hasWidth="95%"
            hasmargin="0 0.5rem"
            type="submit"
            onClick={handleClick}
          >
            Create your Musicart account
          </SubmitButton>
        </FlexContainer>
      </div>
    </StyleSheetManager>
  );
};

export default LoginForm;

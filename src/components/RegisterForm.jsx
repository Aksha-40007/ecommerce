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
  SubmitButton,
  WelcomeContainer,
} from "../assets/styled-components/RegisterLoginContainer";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify"; 
import { register } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import useWindowSize from "./useWindowSize";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isMobile = useWindowSize();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.currentAuthUser.isAuthenticated
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  //  const dispatch = useDispatch();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const formData = watch(); // Use watch to get form data

  const onSubmit = (formData) => {
    try {
      dispatch(register(formData)); // Assuming login action is defined in Redux
      reset(); // Reset form fields after successful submission
    } catch (error) {
      toast.error("Not able to login, try again!!", {
        backgroundColor: "red", // Set background color for error message
      });
    }
  };

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        ![
          "fontSize",
          "color",
          "fontWeight",
          "mobileFontSize",
          "androidFontSize",
          " hasMargin",
          "justify",
          "padding",
          "align"
        ].includes(prop)
      }
    >
           <ToastContainer
              className="toast-container"
              />
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
                  fontSize="35px"
                  fontWeight="500"
                  mobileFontSize="28px"
                  androidFontSize="20px"
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
                  fontSize="28px"
                  fontWeight="500"
                  mobileFontSize="20px"
                  androidFontSize="16px"
                >
                  Create Account. &nbsp;
                </StyledText>
                <StyledText
                  fontSize="20px"
                  fontWeight="100"
                  mobileFontSize="17px"
                  androidFontSize="12px"
                >
                  Don’t have an account?
                </StyledText>
              </div>
            ) : (
              <StyledText
                fontSize="28px"
                fontWeight="500"
                mobileFontSize="22px"
              >
                Create Account
              </StyledText>
            )}
            <FormFieldContainer>
              <StyledText
                fontSize="20px"
                fontWeight="500"
                mobileFontSize="18px"
                androidFontSize="14px"
              >
                Your name
              </StyledText>
              <InputField
                type="text"
                name="name"
                {...formRegister("name", { required: "Name is required" })}
              />
            </FormFieldContainer>
            {errors.name && (
              <StyledText color="red">{errors.name.message}</StyledText>
            )}

            <FormFieldContainer>
              <StyledText
                fontSize="20px"
                fontWeight="500"
                mobileFontSize="18px"
                androidFontSize="14px"
              >
                Mobile number
              </StyledText>
              <InputField
                type="tel"
                name="mobno"
                {...formRegister("mobno", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Mobile number must be exactly 10 digits long",
                  },
                })}
              />
            </FormFieldContainer>
            {errors.mobno && (
              <StyledText color="red">{errors.mobno.message}</StyledText>
            )}

            <FormFieldContainer>
              <StyledText
                fontSize="20px"
                fontWeight="500"
                mobileFontSize="18px"
                androidFontSize="14px"
              >
                Email Id
              </StyledText>
              <InputField
                type="email"
                name="email"
                {...formRegister("email", { required: "Email is required" })}
              />
            </FormFieldContainer>
            {errors.email && (
              <StyledText color="red">{errors.email.message}</StyledText>
            )}

            <FormFieldContainer>
              <StyledText
                fontSize="20px"
                fontWeight="500"
                mobileFontSize="18px"
                androidFontSize="14px"
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
            <StyledText fontSize="12px" fontWeight="600" androidFontSize="10px">
              By enrolling your mobile phone number, you consent to receive
              automated security notifications via text message from Musicart.
              Message and data rates may apply.
            </StyledText>
            <SubmitButton type="submit" fontSize="25px" androidFontSize="16px">
              Continue
            </SubmitButton>
            <StyledText fontSize="15px" androidFontSize="11px">
              By continuing, you agree to Musicart privacy notice and conditions
              of use.
            </StyledText>
          </FormContainer>
          <StyledText
            fontSize="18px"
            fontWeight="600"
            androidFontSize="16px"
            style={{ marginBottom: "4rem" }}
          >
            Already have an account?
            <a href="/login" style={{ color: "black" }}>
              Sign in
            </a>
          </StyledText>
        </FlexContainer>
      </div>
    </StyleSheetManager>
  );
};

export default RegisterForm;

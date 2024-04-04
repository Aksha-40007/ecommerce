// ReviewItemsSection.js
import React from "react";
import {
  OrderedImageContainer,
  ImagesOuterContainer,
  ImagesContainer,
} from "../assets/styled-components/OrderContainer";
import { colors } from "../assets/styled-components/global/theme";
import {
  FlexContainer,
  Image,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import { StyleSheetManager } from "styled-components";
import useWindowSize from "./useWindowSize";

const ReviewItemsSection = ({
  selectedProduct,
  cartProducts,
  handleImageClick,
}) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const isMobile = useWindowSize();
  if (!cartProducts) {
    return <div>Loading...</div>;
  }
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
          "androidFontSize",
        ].includes(prop)
      }
    >
      {isMobile ? (
        <FlexContainer direction="column">
          <StyledText
            fontSize="24px"
            color={colors.ordertextcolor}
            androidFontSize="20px"
          >
            3. Review items and delivery
          </StyledText>
          <FlexContainer direction="column" gap="0.5rem">
            <OrderedImageContainer>
              <ImagesOuterContainer>
                <>
                  {cartProducts?.map((product, index) => (
                    <ImagesContainer
                      key={index}
                      onClick={() => handleImageClick(product)}
                    >
                      {product.productPictures &&
                        product.productPictures.length > 0 && (
                          <Image
                            src={`${imageUrl}/${product.productPictures[0].img}`}
                            alt="images"
                            width="80px"
                          />
                        )}
                    </ImagesContainer>
                  ))}
                </>
              </ImagesOuterContainer>
            </OrderedImageContainer>
            <div>
              {selectedProduct && (
                <>
                  <StyledText
                    fontSize="22px"
                    fontWeight="600"
                    androidFontSize="16px"
                  >
                    {selectedProduct?.name}
                  </StyledText>
                  <br />
                  <StyledText
                    fontSize="22px"
                    color={colors.cartordergreycolor}
                    androidFontSize="16px"
                  >
                    Colour : {selectedProduct?.color}
                  </StyledText>
                  <br />
                  <StyledText
                    fontSize="22px"
                    color={colors.cartordergreycolor}
                    androidFontSize="16px"
                  >
                    {" "}
                    {selectedProduct?.availability
                      ? "In Stock"
                      : "Out of Stock"}
                  </StyledText>
                </>
              )}
            </div>
            <StyledText fontSize="18px" androidFontSize="16px">
              Estimated delivery :<br />
              Monday — FREE Standard Delivery
            </StyledText>
          </FlexContainer>
        </FlexContainer>
      ) : (
        <FlexContainer
          gap= "3.5rem"
          padding= "0 0 0 1rem"
        >
          <StyledText
            fontSize="24px"
            color={colors.ordertextcolor}
            androidFontSize="20px"
          >
            3. Review items and delivery
          </StyledText>
          <FlexContainer direction="column" gap="0.5rem">
            <OrderedImageContainer>
              <ImagesOuterContainer>
                <>
                  {cartProducts?.map((product, index) => (
                    <ImagesContainer
                      key={index}
                      onClick={() => handleImageClick(product)}
                    >
                      {product.productPictures &&
                        product.productPictures.length > 0 && (
                          <Image
                            src={`${imageUrl}/${product.productPictures[0].img}`}
                            alt="images"
                            width="80px"
                          />
                        )}
                    </ImagesContainer>
                  ))}
                </>
              </ImagesOuterContainer>
            </OrderedImageContainer>
            <div>
              {selectedProduct && (
                <>
                  <StyledText
                    fontSize="22px"
                    fontWeight="600"
                    androidFontSize="16px"
                  >
                    {selectedProduct?.name}
                  </StyledText>
                  <br />
                  <StyledText
                    fontSize="22px"
                    color={colors.cartordergreycolor}
                    androidFontSize="16px"
                  >
                    Colour : {selectedProduct?.color}
                  </StyledText>
                </>
              )}
            </div>
            <StyledText fontSize="18px" androidFontSize="16px">
              Estimated delivery :<br />
              Monday — FREE Standard Delivery
            </StyledText>
          </FlexContainer>
        </FlexContainer>
      )}
    </StyleSheetManager>
  );
};

export default ReviewItemsSection;

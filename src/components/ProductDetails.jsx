import React, { useEffect, useState } from "react";
import {
  Button,
  FlexContainer,
  Image,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import { colors } from "../assets/styled-components/global/theme";
import {
  DescriptionContainer,
  ProductDetailsContainer,
  ProductImageContainer,
  Star,
  StarRatingContainer,
} from "../assets/styled-components/ProductDetailsContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/slices/productSlice";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductDescription from "./ProductDescription";
import ProductImages from "./ProductImages";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ productId }) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId !== undefined) {
      dispatch(fetchProductById(productId));
    }
  }, [productId]);

  const productById = useSelector(
    (state) => state.products?.productById?.product
  );

  const emptyStars = 5 - productById?.rating;
  const filledStars = productById?.rating;
  if (!productById) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };

  const handleProductClick = () => {
    navigate("/");
  };

  return (
    <ProductDetailsContainer>
      <FlexContainer direction="column" gap="0.5rem" margin="0 1.5rem 2rem" style={{width: "90%"}}>
        <Button
          width="200px"
          height="2rem"
          borderRadius="10px"
          backgroundColor={colors.headerfooterbgcolor}
          color={colors.whitetextcolor}
          fontSize="25px"
          fontWeight="500"
          onClick={handleProductClick}
        >
          Back to products
        </Button>
        <StyledText fontSize="22px" fontWeight="600">
          {productById.summary}
        </StyledText>
        <FlexContainer
          justify="center"
          align="center"
          gap="2.5rem"
          margin="0 2rem"
        >
          <ProductImageContainer>
            <Image
              src={`${imageUrl}/${productById.productPictures[0].img}`}
              height="280px"
            />
          </ProductImageContainer>
          <DescriptionContainer>
            <StyledText fontSize="1.5rem" fontWeight="600">
              {productById.name}
            </StyledText>
            <StarRatingContainer>
              <FlexContainer align="center" style={{ height: "50px" }}>
                <div>
                  {[...Array(filledStars)].map((_, index) => (
                    <Star key={index} filled={String(true)}>
                      <FontAwesomeIcon icon={faStar} size="2xs" />
                    </Star>
                  ))}
                  {[...Array(emptyStars)].map((_, index) => (
                    <Star key={filledStars + index}>
                      <FontAwesomeIcon
                        icon={faStar}
                        size="2xs"
                        style={{ color: `${colors.grey}` }}
                      />
                    </Star>
                  ))}
                </div>
                <StyledText fontSize="1.5rem">(50 Customer reviews)</StyledText>
              </FlexContainer>
            </StarRatingContainer>
            <StyledText fontSize="18px" fontWeight="600">
              Price - ₹ {productById.price.toLocaleString()}
            </StyledText>
            <StyledText
              fontSize="17px"
              fontWeight="500"
            >{`${productById.color} | ${productById.headphonetype}`}</StyledText>
            <StyledText fontSize="16px" fontWeight="500">
              About this item
            </StyledText>
            <ProductDescription description={productById.description} />
            <StyledText fontSize="20px" fontWeight="600">
              Available -{" "}
              <StyledText fontSize="18px" fontWeight="500">
                {productById.availability === true
                  ? "In stock"
                  : "Out of stock"}
              </StyledText>
            </StyledText>
            <StyledText fontSize="18px" fontWeight="600">
              Brand -{" "}
              <StyledText fontSize="18px" fontWeight="500">
                {productById.company}
              </StyledText>
            </StyledText>
          </DescriptionContainer>
        </FlexContainer>
        <FlexContainer gap="5rem">
          <ProductImages productPictures={productById.productPictures} />
          <FlexContainer
            direction="column"
            justify="center"
            align="center"
            gap="0.5rem"
          >
            <Button
              width="300px"
              height="2.5rem"
              borderRadius="25px"
              backgroundColor={colors.addtocart}
              onClick={handleClick}
            >
              Add to cart
            </Button>
            <Button
              width="300px"
              height="2.5rem"
              borderRadius="25px"
              backgroundColor={colors.buynow}
              onClick={handleClick}
            >
              Buy Now
            </Button>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;

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
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductDescription from "./ProductDescription";
import ProductImages from "./ProductImages";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileProductDetails = ({ productId }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
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
      <FlexContainer direction="column" gap="0.5rem" style={{ width: "100%" }}>
        <Button
          width="45px"
          height="2.7rem"
          borderRadius="50%"
          backgroundColor={colors.whitetextcolor}
          color={colors.black}
          style={{ boxShadow: "0px 1px 4px 0px #00000054" }}
          margin="0.5rem"
          onClick={handleProductClick}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button
          width="360px"
          height="2.5rem"
          borderRadius="10px"
          backgroundColor={colors.buynow}
          onClick={handleClick}
        >
          Buy Now
        </Button>
        <Slider {...settings}>
          {productById.productPictures.map((picture, index) => (
            <ProductImageContainer key={index}>
              <Image
                src={`${imageUrl}/${picture.img}`}
                height="260px"
                width="100%"
                style={{objectFit: "contain"}}
              />
            </ProductImageContainer>
          ))}
        </Slider>
        <StyledText fontSize="1.5rem" fontWeight="650" padding="1.5rem 0 0 0">
              {productById.name}
            </StyledText>
        <FlexContainer align="center" style={{ height: "40px" }}>
                <div>
                  {[...Array(filledStars)].map((_, index) => (
                    <Star key={index} filled={String(true)}>
                      <FontAwesomeIcon icon={faStar} size="xl" />
                    </Star>
                  ))}
                  {[...Array(emptyStars)].map((_, index) => (
                    <Star key={filledStars + index}>
                      <FontAwesomeIcon
                        icon={faStar}
                        size="xl"
                        style={{ color: `${colors.grey}` }}
                      />
                    </Star>
                  ))}
                </div>
                <StyledText fontSize="18px">(50 Customer reviews)</StyledText>
            </FlexContainer>
            <StyledText fontSize="16px" fontWeight="500" padding="0rem 1.25rem 0 0" style={{whiteSpace:"wrap"}}>
              {productById.summary}
            </StyledText>
            <StyledText
              fontSize="16px"
              fontWeight="600"
            >{`${productById.color} | ${productById.headphonetype}`}</StyledText>
                        <StyledText fontSize="16px" fontWeight="500">
              About this item
            </StyledText>
            <ProductDescription description={productById.description} />
            <StyledText fontSize="18px" fontWeight="600">
              Available -{" "}
            <StyledText fontSize="16px" fontWeight="500">
                {productById.availability === true
                  ? "In stock"
                  : "Out of stock"}
              </StyledText>
              </StyledText>

            <StyledText fontSize="18px" fontWeight="600">
              Brand -{" "}
              <StyledText fontSize="16px" fontWeight="500">
                {productById.company}
              </StyledText>
            </StyledText>
            <Button
              width="360px"
              height="2.5rem"
              borderRadius="10px"
              backgroundColor={colors.addtocart}
              onClick={handleClick}
            >
              Add to cart
            </Button>
            <Button
               width="360px"
               height="2.5rem"
               borderRadius="10px"
               backgroundColor={colors.buynow}
               margin="0 0 1rem 0"
               onClick={handleClick}
            >
              Buy Now
            </Button>
      </FlexContainer>
    </ProductDetailsContainer>
  );
};

export default MobileProductDetails;

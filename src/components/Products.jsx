import React, { useEffect } from "react";
import {
  CircleContainer,
  DetailsContainer,
  FlexProductContainer,
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../assets/styled-components/ProductContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/slices/productSlice";
import {
  Button,
  FlexContainer,
  Image,
  StyledText,
} from "../assets/styled-components/global/GlobalStyles";
import { StyleSheetManager } from "styled-components";
import cartonimage from "../assets/icons/cartforimage.svg";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../assets/styled-components/global/theme";
import { addToCart, getCartProducts } from "../store/slices/cartSlice";

const Products = ({ viewMode }) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = useSelector(
    (state) => state.products.allProducts?.products
  );
  const filteredProducts = useSelector(
    (state) => state.products?.filterProducts?.products
  );
  const token = useSelector((state)=>state.currentAuthUser?.authToken);
  const productsToDisplay = filteredProducts || allProducts;
  
  useEffect(()=>{
    dispatch(fetchAllProducts());
  },[]);

  useEffect(() => {
    if (!allProducts) {
      dispatch(fetchAllProducts());
    }
  }, [allProducts, filteredProducts]);

  if (!productsToDisplay) {
    return <StyledText fontSize="50px" androidFontSize="16px" padding="4rem 1rem">Products Are Loading... Please wait!!!</StyledText>;
  }

  const navigateToProducts = (productId) => {
    navigate(`/productdetails/${productId}`);
  };

  const handleClick = (e,productId) => {
    e.stopPropagation();
    dispatch(addToCart({productId,quantity:1,token})).then(()=>{
      dispatch(getCartProducts(token));
    });
  };

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        ![
          "productsPerRow",
          "viewMode",
          "height",
          "width",
          "fontSize",
          "color",
          "fontWeight",
          "androidImageWidth",
          "androidImageHeight",
          "androidFontSize",
          "borderRadius"
        ].includes(prop)
      }
    >
      <ProductContainer>
        <FlexProductContainer viewMode={viewMode}>
          {Array.isArray(productsToDisplay) &&
            productsToDisplay.map((product, index) => (
              <div
              key={product._id}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  outline: "none",
                  cursor: "pointer",
                }}
                onClick={()=>navigateToProducts(product._id)}  
              >
                {" "}
                {/* Link wrapped around ProductDetails */}
                {viewMode === "grid" ? (
                  <ProductDetails viewMode={viewMode}>
                    <ImageContainer viewMode={viewMode}>
                      <Image
                        src={`${imageUrl}/${product.productPictures[0].img}`}
                        alt=""
                        height="130px"
                        width="150px"
                        androidImageWidth="100px"
                        androidImageHeight="100px"
                      />
                      {token && (
                        <CircleContainer onClick={(event)=>handleClick(event,product._id)}>
                          <Image
                            src={cartonimage}
                            alt="cart Icon"
                            height="40px"
                            width="48px"
                            androidImageWidth="40px"
                            androidImageHeight="34px"
                          />
                        </CircleContainer>
                      )}
                    </ImageContainer>
                    <DetailsContainer viewMode={viewMode}>
                      <StyledText
                        fontSize="18px"
                        fontWeight="600"
                        androidFontSize="12px"
                      >
                        {product.name}
                      </StyledText>
                      <br />
                      <StyledText
                        fontSize="18px"
                        fontWeight="600"
                        androidFontSize="12px"
                      >
                        Price - ₹ {product.price.toLocaleString()}
                      </StyledText>
                      <br />
                      <StyledText
                        fontSize="18px"
                        fontWeight="600"
                        androidFontSize="9px"
                      >{`${product.color} | ${product.headphonetype}`}</StyledText>
                    </DetailsContainer>
                  </ProductDetails>
                ) : (
                  <ProductDetails viewMode={viewMode}>
                    <FlexContainer justify="center" align="center">
                      <ImageContainer viewMode={viewMode}>
                        <Image
                          src={`${imageUrl}/${product.productPictures[0].img}`}
                          alt=""
                          height="100px"
                          width="150px"
                          androidImageWidth="90px"
                          androidImageHeight="90px"
                        />
                        {token && (
                          <CircleContainer onClick={(event)=>handleClick(event,product._id)}>
                            <Image
                              src={cartonimage}
                              alt="cart Icon"
                              height="40px"
                              width="48px"
                              androidImageWidth="24px"
                              androidImageHeight="28px"
                            />
                          </CircleContainer>
                        )}
                      </ImageContainer>
                      <DetailsContainer>
                        <StyledText
                          fontSize="28px"
                          fontWeight="600"
                          androidFontSize="12px"
                        >
                          {product.name}
                        </StyledText>
                        <br />
                        <StyledText
                          fontSize="20px"
                          fontWeight="500"
                          androidFontSize="12px"
                        >
                          Price - ₹ {product.price.toLocaleString()}
                        </StyledText>
                        <br />
                        <StyledText
                          fontSize="20px"
                          fontWeight="500"
                          androidFontSize="9px"
                        >{`${product.color} | ${product.headphonetype}`}</StyledText>
                        <br />
                        <StyledText
                          fontSize="20px"
                          fontWeight="500"
                          androidFontSize="12px"
                        >
                          {product.summary}
                        </StyledText>
                        <br />
                        <Button
                          width="150px"
                          height="2rem"
                          fontSize="20px"
                          margin="0.5rem 0 0 0"
                          borderRadius="15px"
                          backgroundColor={colors.headerfooterbgcolor}
                          color={colors.whitetextcolor}
                          onClick={()=>navigateToProducts(product._id)}
                        >
                          Details
                        </Button>
                      </DetailsContainer>
                    </FlexContainer>
                  </ProductDetails>
                )}
              </div>
            ))}
        </FlexProductContainer>
      </ProductContainer>
    </StyleSheetManager>
  );
};

export default Products;

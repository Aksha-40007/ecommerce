import React, { useEffect, useState } from 'react'
import { StyleSheetManager } from 'styled-components'
import Header from '../components/Header'
import { FlexContainer } from '../assets/styled-components/global/GlobalStyles'
import Navbar from '../components/Navbar'
import ProductDetails from '../components/ProductDetails';
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'
import MobileViewFooter from '../components/MobileviewFooter'
import MobileProductDetails from '../components/MobileProductDetails'
import useWindowSize from '../components/useWindowSize'


const ProductDetailsPage = () => {
  const { productId } = useParams();
  const isMobile = useWindowSize();
  
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
      ].includes(prop)
    }
  >
    <Header />
    <FlexContainer
      direction="column"
      gap="0.2rem"
      style={{ paddingTop: isMobile? "1.5rem": "2rem", zIndex: "1" }}
    >
      <div style={{ marginLeft: isMobile?"1.5rem":"3rem" }}>
        <Navbar productId={productId}/>
        {isMobile &&<Searchbar/> }
        {isMobile && <MobileProductDetails/>}
        {productId!==undefined && !isMobile && <ProductDetails product={productId} />}
      </div>
    </FlexContainer>
    {isMobile ? <MobileViewFooter /> : <Footer />} 
  </StyleSheetManager>
  )
}

export default ProductDetailsPage

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { StyleSheetManager } from 'styled-components'
import { FlexContainer } from '../assets/styled-components/global/GlobalStyles'
import Footer from '../components/Footer'
import CartDetails from '../components/CartDetails'
import Searchbar from '../components/Searchbar'
import MobileViewFooter from '../components/MobileviewFooter'
import MobileCartDetails from '../components/MobileCartDetails'
import useWindowSize from '../components/useWindowSize'

const CartDetailsPage = () => {
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
        "androidFontSize"
      ].includes(prop)
    }
  >
    <div>
      <Header/>
      <FlexContainer
          direction="column"
          gap="0.2rem"
          style={{ paddingTop: isMobile? "1.5rem": "2rem", zIndex: "1" }}
        >
        <div className='home'>
        <Navbar/>
        {isMobile && <Searchbar />}
        {isMobile ? <MobileCartDetails isMobile={isMobile}/>:<CartDetails/>}
        </div>

        </FlexContainer>
        {isMobile ? <MobileViewFooter /> : <Footer />} 
    </div>
    </StyleSheetManager>
  )
}

export default CartDetailsPage

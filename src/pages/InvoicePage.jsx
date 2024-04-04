import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { FlexContainer } from '../assets/styled-components/global/GlobalStyles'
import InvoiceDetails from '../components/InvoiceDetails'
import { StyleSheetManager } from 'styled-components'
import Footer from '../components/Footer'
import MobileViewFooter from '../components/MobileviewFooter'
import useWindowSize from '../components/useWindowSize'
import MobileHeader from '../components/MobileHeader'

const InvoicePage = () => {
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
        {isMobile ?<MobileHeader/>:<Header/>}
    <FlexContainer
      direction="column"
      gap="0.2rem"
      style={{  paddingTop: isMobile? "2.5rem": "2rem", zIndex: "1" }}
    >
      <div style={{marginLeft: isMobile?"1.5rem":"3rem" }}>
        <Navbar />
        { <InvoiceDetails />}
      </div>
    </FlexContainer>
    {isMobile ? <MobileViewFooter /> : <Footer />} 
  </StyleSheetManager>
  )
}

export default InvoicePage

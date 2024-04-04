import React, { useEffect, useState } from 'react'
import OrderDetails from '../components/OrderDetails'
import { StyleSheetManager } from 'styled-components'
import Header from '../components/Header'
import { FlexContainer } from '../assets/styled-components/global/GlobalStyles'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileViewFooter from '../components/MobileviewFooter'
import MobileHeader from '../components/MobileHeader'
import MobileOrderDetails from '../components/MobileOrderDetails'
import useWindowSize from '../components/useWindowSize'
import { MobileOrderView } from '../assets/styled-components/OrderContainer'

const OrderDetailsPage = () => {
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
    <MobileOrderView>
    {isMobile ?<MobileHeader/>:<Header/>}
      <FlexContainer
          direction="column"
          gap="0.2rem"
          style={{ paddingTop: "3rem", zIndex: "1" }}
        >
        <div className='home'>
        <Navbar/>
        {isMobile?<MobileOrderDetails/>:<OrderDetails/>}
        </div>

        </FlexContainer>
        {isMobile ? <MobileViewFooter /> : <Footer />} 
    </MobileOrderView>
    </StyleSheetManager>
  )
}

export default OrderDetailsPage

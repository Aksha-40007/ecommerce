import React, { useState } from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import { FlexContainer } from "../assets/styled-components/global/GlobalStyles";
import { StyleSheetManager } from "styled-components";
import RectangleHeader from "../components/RectangleHeader";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { HomepageContainer } from "../assets/styled-components/HomepageContainer";
import useWindowSize from "../components/useWindowSize";
import MobileHeader from "../components/MobileHeader";
import MobileViewFooter from "../components/MobileviewFooter";
import Feedback from "../components/Feedback";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const isMobile = useWindowSize();
  const isAuthenticated = useSelector((state)=>state.currentAuthUser?.isAuthenticated);
  
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };
  

  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        ![
          "borderRadius",
          "backgroundColor",
          "justify",
          "padding",
          "align",
          "gap",
          "margin",
          "androidFontSize"
        ].includes(prop)
      }
    >
      <HomepageContainer>
      {isMobile ?<MobileHeader/>:<Header/>}
        <FlexContainer
          direction="column"
          gap="0.2rem"
          style={{ paddingTop: "3rem", zIndex: "1" }}
        >
          <div className="home">
            <Navbar />
            <RectangleHeader />
            <Searchbar />
            <div
              className="scrollable-content"
              style={{ maxHeight: "calc(100vh - 220px)" }}
            >
              <div style={{ overflowX: isMobile? "auto":"hidden" }}>
                <Filters onViewModeChange={handleViewModeChange} />
              </div>
              <div style={{ overflowY: isMobile? "auto":"hidden" }}>
                <Products viewMode={viewMode} />
              </div>
            </div>
          </div>

          {isMobile ? <MobileViewFooter /> : <Footer />} 
        {isAuthenticated && <Feedback/>}
        </FlexContainer>
      </HomepageContainer>
    </StyleSheetManager>
  );
};

export default HomePage;

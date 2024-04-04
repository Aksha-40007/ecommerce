import React, { useState } from 'react'
import { FlexContainer } from '../assets/styled-components/global/GlobalStyles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchContainerMobileView, SearchbarContainer, TextInput } from '../assets/styled-components/SearchbarContainer';
import { StyleSheetManager } from 'styled-components';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../store/slices/productSlice';

const Searchbar = () => {
  const dispatch = useDispatch(); // Initialize the dispatch function

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(searchProducts(searchTerm));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <StyleSheetManager
    shouldForwardProp={(prop) =>
      !["fontSize", "color", "fontWeight"].includes(prop)
    }
  >
    <SearchContainerMobileView>
    <SearchbarContainer>
    <FlexContainer direction="row" gap="1rem" margin="0.5rem 1rem" align="center">
    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#666666",}} onClick={handleSearch}/>       
    <TextInput placeholder='Search Product' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyPress}/>
    </FlexContainer>
    </SearchbarContainer>
    </SearchContainerMobileView>
  </StyleSheetManager>
  )
}

export default Searchbar

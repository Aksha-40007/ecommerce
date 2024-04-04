import React, { useEffect, useState } from "react";
import {
  FlexContainer,
} from "../assets/styled-components/global/GlobalStyles";
import {
  FilterContainer,
  FilterImage,
} from "../assets/styled-components/FilterContainer";
import grid from "../assets/icons/grid.svg";
import list from "../assets/icons/list.svg";
import { fetchAllProducts, filterProducts } from "../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import SortbyFilter from "./SortbyFilter";
import FilterOptions from "./FilterOptions";
import { options, Sortbyoptions } from "../utils/filterOptions";

const Filters = ({ onViewModeChange }) => {
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [viewMode, setViewMode] = useState("grid");
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  const allProducts = useSelector((state) => state.products?.allproducts?.products);

  const handleOptionChange = (key, value) => {
    if (value !== "Featured") {
      let processedValue = value;
      if (key === "price") {
        processedValue = value.replace(/[₹, ]/g, "");
      } else if (key === "sortby") {
        processedValue = Sortbyoptions[value];
      }

    const updatedOptions = {
      ...selectedOptions,
      [key]: processedValue,
    };
    setSelectedOptions(updatedOptions);

    const { price, colour, ...otherOptions } = updatedOptions;
    if (colour !== undefined) {
      otherOptions.color = colour;
      delete otherOptions.colour; // Remove the old key
    }

    const processedOptions = {};
    Object.keys(otherOptions).forEach((key) => {
      const processedKey = key.replace(/\s+/g, "");
      processedOptions[processedKey] = otherOptions[key];
    });

    const getPriceParam = (price) => {
      if (typeof price === "string") {
        return price; 
      } else if (Array.isArray(price)) {
        return `${price[0]}-${price[1]}`;
      }
    };

    const queryParams = new URLSearchParams({
      ...processedOptions,
      ...(price !== undefined && { price: getPriceParam(price) }),
    }).toString();

    dispatch(filterProducts(queryParams));
  }else if(value==="Featured"){
    dispatch(fetchAllProducts());
    setSelectedOptions({});
  }
};
  
useEffect(() => {
  }, [allProducts]);

  const toggleViewMode = () => {
    const newViewMode = viewMode === "grid" ? "list" : "grid";
    setViewMode(newViewMode);
    onViewModeChange(newViewMode); // Notify parent component about the mode change
  };

  const handleWindowResize = () => {
    setWindowWidth(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <FilterContainer>
      <FlexContainer gap="2rem" style={{ alignContent: "center" }}>
        <FlexContainer justify="center" align="center" gap="1rem">
          <FilterImage
            src={grid}
            height="35px"
            width="35px"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setViewMode("grid");
              toggleViewMode();
            }}
          />
          <FilterImage
            src={list}
            height="28px"
            width="40px"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setViewMode("list");
              toggleViewMode();
            }}
          />
        </FlexContainer>
        {windowWidth < 432 ? (
          <FlexContainer justify="space-between" style={{width:"960px"}} >
            <SortbyFilter
              handleOptionChange={handleOptionChange}
              Sortbyoptions={Sortbyoptions}
            />
            <FilterOptions
              options={options}
              handleOptionChange={handleOptionChange}
            />
          </FlexContainer>
        ) : (
          <FlexContainer justify="space-between" gap="13.5rem" >
            <FilterOptions
              options={options}
              handleOptionChange={handleOptionChange}
            />
            <SortbyFilter
              handleOptionChange={handleOptionChange}
              Sortbyoptions={Sortbyoptions}
            />
          </FlexContainer>
        )}
      </FlexContainer>
    </FilterContainer>
  );
};

export default Filters;

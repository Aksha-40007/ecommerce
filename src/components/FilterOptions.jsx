import React, { useState } from "react";
import {
  SelectButton,
  DropdownList,
  DropdownItem,
} from "../assets/styled-components/FilterContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../assets/styled-components/global/theme";
import { FlexContainer } from "../assets/styled-components/global/GlobalStyles";
import useWindowSize from "./useWindowSize";

const FilterOptions = ({ options, handleOptionChange }) => {
  const isMobile = useWindowSize();
  const initialDropdownStates = Object.fromEntries(
    Object.keys(options).map((optionName) => [optionName, false])
  );

  const [dropdownStates, setDropdownStates] = useState(initialDropdownStates);

  const toggleDropdown = (optionName) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [optionName]: !prevState[optionName], 
    }));
  };

  const handleItemClick = (optionName, option) => {
    handleOptionChange(optionName.trim().toLowerCase(), option);
    setDropdownStates(initialDropdownStates); 
  };

  const getOptionLeft = (optionName) => {
    switch (optionName) {
      case 'Headphone type':
        return '44%';
      case 'Company':
        return '38%';
      case 'Color':
        return '38%';
      case 'Price':
        return '55%';
      default:
        return '35%'; 
    }
  };

  return (
    <FlexContainer gap="2rem" justify="center" align="center" style={{ overflowX: "auto" }}>
      {Object.entries(options).map(([optionName, values]) => (
        <div key={optionName}>
          <SelectButton
            width="180px"
            height="2.5rem"
            fontWeight="600"
            borderRadius="25px"
            color="black"
            backgroundColor={colors.filterbgcolor}
            onClick={() => toggleDropdown(optionName)}
          >
            {optionName} <FontAwesomeIcon icon={faAngleDown} />
          </SelectButton>
          {dropdownStates[optionName] && (
            <DropdownList left={getOptionLeft(optionName)} >
              {values.map((option, index) => (
                <DropdownItem
                  key={optionName+index}
                  onClick={() => handleItemClick(optionName, option)}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </div>
      ))}
    </FlexContainer>
  );
};

export default FilterOptions;

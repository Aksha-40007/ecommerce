import React, { useState } from "react";
import {
  SelectButton,
  DropdownList,
  DropdownItem,
} from "../assets/styled-components/FilterContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../assets/styled-components/global/theme";
import useWindowSize from "./useWindowSize";

const SortbyFilter = ({ handleOptionChange, Sortbyoptions }) => {
  const isMobile = useWindowSize();
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown open/close

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  const handleItemClick = (option) => {
    handleOptionChange("sortby", option);
    setIsOpen(false); // Close the dropdown after item selection
  };

  return (
    <>
      {isMobile ? (
<>
<SelectButton
          width="185px"
          height="2.5rem"
          fontWeight="600"
          borderRadius="25px"
          backgroundColor="transparent"
          border={`3px solid ${colors.sortbyborder}`}
          onClick={toggleDropdown} 
        >
          Sort by <FontAwesomeIcon icon={faAngleDown} />
        </SelectButton>
          {isOpen && ( 
            <DropdownList left="4%" style={{top:"29%"}} >
              {Object.keys(Sortbyoptions).map((option, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleItemClick(option)}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
</>
      ) : (
        <>
        <SelectButton
          width="240px"
          height="2.5rem"
          fontWeight="600"
          borderRadius="25px"
          backgroundColor="transparent"
          border={`3px solid ${colors.sortbyborder}`}
          onClick={toggleDropdown} // Toggle dropdown on click
        >
          Sort by : Featured <FontAwesomeIcon icon={faAngleDown} />
        </SelectButton>
          {isOpen && ( // Render dropdown list only if isOpen is true
            <DropdownList right="8%">
              {Object.keys(Sortbyoptions).map((option, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleItemClick(option)}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </>
      )}
    </>
  );
};

export default SortbyFilter;

import React from 'react';
import { FlexContainer, StyledText } from '../assets/styled-components/global/GlobalStyles';

const ProductDescription = ({ description }) => {
  // Split the description into bullet points
  const bulletPoints = description.split(';');

  return (
    <div>
       {bulletPoints.map((point, index) => {
        const trimmedPoint = point.trim();
        const firstChar = trimmedPoint.charAt(0).toUpperCase();
        const restOfText = trimmedPoint.slice(1);

        return (
          <div key={index}>
            <FlexContainer align="start" margin="0 0 0 0">
              <span style={{ fontSize: '1.4rem', margin:'0 2px 0 0'}}>&bull;</span>
              <StyledText fontSize="16px" fontWeight="500" padding="0.4rem 1.2rem 0 0" >
                {firstChar + restOfText}
              </StyledText>
            </FlexContainer>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDescription;

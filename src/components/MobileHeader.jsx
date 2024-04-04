import React from 'react'
import { SearchContainerMobileView } from '../assets/styled-components/SearchbarContainer'
import LogoImage from "../assets/images/logomusic.png";
import { FlexContainer, Image, StyledText } from '../assets/styled-components/global/GlobalStyles';
import { colors } from '../assets/styled-components/global/theme';

const MobileHeader = () => {
  return (
    <SearchContainerMobileView>
       <FlexContainer
          direction="row"
          align="baseline"
          gap="1rem"
          margin="0.5rem 0rem"
        >
          <Image src={LogoImage} alt="Logo Image" width="22px" height="20px" />
          <StyledText
            fontSize="22px"
            fontWeight="500"
            fontFamily="Roboto"
            color={colors.whitetextcolor}
          >
            Musicart
          </StyledText>
          </FlexContainer>
    </SearchContainerMobileView>
  )
}

export default MobileHeader

import React from 'react'
import { FlexContainer, Image } from '../assets/styled-components/global/GlobalStyles'
import { ProductImageWrapper } from '../assets/styled-components/ProductImagesContainer'

const ProductImages = ({productPictures}) => {
    const imageUrl= import.meta.env.VITE_IMAGE_URL;
    const remainingPictures = productPictures.slice(1);
  return (
    <FlexContainer direction="row" justify="center" align="center" gap="0.8rem">
      {remainingPictures.map((picture, index) => (
      <ProductImageWrapper key={picture.id}>
        <Image
          src={`${imageUrl}/${picture.img}`}
          alt={`Product Image ${index + 1}`}
          height="80px"
          width="120px"
        />
      </ProductImageWrapper>
      ))}
    </FlexContainer>
  )
}

export default ProductImages

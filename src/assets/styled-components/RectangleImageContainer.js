import styled, { css } from "styled-components";

export const Rectanglecontainer = styled.div`
  width: 95%;
  margin: 1.3rem 0 0.5rem 0;
  height: 180px;
  background: linear-gradient(90deg, #7286b4 0%, #e794ce 100%);
  color: #ffffff;
  border-radius: 10px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    min-width: 1350px;
  }

  @media screen and (max-width:432px) and (min-width:340px){
    max-width:430px;
    min-width:360px;
    height: 120px;
    margin: 1.8rem 0 0rem 0;
  }
`;

export const RectangleText = styled.div`
  height: auto;
  width: 40%;
  padding: 1.5rem 1rem;
  margin: 0.8rem 4rem;
  text-align: left;

  @media screen and (min-width: 758px) and (max-width:1400px) {
    width: 80%;
    max-width: 700px;
    min-width:250px;
    height:auto;
    margin: 0.8rem 4rem;
    padding: 2rem 0rem;
    font-size:30px;
  }

  @media screen and (max-width: 432px) and (min-width:340px) {
    width: 62%;
    margin: 0.2rem 0.8rem; 
    padding: 0.8rem 0rem;
  }

`;

export const RectangleImage = styled.img`
  position: absolute;
  z-index: 1;
  top: -32px;
  right: 0;
  width: 350px;
  height: 212px;
  background-position: top right;
  margin-right: 2.5rem;
  object-fit: fill;

  @media screen and (max-width: 768px) {
    ${(props) =>
      props.mobileImageWidth &&
      css`
        width: ${props.mobileImageWidth};
      `}
    ${(props) =>
      props.mobileImageHeight &&
      css`
        height: ${props.mobileImageHeight};
      `}
    top: -32px; /* Adjust position */
    right: 0; /* Center the image horizontally */
    background-position: top right;
    left: 78%;
  }

  @media screen and (max-width:431px) and (min-width:340px){
    max-width:130px;
    min-width:100px;
    height:140px;
    top: -21px;
    left:62%;
  }
  
`;

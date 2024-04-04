import styled from "styled-components";
import { colors } from "./global/theme";

export const ProductDetailsContainer = styled.div`
  display: flex;
  width: 95%;
  height: 80%;
  @media screen and (max-width:432px) and (min-width:340px){
    margin-top:4rem;
    margin-bottom:4rem;
    max-width:432px;
    height:auto;
    overflow-y:auto;
}
`;

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 700px;
  border: 4px solid ${colors.headerfooterbgcolor};
  border-radius: 15px;
  postion: relative;

  @media screen and (max-width:432px) and (min-width:340px){
    height: 280px;
    max-width:360px;
    border: 2px solid ${colors.headerfooterbgcolor};
    border-radius: 10px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 100%;
  margin: 0 1rem;
`;

export const StarRatingContainer = styled.div`
  display: inline-block;
  font-size: 4rem;
  @media screen and (max-width:432px) and (min-width:340px){
    font-size:2rem;
  }
`;

export const Star = styled.span`
  display: inline-block;
  width: 2.8rem;
  height: 0.5rem;
  color: ${({ filled }) =>
    filled === "true" ? `${colors.starcolor}` : "transparent"};
  text-align: center;

  @media screen and (max-width:432px) and (min-width:340px){
    width: 2rem;
    height: 0.5rem;
  }
`;

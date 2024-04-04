import styled from "styled-components";
import { colors } from "./global/theme";

export const CartDetailsContainer = styled.div`
  display: flex;
  width: 96%;
  height: 80%;

  @media screen and (max-width:432px) and (min-width:340px){
    margin-top:2.3rem;
    margin-bottom:4rem;
    width:430px;
    height:auto;
    overflow-y:auto;
}
`;

export const CartGridContainer = styled.div`
  display: grid;
  grid-template-columns: 225px 270px 120px 140px 110px;
  gap: 1rem;

  @media screen and (max-width:432px) and (min-width:340px){
    display: grid;
    grid-template-columns: 180px 200px;
    height: 280px;
    gap: 0.5rem;
    padding:1rem 0 0 0;
    margin-bottom:1rem;

  }
`;
export const PriceGridContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 180px;
`;

export const CartProductContainer = styled.div`
  display: flex;
  flex-direction:column;
  top: 22%;
  width: 102%;
  height: 750px;
  overflow-y:auto;
  verflow-x:hidden;
  @media screen and (max-width:432px) and (min-width:340px){
    top: 16%;
    width: 100%;
    height:auto;
    background-color:${colors.mobileviewbgcolor};
  }
`;

export const CartPriceDetails = styled.div`
  width: 30%;
  height: 90%;
  margin-top: 0rem;
`;

export const CartPriceItem = styled.div`
  height: 80%;
  width: 260px;
  padding: 1rem;
`;

export const CartProduct = styled.div`
  margin: 1rem 0 4rem 2rem;
  width: 70%;
  height: 305px;
  @media screen and (max-width:432px) and (min-width:340px){
    margin: 1rem 0 2rem 2rem;
    height:100%;
    width:90%;
  }
`;

export const CartItemPriceContainer = styled.div`
  width: 67.3%;
  height: 2rem;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 160px;
  border: 2px solid ${colors.headerfooterbgcolor};
  border-radius: 5px;
  text-align: center;

  @media screen and (max-width:432px) and (min-width:340px){
    width: 80px;
    height: 80px;
    border:none;
    margin:0.8rem;
    text-align: center;
  }
`;

import styled from "styled-components";
import { colors } from "./global/theme";

export const ProductContainer = styled.div`
  margin: 0 4rem 1.5rem 4rem;
  width: 85%;
  @media screen and (max-width: 432px) and (min-width:340px)
  {
    width:420px;
    margin: 0 0rem 4rem 2rem;
  }
`;

export const ProductDetails = styled.div`
  width: 95%;
  height:  ${props => props.viewMode !== 'grid' ? '220px':'280px'};
  padding: 0.5rem;
  background-color: white;
  margin:${props => props.viewMode === 'grid'?'0 0 1rem 0':'0'};

  @media screen and (max-width: 432px) and (min-width:340px)
  {
    height:  240px;
    border: 2px solid #CECECE;
    border-radius:3px;
    padding: 0rem;
    margin: 0rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:  ${props => props.viewMode !== 'grid' ? '280px':'98%'};
  height: ${props => props.viewMode !== 'grid' ? '180px':'70%'};
  background-color: ${colors.imagecontainercolor};
  position: relative;
  @media screen and (max-width: 432px) and (min-width:340px)
  {
    width: 167px;
    height: 140px;
  }
`;

export const CircleContainer = styled.div`
  position: absolute;
  z-index: 2;
  box-shadow: 0px 0px 7px 0px #00000040;
  border-radius: 50%;
  background-color: ${colors.whitetextcolor};
  width: 45px;
  height: 2.5rem;
  bottom: 4%;
  right: 14%;

  @media screen and (max-width:432px) and (min-width:340px)
  {
    width: 38px;
    height: 2rem;
    bottom: 6%;
    right: 12%;
  }
`;

export const DetailsContainer = styled.div`
  text-align: left;
  height: 30%;
  gap:0.4rem;
  padding: 1rem;
  width:  ${props => props.viewMode !== 'grid' ? '80%':'100%'};
  white-space: ${props => props.viewMode === "grid" && "nowrap"};
  @media screen and (max-width: 432px) and (min-width:340px)
  {
    width: 100%;
    height:40%;
  }
`;


export const FlexProductContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.viewMode === 'list' ? '100%' : '280px 280px 280px 280px'}; /* Four columns with equal width by default */
  gap: ${props => props.viewMode === 'list' ? '0' : '1rem'}; /* No gap in list view */
  @media screen and (max-width: 432px) and (min-width:340px)
  {
    grid-template-columns: 180px 180px  ;
    gap: 1rem;
    margin-bottom:auto;
  }
`;

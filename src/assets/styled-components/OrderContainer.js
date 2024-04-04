import styled, { css } from "styled-components";
import { colors } from "./global/theme";

export const MobileOrderView = styled.div`
  @media screen and (max-width: 432px) and (min-width:340px) {
    margin-bottom: 2rem;
    width: 430px;
    overflow-y: auto;
    overflow-x: auto;
  }
`;

export const OrderDetailsContainer = styled.div`
  display: flex;
  width: 96%;
  height: 80%;

  @media screen and (max-width: 432px) and (min-width:340px) {
    display: table-cell;
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 420px;
    height: auto;
    overflow-y: auto;
  }
`;

export const OrderItemDetailContainer = styled.div`
  position: fixed;
  top: 22%;
  width: 85%;
  height: 70%;
  overflow-y: auto;

  @media screen and (max-width: 432px) and (min-width:340px) {
    position:relative;
    top: 1%;
    width: 90%;
    height: auto;
    overflow-y:auto;
    margin-left: 1rem;
  }
`;

export const TextAreaContainer = styled.textarea`
  width: 100%;
  height: 80px; /* Adjust the height as needed */
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-top: 8px;
  text-align: left;

  &.zero-len {
    margin-top: 1rem;
    padding: 0px;
    font-size: 20px;
    outline: none;
    border: none;
    resize: none;
  }

  @media screen and (max-width: 385px) {
    width: 80%;
    height:4rem;
    padding: 0px;
    margin-top: 0px;
  }
`;

export const SelectPayment = styled.div`
  position: relative;
`;

export const OrderedImageContainer = styled.div`
  width: 300px;
  height: auto;
  @media screen and (max-width: 385px) {
    width: 150px;
  }
`;

export const ImagesOuterContainer = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 10px;
  grid-auto-flow: row;
`;

export const ImagesContainer = styled.div`
  text-align: center;
  border-radius: 10px;
  width: 92px;
  height: 90px;
  border: 2px solid ${colors.headerfooterbgcolor};
`;

export const RectangleBox = styled.div`
  border: 2px solid ${colors.sortbyborder};
  width: 100%;
  height: 4rem;
  padding: 1rem;
  display: flex;
  align: center;
  gap: 4rem;
  margin-left: 1rem;

  @media screen and (max-width:385px){
    display:none;
  }
`;

export const OrderPriceItem = styled.div`
  border: 2px solid ${colors.sortbyborder};
  height: ${(props) => props.height || "400px"};
  width: 360px;
  padding: 1rem;
  text-align: center;
  border-radius: 5px;
  margin-left: 0.5rem;

  @media screen and (max-width: 385px) {
    border: none;
    overflow-y: auto;
    height: auto;
    width: 280px;
    padding: 0.5rem;
  }
`;

export const HorizontalLine = styled.div`
  width: 98%;
  height: 2px;
  background-color: ${colors.sortbyborder};
  margin: 10px 0;
`;

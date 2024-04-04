import styled from "styled-components";

export const InvoiceDetailsContainer = styled.div`
  display: flex;
  width: 96%;
  height: 80%;
  @media screen and (max-width: 432px) and (min-width:340px) {
    position: fixed;
    width: 380px;
    height: auto;
    overflow-x: auto;
    overflow-y: auto;
  }
`;

export const InvoiceItemDetailContainer = styled.div`
  position: fixed;
  top: 22%;
  width: 90%;
  height: 70%;
  margin-left: 1rem;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 432px) and (min-width:340px) {
    top: 12%;
    width: 88%;
    height: 80%;
    margin-left: 1.5rem;
    padding-bottom:4rem;
  }
`;

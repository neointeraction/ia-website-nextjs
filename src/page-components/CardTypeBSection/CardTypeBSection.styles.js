import styled from "styled-components";

export const CardContainerBlock = styled.div`
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 30px;
    .mob-center {
      display: block;
    }
  }
`;

export const FilterBlock = styled.div`
  width: 70%;
  margin: 30px auto auto auto;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
    .mob-center {
      display: block;
    }
  }
`;

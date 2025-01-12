import styled from "styled-components";

export const Title = styled.h4`
  font-size: 18px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.022em;
`;

export const PortfolioCardContainer = styled.div`
  cursor: pointer;
  .portfolio-img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${Title} {
      text-decoration: underline;
    }
  }
`;

import styled from "styled-components";

export const BannerContainer = styled.section`
  background-image: url(@/../banner-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  padding: 32px 60px;
`;

export const BannerTitle = styled.h2`
  font-size: 38px;
  font-weight: 400;
  color: #0f0f0f;
`;

export const BannerDisplayText = styled.h1`
  font-size: 58px;
  font-weight: 600;
  color: #0f0f0f;
  line-height: 80px;
  width: fit-content;
  span::after {
    content: "";
    background-color: #f7c822;
    display: block;
    width: 100%;
    height: 20px;
    margin-top: -25px;
  }
`;

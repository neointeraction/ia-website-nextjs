import styled, { css } from "styled-components";

export const Section = styled.section`
  ${(props) =>
    props.$hasGreyBg
      ? css`
          background-color: #f3f3f3;
        `
      : props.$hasTexture
      ? css`
          background-image: url(@/../section-texture.png);
          background-repeat: no-repeat;
          background-size: cover;
        `
      : null}
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const SectionTitle = styled.h1`
  text-align: ${(props) => (props.$leftAlign ? "left" : "center")};
  font-size: 38px;
  font-weight: 400;
  color: #0f0f0f;
  width: ${(props) => (props.$leftAlign ? "auto" : "fit-content")};
  margin: auto;
  display: block;
  span {
    display: inline-block;
  }
  .highlight {
    font-weight: 600;
    margin-right: 10px;
    &.hbf {
      margin-left: 10px;
    }
  }
  .highlight::after {
    content: "";
    background-color: #f7c822;
    display: block;
    width: 100%;
    height: 16px;
    margin-top: -22px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    text-align: left;
  }
`;

export const SectionSubTitle = styled.h2`
  text-align: ${(props) => (props.$leftAlign ? "left" : "center")};
  font-size: 20px;
  font-weight: 400;
  color: #282828;
  max-width: 860px;
  margin: 12px auto auto auto;
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
  }
`;

export const MainBannerTitle = styled.h1`
  text-align: ${(props) => (props.$leftAlign ? "left" : "center")};
  font-size: 64px;
  font-weight: 600;
  line-height: 89px;
  color: #0f0f0f;
  width: ${(props) => (props.$leftAlign ? "auto" : "fit-content")};
  margin: auto;
  display: block;
  span {
    display: inline-block;
  }
  .highlight {
    font-weight: 600;
    margin-right: 10px;
    &.hbf {
      margin-left: 10px;
    }
  }
  .highlight::after {
    content: "";
    background-color: #f7c822;
    display: block;
    width: 100%;
    height: 16px;
    margin-top: -36px;
  }
  @media (max-width: 768px) {
    font-size: 38px;
    text-align: left;
  }
`;

export const AccelerateBannerAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

export const BreadcrumbText = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export const LoaderContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

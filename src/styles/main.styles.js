import styled, { css } from "styled-components";

export const Section = styled.section`
  ${(props) =>
    props.$hasGreyBg &&
    css`
      background-color: #f3f3f3;
    `}
  padding: 60px 0;
`;

export const SectionTitle = styled.h1`
  text-align: center;
  font-size: 38px;
  font-weight: 400;
  color: #0f0f0f;
  width: fit-content;
  display: block;
  span {
    display: inline-block;
  }
  .highlight {
    font-weight: 600;
  }
  .highlight::after {
    content: "";
    background-color: #f7c822;
    display: block;
    width: 100%;
    height: 16px;
    margin-top: -20px;
  }
`;

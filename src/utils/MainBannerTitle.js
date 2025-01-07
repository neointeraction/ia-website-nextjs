"use client";

import styled from "styled-components";

const MainBannerTitle = ({ title, $highlight, $leftAlign }) => {
  const highlightedTitle = title
    .split($highlight)
    .reduce((acc, part, index, array) => {
      acc.push(<span key={`part-${index}`}>{part}</span>);

      if (index < array.length - 1) {
        acc.push(
          <span key={`highlight-${index}`} className="highlight">
            {$highlight}
          </span>
        );
      }
      return acc;
    }, []);

  return (
    <StyledMainBannerTitle $leftAlign={$leftAlign}>
      {highlightedTitle}
    </StyledMainBannerTitle>
  );
};

export const StyledMainBannerTitle = styled.h1`
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
    height: 25px;
    margin-top: -36px;
  }
  @media (max-width: 768px) {
    font-size: 38px;
    text-align: left;
  }
`;

export default MainBannerTitle;

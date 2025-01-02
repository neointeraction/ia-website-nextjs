"use client";

import styled from "styled-components";

const MainBannerTitle = ({ title, $highlight, $leftAlign }) => {
  // Check if the $highlight phrase exists in the title
  const highlightedTitle = title
    .split($highlight)
    .reduce((acc, part, index, array) => {
      // Add normal text
      acc.push(<span key={`part-${index}`}>{part}</span>);

      // Add highlighted text if not the last part
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

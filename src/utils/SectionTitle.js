"use client";

import styled from "styled-components";

const StyledSectionTitle = styled.h2`
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

const SectionTitle = ({
  title,
  $highlight,
  $leftAlign,
  infoBannerSectionTitle,
}) => {
  const highlightedTitle = title
    ?.split($highlight)
    .reduce((acc, part, index, array) => {
      acc.push(<span key={`part-${index}`}>{part}</span>);

      if (index < array.length - 1) {
        const hasPrecedingText = part.trim() !== "";
        acc.push(
          <span
            key={`highlight-${index}`}
            className="highlight"
            style={{ marginLeft: hasPrecedingText ? "10px" : "0" }}
          >
            {$highlight}
          </span>
        );
      }
      return acc;
    }, []);

  return (
    <StyledSectionTitle $leftAlign={$leftAlign} data-aos="fade">
      {highlightedTitle}
    </StyledSectionTitle>
  );
};

export default SectionTitle;

import styled from "styled-components";

export const VideoTitle = styled.h2`
  font-size: 22px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.022em;
  color: #282828;
`;

export const VideoIframe = styled.iframe``;

export const VideoCardContainer = styled.div`
  cursor: pointer;
  &:hover {
    ${VideoTitle} {
      text-decoration: underline;
    }
  }
`;

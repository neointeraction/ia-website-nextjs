import styled from "styled-components";

export const VideoTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.022em;
  color: #282828;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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

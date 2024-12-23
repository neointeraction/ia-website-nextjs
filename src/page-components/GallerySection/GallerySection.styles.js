import styled from "styled-components";

export const GalleryContainerBlock = styled.div`
  margin-top: 60px;
  .image-gallery-image {
    max-height: 100% !important;
  }
  .image-gallery-thumbnail {
    border: 3px solid transparent;
  }
  .image-gallery-thumbnail.active {
    border: 3px solid #ec5427;
  }
  .image-gallery-thumbnail:hover {
    border: 3px solid #ec5427;
    cursor: pointer;
  }
`;

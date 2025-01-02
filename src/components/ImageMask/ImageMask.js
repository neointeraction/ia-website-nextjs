import React from "react";
import { MaskContainer, StyledImage } from "./ImageMask.styles";

const ImageMask = ({ src, alt }) => {
  return (
    <MaskContainer>
      <StyledImage
        src={src}
        alt={alt || "Masked Image"}
        width={300}
        height={300}
      />
    </MaskContainer>
  );
};

export default ImageMask;

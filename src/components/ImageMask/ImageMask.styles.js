import styled from "styled-components";
import Image from "next/image";

export const MaskContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;

  /* Apply the mask */
  mask-image: url(/img-mask.png);
  mask-repeat: no-repeat;
  mask-size: cover;
  mask-position: center;

  -webkit-mask-image: url(/img-mask.png);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  -webkit-mask-position: center;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

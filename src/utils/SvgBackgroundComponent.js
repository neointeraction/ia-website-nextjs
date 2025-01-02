"use client";

import React from "react";
import styled from "styled-components";

const SvgBackgroundDynamic = styled.div`
  background-image: ${({ $svg }) =>
    `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent($svg)}")`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "100%"};
`;

const SvgBackgroundComponent = ({ children, svg, width, height }) => {
  return (
    <SvgBackgroundDynamic $svg={svg} $width={width} $height={height}>
      {children}
    </SvgBackgroundDynamic>
  );
};

export default SvgBackgroundComponent;

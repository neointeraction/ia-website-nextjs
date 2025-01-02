"use client";

import { Box } from "@mantine/core";
import React from "react";
import { GalleryContainerBlock } from "./GallerySection.styles";

import ReactImageGallery from "react-image-gallery";
import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";

const GallerySection = ({ title, subtitle, data }) => {
  return (
    <Box>
      <SectionTitle data-aos="fade">{title}</SectionTitle>
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}

      <GalleryContainerBlock>
        <ReactImageGallery
          items={data}
          showNav={false}
          showFullscreenButton={false}
          autoPlay
        />
      </GalleryContainerBlock>
    </Box>
  );
};

export default GallerySection;

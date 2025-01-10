"use client";

import { Box } from "@mantine/core";
import React from "react";
import { GalleryContainerBlock } from "./GallerySection.styles";
import { useMediaQuery } from "@mantine/hooks";
import ReactImageGallery from "react-image-gallery";
import { SectionSubTitle } from "@/styles/main.styles";
import SectionTitle from "@/utils/SectionTitle";
const GallerySection = ({  data }) => {

	if (!data) {
		return null;
	}
	const { 
        title, 
        sub_title: subtitle, 
        highlight: highlightedText, 
        data: componentData 
    } = data;

const generateImageArray = (componentData) => {
  return componentData.map(item => ({
    original: item.original.sizes.large,
    thumbnail: item.original.sizes.thumbnail,
  }));
};

const images = generateImageArray(componentData);
	const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Box component="div" className="container">
      <SectionTitle data-aos="fade">{title}</SectionTitle>
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}

      <GalleryContainerBlock>
        <ReactImageGallery
          items={images}
          showNav={false}
          showFullscreenButton={false}
          autoPlay
        />
      </GalleryContainerBlock>
    </Box>
  );
};

export default GallerySection;

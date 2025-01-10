"use client";
import { useState } from "react";
import { SectionSubTitle } from "@/styles/main.styles";
import { Box, Grid } from "@mantine/core";
import { CardContainerBlock } from "./BrandsSection.styles";
import CardTypeA from "@/components/CardTypeA";
import { useMediaQuery } from "@mantine/hooks";
import SectionTitle from "@/utils/SectionTitle";

const BrandsSection = ({ data }) => {
	if (!data) {
		return null;
	}

	const { 
        
        title, 
        sub_title: subtitle, 
        highlight: highlightedText, 
        data: componentData 
    } = data;

	const isMobileView = useMediaQuery("(max-width: 768px)");

	return (
		<Box component="div" className="container">
			<SectionTitle $highlight={highlightedText} title={title} />
			{subtitle && <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>}
		</Box>
	);
};

export default BrandsSection;
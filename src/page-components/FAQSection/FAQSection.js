"use client";

import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box } from "@mantine/core";
import React from "react";
import { FAQContainer } from "./FAQSection.styles";
import FAQComponent from "@/components/FAQComponent";

const FAQSection = ({ title, subtitle, data }) => {
  return (
    <Box component="div" className="container">
      <SectionTitle $leftAlign data-aos="fade">
        {title}
      </SectionTitle>
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}
      <FAQContainer>
        <FAQComponent data={data} />
      </FAQContainer>
    </Box>
  );
};

export default FAQSection;

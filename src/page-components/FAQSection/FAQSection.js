"use client";

import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box } from "@mantine/core";
import React from "react";
import { FAQContainer } from "./FAQSection.styles";
import FAQComponent from "@/components/FAQComponent";

const FAQSection = ({ data }) => {
  const { title, sub_title, data: faqData } = data; // Rename the inner `data` to `faqData`
  return (
    <Box component="div" className="container">
      <SectionTitle $leftAlign data-aos="fade">
        {title}
      </SectionTitle>
      {sub_title && (
        <SectionSubTitle data-aos="fade">{sub_title}</SectionSubTitle>
      )}
      <FAQContainer>
        <FAQComponent data={faqData} />
      </FAQContainer>
    </Box>
  );
};

export default FAQSection;

"use client";

import { SectionSubTitle } from "@/styles/main.styles";
import { Box } from "@mantine/core";
import React from "react";
import { EventSectionContainer } from "./EventSection.styles";
import EventGrid from "@/components/EventGrid";
import SectionTitle from "@/utils/SectionTitle";
const EventSection = ({ data }) => {
  console.log("data", data);
  if (!data) {
    return null;
  }
  const {
    title,
    sub_title: subtitle,
    highlight: highlightedText,
    data: componentData,
  } = data;
  return (
    <Box className="container">
      <SectionTitle
        data-aos="fade"
        $highlight={highlightedText}
        title={title}
      />
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}

      <EventSectionContainer>
        {componentData.map((item, index) => (
          <Box key={index}>
            <EventGrid
              date={item.date}
              eventTitle={item.title}
              eventSubtitle={item.subtitle}
              eventTiming={item.timing}
              eventLocation={item.location}
            />
          </Box>
        ))}
      </EventSectionContainer>
    </Box>
  );
};

export default EventSection;

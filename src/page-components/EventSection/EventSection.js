"use client";

import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box } from "@mantine/core";
import React from "react";
import { EventSectionContainer } from "./EventSection.styles";
import EventGrid from "@/components/EventGrid";

const EventSection = ({ title, subtitle, data }) => {
  return (
    <Box className="container">
      <SectionTitle data-aos="fade">{title}</SectionTitle>
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}

      <EventSectionContainer>
        {data.map((item, index) => (
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

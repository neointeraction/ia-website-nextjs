"use client";

import TestimonialCard from "@/components/TestimonialCard";
import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box } from "@mantine/core";
import { TestimonialContainerBlock } from "./TestimonialSection.styles";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";

const TestimonialSection = ({ title, subtitle, data }) => {
  const autoScroll = useRef(AutoScroll({ speed: 1 }));
  return (
    <Box component="div" className="container">
      <SectionTitle data-aos="fade">{title}</SectionTitle>
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}
      <TestimonialContainerBlock data-aos="fade">
        <Carousel
          slideSize="70%"
          align="start"
          slideGap="xl"
          withControls={false}
          loop
          plugins={[autoScroll.current]}
          onMouseEnter={autoScroll.current.stop}
          onMouseLeave={autoScroll.current.play}
        >
          {data.map((item, index) => (
            <Carousel.Slide key={index}>
              <Box component="div" data-aos="fade">
                <TestimonialCard
                  message={item.message}
                  img={item.img}
                  name={item.name}
                  designation={item.designation}
                />
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>
      </TestimonialContainerBlock>
    </Box>
  );
};

export default TestimonialSection;

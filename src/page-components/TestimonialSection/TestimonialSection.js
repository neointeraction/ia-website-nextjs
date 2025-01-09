"use client";

import TestimonialCard from "@/components/TestimonialCard";
import { SectionSubTitle } from "@/styles/main.styles";
import { Box } from "@mantine/core";
import { TestimonialContainerBlock } from "./TestimonialSection.styles";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import SectionTitle from "@/utils/SectionTitle";
const TestimonialSection = ({  data }) => {
  console.log("data", data);
  if (!data) {
    return null;
  }
  const {
    title,
    sub_title: subtitle,
    highlight_text: highlightedText,
    data: componentData,
  } = data;

  const autoScroll = useRef(AutoScroll({ speed: 1 }));
  return (
    <Box component="div" className="container">
    <SectionTitle
        data-aos="fade"
        $highlight={highlightedText}
        title={title}
      />
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
        
           {componentData.map((item, index) => (
            <Carousel.Slide key={index}>
              <Box component="div" data-aos="fade">
                <TestimonialCard
                  message={item.message}
                  img={item.image.url}
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

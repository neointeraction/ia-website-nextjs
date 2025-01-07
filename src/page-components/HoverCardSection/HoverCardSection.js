"use client";

import { Box, Grid } from "@mantine/core";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";

import { SectionSubTitle } from "@/styles/main.styles";
import {
  HoveringImageblock,
  SJCTitle,
  StartupJourneyCardFlex,
  StartupJourneyContainer,
} from "./HoverCardSection.styles";

import { Carousel } from "@mantine/carousel";
import SectionTitle from "@/utils/SectionTitle";
import { useState } from "react";

const HoverCardSection = ({ data, asDynamic }) => {
  if (!data) {
    return null;
  }

  const {
    title,
    sub_title: subtitle,
    highlight_text: highlightedText,
    data: hoverCardData,
  } = data;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Box component="div" className="container">
      <SectionTitle
        data-aos="fade"
        $highlight={highlightedText}
        title={title}
      />
      <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      <StartupJourneyContainer>
        {!isMobileView ? (
          <>
            {asDynamic ? (
              <StartupJourneyCardFlex>
                {hoverCardData.map((item, index) => (
                  <Box component="div" key={index} data-aos="fade">
                    <HoveringImageblock
                      type={item.type}
                      $asDynamic={asDynamic}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        transition: "0.3s all ease-in-out",
                      }}
                    >
                      <Image
                        src={
                          hoveredIndex === index
                            ? item.image_hover?.url
                            : item.image?.url
                        }
                        alt={
                          hoveredIndex === index
                            ? item.image_hover?.filename
                            : item.image?.filename
                        }
                        width={296}
                        height={296}
                        style={{
                          transition: "opacity 0.3s ease-in-out",
                          opacity: hoveredIndex === index ? 1 : 0.9,
                        }}
                      />
                    </HoveringImageblock>
                    <SJCTitle>{item.text}</SJCTitle>
                  </Box>
                ))}
              </StartupJourneyCardFlex>
            ) : (
              <Grid>
                {hoverCardData.map((item, index) => (
                  <Grid.Col
                    span={{ base: 12, md: 3, lg: 3 }}
                    key={index}
                    data-aos="fade"
                  >
                    <HoveringImageblock
                      type={item.type}
                      $asDynamic={asDynamic}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        transition: "0.3s all ease-in-out",
                      }}
                    >
                      <Image
                        src={
                          hoveredIndex === index
                            ? item.image_hover?.url
                            : item.image?.url
                        }
                        alt={
                          hoveredIndex === index
                            ? item.image_hover?.filename
                            : item.image?.filename
                        }
                        width={296}
                        height={296}
                        style={{
                          transition: "opacity 0.3s ease-in-out",
                          opacity: hoveredIndex === index ? 1 : 0.9,
                        }}
                      />
                    </HoveringImageblock>
                    <SJCTitle>{item.text}</SJCTitle>
                  </Grid.Col>
                ))}
              </Grid>
            )}
          </>
        ) : (
          <Carousel
            slideSize="70%"
            align="start"
            slideGap="md"
            withControls={false}
          >
            {hoverCardData.map((item, index) => (
              <Carousel.Slide key={index}>
                <Box component="div" key={index} data-aos="fade">
                  <HoveringImageblock
                    type={item.type}
                    $asDynamic={asDynamic}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      transition: "0.3s all ease-in-out",
                    }}
                  >
                    <Image
                      src={
                        hoveredIndex === index
                          ? item.image_hover?.url
                          : item.image?.url
                      }
                      alt={
                        hoveredIndex === index
                          ? item.image_hover?.filename
                          : item.image?.filename
                      }
                      width={296}
                      height={296}
                      style={{
                        transition: "opacity 0.3s ease-in-out",
                        opacity: hoveredIndex === index ? 1 : 0.9,
                      }}
                    />
                  </HoveringImageblock>
                  <SJCTitle>{item.text}</SJCTitle>
                </Box>
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
      </StartupJourneyContainer>
    </Box>
  );
};

export default HoverCardSection;

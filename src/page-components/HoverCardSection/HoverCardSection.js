"use client";

import { Box, Grid } from "@mantine/core";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";

import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import {
  HoveringImageblock,
  SJCTitle,
  StartupJourneyCardFlex,
  StartupJourneyContainer,
} from "./HoverCardSection.styles";

import { Carousel } from "@mantine/carousel";

const HoverCardSection = ({ title, subtitle, data, asDynamic }) => {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Box component="div" className="container">
      <SectionTitle data-aos="fade">{title}</SectionTitle>
      <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      <StartupJourneyContainer>
        {!isMobileView ? (
          <>
            {asDynamic ? (
              <StartupJourneyCardFlex>
                {data.map((item, index) => (
                  <Box component="div" key={index} data-aos="fade">
                    <HoveringImageblock type={item.type} $asDynamic={asDynamic}>
                      <Image
                        src={item.image}
                        //style={{ width: "auto", height: "auto" }}
                        alt={item.image}
                      />
                    </HoveringImageblock>
                    <SJCTitle>{item.text}</SJCTitle>
                  </Box>
                ))}
              </StartupJourneyCardFlex>
            ) : (
              <Grid>
                {data.map((item, index) => (
                  <Grid.Col
                    span={{ base: 12, md: 3, lg: 3 }}
                    key={index}
                    data-aos="fade"
                  >
                    <HoveringImageblock type={item.type} $asDynamic={asDynamic}>
                      <Image
                        src={item.image}
                        // style={{ width: "auto", height: "auto" }}
                        alt={item.image}
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
            {data.map((item, index) => (
              <Carousel.Slide key={index}>
                <Box component="div" key={index} data-aos="fade">
                  <HoveringImageblock type={item.type} $asDynamic={asDynamic}>
                    <Image
                      src={item.image}
                      style={{ width: "auto", height: "auto" }}
                      alt={item.image}
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

import { Box } from "@mantine/core";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";

import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import {
  HoveringImageblock,
  SJCTitle,
  StartupJourneyCardFlex,
  StartupJourneyContainer,
} from "./StartupJourney.styles";

import SA from "@/images/startup-accelerator.png";
import EG from "@/images/expert-guidance.png";
import SP from "@/images/strategic-partnerships.png";
import FR from "@/images/funding-resources.png";
import CO from "@/images/co-working-space.png";
import { Carousel } from "@mantine/carousel";

const data = [
  {
    image: SA,
    text: "Startup Accelerator",
    type: "green",
  },
  {
    image: EG,
    text: "Expert Guidance",
    type: "yellow",
  },
  {
    image: SP,
    text: "Strategic Partnerships",
    type: "blue",
  },
  {
    image: FR,
    text: "Funding Resources",
    type: "red",
  },
  {
    image: CO,
    text: "Co working Space",
    type: "green-v2",
  },
];

const StartupJourney = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Box component="div" className="container">
      <SectionTitle data-aos="fade">
        How We Fuel Your
        <Box component="span" className="highlight">
          Startup Journey
        </Box>
      </SectionTitle>

      <SectionSubTitle data-aos="fade">
        Hands-on mentorship, access to expert networks, and resources designed
        to drive growth and success for startups across various sectors
      </SectionSubTitle>
      <StartupJourneyContainer>
        {!isMobileView ? (
          <StartupJourneyCardFlex>
            {data.map((item, index) => (
              <Box component="div" key={index} data-aos="fade">
                <HoveringImageblock type={item.type}>
                  <Image
                    src={item.image}
                    style={{ width: "auto", height: "auto" }}
                    alt={item.image}
                  />
                </HoveringImageblock>
                <SJCTitle>{item.text}</SJCTitle>
              </Box>
            ))}
          </StartupJourneyCardFlex>
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
                  <HoveringImageblock type={item.type}>
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

export default StartupJourney;

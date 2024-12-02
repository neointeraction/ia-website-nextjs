import { Box } from "@mantine/core";
import Image from "next/image";

import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import {
  HoveringImageblock,
  StartupJourneyCardFlex,
  StartupJourneyContainer,
} from "./StartupJourney.styles";

import SA from "@/images/startup-accelerator.png";
import EG from "@/images/expert-guidance.png";
import SP from "@/images/strategic-partnerships.png";
import FR from "@/images/funding-resources.png";
import CO from "@/images/co-working-space.png";

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
  return (
    <Box component="div" className="container">
      <SectionTitle>
        How We Fuel Your
        <Box component="span" className="highlight">
          Startup Journey
        </Box>
      </SectionTitle>

      <SectionSubTitle>
        Hands-on mentorship, access to expert networks, and resources designed
        to drive growth and success for startups across various sectors
      </SectionSubTitle>
      <StartupJourneyContainer>
        <StartupJourneyCardFlex>
          {data.map((item, index) => (
            <Box component="div" key={index}>
              <HoveringImageblock type={item.type}>
                <Image
                  src={item.image}
                  style={{ width: "auto", height: "auto" }}
                  alt={item.image}
                />
              </HoveringImageblock>
              <h4>{item.text}</h4>
            </Box>
          ))}
        </StartupJourneyCardFlex>
      </StartupJourneyContainer>
    </Box>
  );
};

export default StartupJourney;

"use client";

import Image from "next/image";
import { Box, Grid, HoverCard, Stack } from "@mantine/core";
import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import {
  SFListItem,
  SFListTitle,
  StrategicFocusContainer,
} from "./StrategicFocusSection.styles";

import Arrow from "@/images/content-arrow.svg";
import RUMS from "@/images/RUMS.png";
import GaME from "@/images/GaME.png";
import ImpacLabs from "@/images/impact-labs.png";
import Consumer from "@/images/consumer.png";
import EMC from "@/images/EMC.png";
import GenAI from "@/images/GenAI.png";

const StrategicFocusSection = ({ title, subtitle }) => {
  const data = [
    {
      title: "Robotics & Unmanned & Space (RUMS)",
      img: RUMS,
      position: "left-start",
    },
    {
      title: "Gaming,Media & Entertainment (GaME)",
      img: GaME,
      position: "right-start",
    },
    {
      title: "Impact Labs",
      img: ImpacLabs,
      position: "left-start",
    },
    {
      title: "Consumer",
      img: Consumer,
      position: "right-start",
    },
    {
      title: "Energy, Mobility & Connectivity(EMC)",
      img: EMC,
      position: "left-start",
    },
    {
      title: "Singularity/GenAI",
      img: GenAI,
      position: "right-bottom",
    },
  ];
  return (
    <Box component="div" className="container">
      <SectionTitle data-aos="fade">{title}</SectionTitle>
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}
      <StrategicFocusContainer>
        <Stack align="center" justify="center" gap="0px">
          {data.map((item, index) => (
            <Box key={index} data-aos="fade">
              <HoverCard
                width={234}
                position={item.position}
                classNames="hover-list"
                offset={40}
                openDelay={150}
              >
                <HoverCard.Target className="hover-card-target">
                  <SFListItem>
                    <SFListTitle>{item.title}</SFListTitle>
                    <Image src={Arrow} alt="Arrow" width={24} height={24} />
                  </SFListItem>
                </HoverCard.Target>
                <HoverCard.Dropdown className="hover-card-body">
                  <Image
                    src={item.img}
                    width={234}
                    height={234}
                    alt="theses-image"
                  />
                </HoverCard.Dropdown>
              </HoverCard>
            </Box>
          ))}
        </Stack>
      </StrategicFocusContainer>
    </Box>
  );
};

export default StrategicFocusSection;

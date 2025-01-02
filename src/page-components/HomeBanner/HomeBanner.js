"use client";

import { SectionSubTitle } from "@/styles/main.styles";
import { Box, Button } from "@mantine/core";
import React from "react";

import BannerImg1 from "@/images/banner/banner-dp.png";
import BannerImg2 from "@/images/banner/banner-dp2.png";
import BannerImg3 from "@/images/banner/banner-dp3.png";
import BannerImg4 from "@/images/banner/banner-dp4.png";
import ArrowIcon from "@/images/banner/arrow.png";
import Image from "next/image";
import {
  BannerIconContainer,
  BigCircle,
  BiggerCircle,
  CenterLogo,
  Circle,
  HoverContent,
  HoverText,
  IconBlock,
  Main,
  MainContainer,
  MainTitle,
} from "./HomeBanner.styles";

const getIconPositions = (radius) => [
  {
    top: `calc(47% - ${radius}px)`,
    left: "50%",
    transform: "translate(-50%, -100%)",
  }, // Top
  {
    top: "50%",
    left: `calc(50% + ${radius}px)`,
    transform: "translate(0, -50%)",
  }, // Right
  {
    top: `calc(50% + ${radius}px)`,
    left: "50%",
    transform: "translate(-50%, 0)",
  }, // Bottom
  {
    top: "50%",
    left: `calc(50% - ${radius}px)`,
    transform: "translate(-100%, -50%)",
  }, // Left
];

const HomeBanner = () => {
  const biggerCircleIcons = [
    {
      label: (
        <Button variant="default" radius="xl" className="btn-secondary">
          Co-working space
        </Button>
      ),
    },
    {
      label: (
        <BannerIconContainer>
          <div style={{ position: "relative" }}>
            <Image
              src={BannerImg3}
              width={80}
              height={80}
              alt="banner-img-icon"
              className="banner-img-icon"
            />

            <HoverContent>
              <HoverText>Raised $20M</HoverText>
              <Image
                src={ArrowIcon}
                width={21}
                height={54}
                alt="banner-img-icon"
              />
            </HoverContent>
          </div>
        </BannerIconContainer>
      ),
    },
    {
      label: (
        <BannerIconContainer>
          <div style={{ position: "relative" }}>
            <Image
              src={BannerImg4}
              width={80}
              height={80}
              alt="banner-img-icon"
              className="banner-img-icon"
            />

            <HoverContent>
              <HoverText>Invested $5M</HoverText>
              <Image
                src={ArrowIcon}
                width={21}
                height={54}
                alt="banner-img-icon"
              />
            </HoverContent>
          </div>
        </BannerIconContainer>
      ),
    },
    {
      label: (
        <Button variant="default" radius="xl" className="btn-secondary">
          Co-founder
        </Button>
      ),
    },
  ];

  const bigCircleIcons = [
    {
      label: (
        <Button variant="default" radius="xl" className="btn-secondary">
          Global expansion
        </Button>
      ),
    },
    {
      label: (
        <Button variant="default" radius="xl" className="btn-secondary">
          Accelerator programs
        </Button>
      ),
    },
    {
      label: (
        <Button variant="default" radius="xl" className="btn-secondary">
          Learning resources
        </Button>
      ),
    },
    {
      label: (
        <Button variant="default" radius="xl" className="btn-secondary">
          Mentorship
        </Button>
      ),
    },
  ];

  const circleIcons = [
    {
      label: (
        <Button variant="default" radius="xl" className="btn-secondary">
          Funding
        </Button>
      ),
    },
    {
      label: (
        <BannerIconContainer>
          <div style={{ position: "relative" }}>
            <Image
              src={BannerImg1}
              width={80}
              height={80}
              alt="banner-img-icon"
              className="banner-img-icon"
            />

            <HoverContent className="startups">
              <HoverText>Mentored 16 startups</HoverText>
              <Image
                src={ArrowIcon}
                width={21}
                height={54}
                alt="banner-img-icon"
              />
            </HoverContent>
          </div>
        </BannerIconContainer>
      ),
    },
    {
      label: (
        <BannerIconContainer>
          <div style={{ position: "relative" }}>
            <Image
              src={BannerImg2}
              width={80}
              height={80}
              alt="banner-img-icon"
              className="banner-img-icon"
            />

            <HoverContent>
              <HoverText>Raised $14M</HoverText>
              <Image
                src={ArrowIcon}
                width={21}
                height={54}
                alt="banner-img-icon"
              />
            </HoverContent>
          </div>
        </BannerIconContainer>
      ),
    },
  ];

  const biggerCirclePositions = getIconPositions(470);
  const bigCirclePositions = getIconPositions(350);
  const smallCirclePositions = getIconPositions(260);

  return (
    <MainContainer>
      <Main>
        <BiggerCircle>
          {biggerCircleIcons.map((item, index) => (
            <IconBlock
              key={index}
              style={biggerCirclePositions[index]}
              className="icon-block-outer"
            >
              <Box
                data-aos="zoom-in"
                data-aos-delay={800}
                data-aos-once={true}
                data-aos-offset={-100}
              >
                {item.label}
              </Box>
            </IconBlock>
          ))}
        </BiggerCircle>
        <BigCircle>
          {bigCircleIcons.map((item, index) => (
            <IconBlock
              key={index}
              style={bigCirclePositions[index]}
              className="icon-block-middle"
            >
              <Box
                data-aos="zoom-in"
                data-aos-delay={600}
                data-aos-once={true}
                data-aos-offset={-100}
              >
                {item.label}
              </Box>
            </IconBlock>
          ))}
        </BigCircle>
        <Circle>
          {circleIcons.map((item, index) => (
            <IconBlock
              key={index}
              style={smallCirclePositions[index]}
              className="icon-block-inner"
            >
              <Box
                data-aos="zoom-in"
                data-aos-delay={400}
                data-aos-once={true}
                data-aos-offset={-100}
              >
                {item.label}
              </Box>
            </IconBlock>
          ))}
        </Circle>

        <CenterLogo>
          <MainTitle data-aos="fade">
            Your Multi-Stage, Fund-Led Startup Accelerator
          </MainTitle>
          <SectionSubTitle data-aos="fade" data-aos-offset={-100}>
            Accelerating growth for 2000+ entrepreneurs across the globe
          </SectionSubTitle>
          <Box data-aos="fade" data-aos-delay={200} data-aos-offset={-100}>
            <Button
              variant="filled"
              radius="xl"
              size="lg"
              className="btn-primary lg"
            >
              Accelerate your startup
            </Button>
          </Box>
        </CenterLogo>
      </Main>
    </MainContainer>
  );
};

export default HomeBanner;

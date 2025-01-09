"use client";

import React from "react";
import { SectionSubTitle } from "@/styles/main.styles";
import { Box, Grid } from "@mantine/core";
import { TextImageContainer, TIImageBlock } from "./TextImageSection.styles";
import Image from "next/image";
import CardTypeA from "@/components/CardTypeA";
import SectionTitle from "@/utils/SectionTitle";
import StarRed from "@/images/star-red.svg";
import StarBlue from "@/images/star-blue.svg";
import StarGreen from "@/images/star-green.svg";
import StarYellow from "@/images/star-yellow.svg";
const TextImageSection = ({  data }) => {
  console.log("data", data);
  if (!data) {
    return null;
  }
  const {
    title,
    sub_title: subtitle,
    highlight: highlightedText,
    image: bannerImg,
    data: componentData,
  } = data;


  const getStarIcon = (color)=>{ 
    switch (color) {
      case "#EC5427":
        return StarRed;
      case "#00A14C":
        return StarGreen;
      case "#00AAE7":
        return StarYellow;
      case "#F7C822":
        return StarBlue;
      default:
        return StarRed;
    }
  }

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
      <TextImageContainer>
        <Grid justify="space-between">
          <Grid.Col span={6}>
            {componentData?.map((item, index) => (
              <Box
                key={index}
                data-aos="fade-up"
                className="element-box"
                mb={40}
              >
                <CardTypeA
                  flexed
                  icon={getStarIcon(item.colours)}
                  title={item.title}
                  bodyText={item.content}
                  path={null}
                />
              </Box>
            ))}
          </Grid.Col>
          <Grid.Col span={6} data-aos="fade-left">
            <TIImageBlock>
              <Image
                src={bannerImg.url}
                width={400}
                height={542}
                alt="banner-img-icon"
              />
            </TIImageBlock>
          </Grid.Col>
        </Grid>
      </TextImageContainer>
    </Box>
  );
};

export default TextImageSection;

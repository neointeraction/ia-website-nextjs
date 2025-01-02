"use client";

import React from "react";
import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box, Grid } from "@mantine/core";
import { TextImageContainer, TIImageBlock } from "./TextImageSection.styles";
import Image from "next/image";
import CardTypeA from "@/components/CardTypeA";

const TextImageSection = ({ title, subtitle, data }) => {
  return (
    <Box component="div" className="container">
      <SectionTitle data-aos="fade">{title}</SectionTitle>
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}
      <TextImageContainer>
        <Grid justify="space-between">
          <Grid.Col span={6}>
            {data.elements.map((item, index) => (
              <Box
                key={index}
                data-aos="fade-up"
                className="element-box"
                mb={40}
              >
                <CardTypeA
                  flexed
                  icon={item.icon}
                  title={item.title}
                  bodyText={item.description}
                  path={item.path}
                />
              </Box>
            ))}
          </Grid.Col>
          <Grid.Col span={6} data-aos="fade-left">
            <TIImageBlock>
              <Image
                src={data.bannerImg}
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

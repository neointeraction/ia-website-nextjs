"use client";

import { SectionSubTitle } from "@/styles/main.styles";
import SectionTitle from "@/utils/SectionTitle";
import { Box, Grid } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { CardContainerBlock } from "./VideoSection.styles";
import VideoCard from "@/components/VideoCard";
import { videoData } from "@/mock/data";
import { useMediaQuery } from "@mantine/hooks";

const VideoSection = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    title,
    sub_title: subtitle,
    highlight_text: highlightedText,
    data: videotData,
  } = data;

  const isMobileView = useMediaQuery("(max-width: 768px)");

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
      <CardContainerBlock>
        <Grid gutter={isMobileView ? 15 : 15}>
          {videotData.map((item, index) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
              <Box component="div" data-aos="fade">
                <VideoCard title={item.title} src={item.src} />
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </CardContainerBlock>
    </Box>
  );
};

export default VideoSection;

"use client";

import { SectionSubTitle } from "@/styles/main.styles";
import SectionTitle from "@/utils/SectionTitle";
import { Box, Grid } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { CardContainerBlock } from "./VideoSection.styles";
import VideoCard from "@/components/VideoCard";
import { videoData } from "@/mock/data";
import { useMediaQuery } from "@mantine/hooks";

const VideoSection = ({ subtitle }) => {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(videoData);
  }, []);

  return (
    <Box component="div" className="container">
      <SectionTitle
        data-aos="fade"
        $highlight={"Spotlight on IA"}
        title={"Spotlight on IA: Explore Our Latest Updates"}
      />
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}
      <CardContainerBlock>
        <Grid gutter={isMobileView ? 15 : 15}>
          {data.map((item, index) => (
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

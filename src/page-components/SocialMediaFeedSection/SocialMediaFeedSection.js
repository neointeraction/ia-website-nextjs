"use client";

import React, { useEffect, useState } from "react";
import { SectionSubTitle } from "@/styles/main.styles";
import SectionTitle from "@/utils/SectionTitle";
import { Box, Grid } from "@mantine/core";
import { igData, videoData } from "@/mock/data";
import { useMediaQuery } from "@mantine/hooks";
import { CardContainerBlock } from "./SocialMediaFeedSection.styles";

const SocialMediaFeedSection = ({ data }) => {
  if (!data) {
    return null;
  }

  const { social_media_embed_code: socialData } = data;

  const isMobileView = useMediaQuery("(max-width: 768px)");
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(igData);
  // }, []);

  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, [socialData]);

  return (
    <Box component="div" className="container">
      <SectionTitle
        data-aos="fade"
        $highlight={"Stay Connected"}
        title={"Stay Connected: Highlights from Our Socials"}
      />
      {/* {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )} */}
      <CardContainerBlock>
        <Grid gutter={isMobileView ? 15 : 15}>
          {socialData.map((item, index) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
              <Box
                component="div"
                data-aos="fade"
                dangerouslySetInnerHTML={{
                  __html: item.post_embed_code,
                }}
              />
            </Grid.Col>
          ))}
        </Grid>
      </CardContainerBlock>
    </Box>
  );
};

export default SocialMediaFeedSection;

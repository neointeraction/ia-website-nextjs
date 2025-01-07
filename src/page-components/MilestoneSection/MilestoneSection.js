"use client";

import { SectionSubTitle } from "@/styles/main.styles";
import { Box, Grid } from "@mantine/core";
import { MilestoneContainerBlock } from "./MilestoneSection.styles";

import Count from "@/components/Count";
import SectionTitle from "@/utils/SectionTitle";
import MainBannerTitle from "@/utils/MainBannerTitle";

const MilestoneSection = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    banner_title: bannerTitle,
    title,
    sub_title: subtitle,
    highlight: highlightedText,
    cols,
    data: milestoneData,
  } = data;

  return (
    <Box component="div" className="container">
      {bannerTitle && (
        <MainBannerTitle
          data-aos="fade"
          $highlight={highlightedText}
          title={bannerTitle}
        />
      )}
      {title && (
        <SectionTitle
          data-aos="fade"
          $highlight={highlightedText}
          title={title}
        />
      )}
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}
      <MilestoneContainerBlock data-aos="fade">
        <Grid justify="center" align="center" gutter="xl">
          {milestoneData.map((item, index) => (
            <Grid.Col
              span={
                cols === 3
                  ? { base: 6, md: 6, lg: 4 }
                  : { base: 6, md: 6, lg: 3 }
              }
              key={index}
            >
              <Box component="div">
                <Count
                  countValue={item.count}
                  label={item.label}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  lineColor={item.line_color}
                />
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </MilestoneContainerBlock>
    </Box>
  );
};

export default MilestoneSection;

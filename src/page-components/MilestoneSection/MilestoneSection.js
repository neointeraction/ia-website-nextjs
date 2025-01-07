"use client";

import {
  MainBannerTitle,
  SectionSubTitle,
  SectionTitle,
} from "@/styles/main.styles";
import { Box, Grid } from "@mantine/core";
import { MilestoneContainerBlock } from "./MilestoneSection.styles";

import Count from "@/components/Count";

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
        <MainBannerTitle data-aos="fade">{bannerTitle}</MainBannerTitle>
      )}
      {title && <SectionTitle data-aos="fade">{title}</SectionTitle>}
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

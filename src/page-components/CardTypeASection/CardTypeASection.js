"use client";

import { SectionSubTitle } from "@/styles/main.styles";
import { Box, Grid } from "@mantine/core";
import { CardContainerBlock } from "./CardTypeASection.styles";
import CardTypeA from "@/components/CardTypeA";
import { useMediaQuery } from "@mantine/hooks";
import SectionTitle from "@/utils/SectionTitle";

const CardTypeASection = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    has_bg: hasBg,
    title,
    sub_title: subtitle,
    highlight: highlightedText,
    px,
    flexed,
    cols,
    data: componentData,
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
        <Grid gutter={isMobileView ? 15 : hasBg ? 15 : 60} px={px ? 50 : 0}>
          {componentData.map((item, index) => (
            <Grid.Col
              span={
                cols === 2
                  ? { base: 12, md: 6, lg: 6 }
                  : cols === 4
                  ? { base: 12, md: 6, lg: 3 }
                  : { base: 12, md: 6, lg: 4 }
              }
              key={index}
            >
              <Box component="div" data-aos="fade">
                <CardTypeA
                  hasBg={hasBg}
                  flexed={flexed}
                  icon={item?.normal_icon?.url}
                  title={item.title}
                  bodyText={item.body_text}
                  path={item.path}
                />
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </CardContainerBlock>
    </Box>
  );
};

export default CardTypeASection;

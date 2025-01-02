"use client";

import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box, Grid } from "@mantine/core";
import { CardContainerBlock } from "./CardTypeASection.styles";
import CardTypeA from "@/components/CardTypeA";
import { useMediaQuery } from "@mantine/hooks";

const CardTypeASection = ({
  title,
  subtitle,
  data,
  flexed,
  cols,
  px,
  hasBg,
}) => {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Box component="div" className="container">
      <SectionTitle data-aos="fade">{title}</SectionTitle>
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}
      <CardContainerBlock>
        <Grid gutter={isMobileView ? 15 : hasBg ? 15 : 60} px={px ? 50 : 0}>
          {data.map((item, index) => (
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
                  icon={item.icon}
                  title={item.title}
                  bodyText={item.bodyText}
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

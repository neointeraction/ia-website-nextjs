"use client";

import { Box, Button, Grid, Stack } from "@mantine/core";
import {
  BannerContainer,
  BannerDisplayText,
  BannerTitle,
} from "./InfoBanner.styles";

import Image from "next/image";
import { SectionSubTitle } from "@/styles/main.styles";
import DisplayTitle from "@/utils/DisplayTitle";
import SectionTitle from "@/utils/SectionTitle";

const InfoBanner = ({ data, onClick }) => {
  if (!data) {
    return null;
  }

  const {
    title,
    subtitle,
    display_title: displayTitile,
    highlight: highlightedText,
    button_label: btnText,
    banner_img,
  } = data;

  return (
    <Box className="container">
      <BannerContainer>
        <Grid align="center" justify="space-between">
          <Grid.Col span={{ base: 12, md: 7, lg: 7 }}>
            <Stack align="flex-start" gap="lg">
              <Box>
                {title && (
                  <SectionTitle
                    $leftAlign
                    data-aos="fade"
                    $highlight={highlightedText}
                    title={title}
                  />
                )}

                {displayTitile && (
                  <DisplayTitle
                    $leftAlign
                    data-aos="fade"
                    $highlight={highlightedText}
                    title={displayTitile}
                  />
                )}

                {subtitle && (
                  <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
                )}
              </Box>

              <Button
                variant="filled"
                radius="xl"
                size="lg"
                className="btn-primary lg"
                onClick={onClick}
                data-aos="fade"
              >
                {btnText}
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 5, lg: 5 }}
            style={{ textAlign: "right" }}
          >
            <Image
              data-aos="fade"
              src={banner_img?.url}
              alt="banner-img"
              width={438}
              height={319}
              className="info-banner-img"
            />
          </Grid.Col>
        </Grid>
      </BannerContainer>
    </Box>
  );
};

export default InfoBanner;

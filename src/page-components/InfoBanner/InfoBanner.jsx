"use client";

import { Box, Button, Grid, Stack } from "@mantine/core";
import {
  BannerContainer,
  BannerDisplayText,
  BannerTitle,
} from "./InfoBanner.styles";

import Image from "next/image";

const InfoBanner = ({ data, onClick }) => {
  if (!data) {
    return null;
  }

  const {
    title,

    display_title: displayTitile,
    button_label: btnText,
    banner_img,
  } = data;

  return (
    <Box className="container">
      <BannerContainer>
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 7, lg: 7 }}>
            <Stack align="flex-start" gap="lg">
              <Box>
                <BannerTitle data-aos="fade">{title}</BannerTitle>
                <BannerDisplayText data-aos="fade">
                  {displayTitile}
                </BannerDisplayText>
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
          <Grid.Col span={{ base: 12, md: 5, lg: 5 }}>
            <Image
              data-aos="fade"
              src={banner_img?.url}
              alt="banner-img"
              width={438}
              height={319}
            />
          </Grid.Col>
        </Grid>
      </BannerContainer>
    </Box>
  );
};

export default InfoBanner;

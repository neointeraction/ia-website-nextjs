import { Box, Breadcrumbs, Button, Grid } from "@mantine/core";
import React from "react";
import { PageBannerContainer } from "./PageBanner.styles";
import { MainBannerTitle, SectionSubTitle } from "@/styles/main.styles";
import Image from "next/image";

const PageBanner = ({
  breadcrumbData,
  title,
  subtitle,
  btnText,
  onClick,
  bannerImg,
}) => {
  return (
    <Box className="container">
      <PageBannerContainer>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
            <>
              <Breadcrumbs separator=">" separatorMargin="md" mt="xs">
                {breadcrumbData}
              </Breadcrumbs>
              <MainBannerTitle data-aos="fade" $leftAlign>
                {title}
              </MainBannerTitle>
              <SectionSubTitle data-aos="fade" $leftAlign className="subtitle">
                {subtitle}
              </SectionSubTitle>
              <Button
                mt={30}
                variant="filled"
                radius="xl"
                size="lg"
                className="btn-primary lg"
                onClick={onClick}
              >
                {btnText}
              </Button>
            </>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Image
              src={bannerImg}
              style={{ width: "100%", height: "100%" }}
              alt="banner-img"
            />
          </Grid.Col>
        </Grid>
      </PageBannerContainer>
    </Box>
  );
};

export default PageBanner;

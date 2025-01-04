"use client";

import { Box, Breadcrumbs, Button, Grid } from "@mantine/core";
import React from "react";
import { PageBannerContainer } from "./PageBanner.styles";
import { SectionSubTitle } from "@/styles/main.styles";
import Image from "next/image";
import MainBannerTitle from "@/utils/MainBannerTitle";

const PageBanner = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    bread_crumb_data,
    title,
    sub_title,
    button_text,
    banner_image,
    highlight_text,
  } = data;

  return (
    <Box className="container">
      <PageBannerContainer>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
            <Breadcrumbs separator=">" separatorMargin="md" mt="xs">
              {(bread_crumb_data || []).map((item, index) => (
                <a href={item.url || "#"} key={index}>
                  {item.label}
                </a>
              ))}
            </Breadcrumbs>
            <MainBannerTitle
              $highlight={highlight_text}
              $leftAlign
              title={title}
            />
            <SectionSubTitle data-aos="fade" $leftAlign className="subtitle">
              {sub_title}
            </SectionSubTitle>
            {button_text && (
              <Button
                mt={30}
                variant="filled"
                radius="xl"
                size="lg"
                className="btn-primary lg"
                onClick={() => {
                  if (data.acf?.["on-click"]) {
                    window.location.href = data.acf["on-click"];
                  }
                }}
              >
                {button_text}
              </Button>
            )}
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Image
              src={banner_image?.url || ""}
              alt={banner_image?.alt || "Banner Image"}
              width={400}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </Grid.Col>
        </Grid>
      </PageBannerContainer>
    </Box>
  );
};

export default PageBanner;

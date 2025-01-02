"use client";

import { useEffect, useState } from "react";
import { Box, Breadcrumbs, Button, Grid, Loader } from "@mantine/core";
import React from "react";
import { PageBannerContainer } from "./PageBanner.styles";
import { LoaderContainer, SectionSubTitle } from "@/styles/main.styles";
import Image from "next/image";
import MainBannerTitle from "@/utils/MainBannerTitle";
import generateRandomColor from "@/methods/generateRandomColor";

const PageBanner = ({ id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure id is a valid number
    if (!id || typeof id !== "number") {
      console.error("Invalid id. Expected a valid number.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/page-banner/${id}?acf_format=standard`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch page banner data");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <LoaderContainer>
        <Loader color={generateRandomColor()} />
      </LoaderContainer>
    );
  }

  if (!data) {
    return null; // Hide the component if no data is available
  }

  // Extract data from API response
  const breadcrumbData = (data.acf?.bread_crumb_data || []).map(
    (item, index) => (
      <a href={item.url || "#"} key={index}>
        {item.label}
      </a>
    )
  );
  const title = data.acf?.title || "";
  const subtitle = data.acf?.sub_title || "";
  const btnText = data.acf?.button_text || "";
  const onClickUrl = data.acf?.["on-click"] || null;
  const bannerImage = data.acf?.banner_image?.url || null;
  const bannerAlt = data.acf?.banner_image?.alt || "banner image";
  const highlightedText = data.acf?.highlight_text || "";

  console.log(data.acf, "bannerImage");

  return (
    <Box className="container">
      <PageBannerContainer>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
            <>
              <Breadcrumbs separator=">" separatorMargin="md" mt="xs">
                {breadcrumbData}
              </Breadcrumbs>
              {/* <MainBannerTitle data-aos="fade" $leftAlign>
                {title}
              </MainBannerTitle> */}
              <MainBannerTitle
                $highlight={highlightedText}
                $leftAlign
                title={title}
              />
              <SectionSubTitle data-aos="fade" $leftAlign className="subtitle">
                {subtitle}
              </SectionSubTitle>
              {btnText && (
                <Button
                  mt={30}
                  variant="filled"
                  radius="xl"
                  size="lg"
                  className="btn-primary lg"
                  onClick={() => {
                    if (onClickUrl) {
                      window.location.href = onClickUrl;
                    }
                  }}
                >
                  {btnText}
                </Button>
              )}
            </>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            {/* {bannerImage && ( */}
            <Image
              src={bannerImage}
              alt={bannerAlt}
              width={400}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
            {/* )} */}
          </Grid.Col>
        </Grid>
      </PageBannerContainer>
    </Box>
  );
};

export default PageBanner;

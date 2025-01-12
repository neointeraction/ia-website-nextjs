"use client";

import { Box, Button, Grid, Group } from "@mantine/core";
import React from "react";
import {
  AuthorDesignation,
  AuthorInfo,
  AuthorText,
  BlogBannerContainer,
  DateText,
} from "./BlogDetailBanner.styles";
import { SectionSubTitle } from "@/styles/main.styles";
import Image from "next/image";

import SectionTitle from "@/utils/SectionTitle";

const BlogDetailBanner = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    title,
    date,
    sub_title,
    banner_image,
    highlight_text,
    authorImg,
    authorName,
    designation,
  } = data;

  return (
    <Box className="container">
      <BlogBannerContainer>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
            <DateText>{date}</DateText>
            <SectionTitle
              $highlight={highlight_text}
              $leftAlign
              title={title}
            />
            <SectionSubTitle data-aos="fade" $leftAlign className="subtitle">
              {sub_title}
            </SectionSubTitle>
            <AuthorInfo>
              <Group gap="lg" align="flex-end">
                <Image
                  src={authorImg}
                  width={84}
                  height={84}
                  alt="banner-img-icon"
                  className="banner-img-icon"
                />
                <Box>
                  <AuthorText>{authorName}</AuthorText>
                  <AuthorDesignation>{designation}</AuthorDesignation>
                </Box>
              </Group>
            </AuthorInfo>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            {banner_image?.url && (
              <Image
                src={banner_image?.url || ""}
                alt={banner_image?.alt || "Banner Image"}
                width={400}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </Grid.Col>
        </Grid>
      </BlogBannerContainer>
    </Box>
  );
};

export default BlogDetailBanner;

"use client";

import { Box, Grid } from "@mantine/core";
import React from "react";
import {
  DetailItem,
  Details,
  PostBlockDiv,
  PostBody,
  PostContainer,
  PostDate,
  PostTitle,
} from "./PostBlock.styles";
import Image from "next/image";

const PostBlock = ({ title, content, date, author, blogImg, withoutImage }) => {
  return (
    <Box>
      <PostContainer>
        <Grid align="center" data-aos="fade">
          <Grid.Col
            span={
              !withoutImage
                ? { base: 12, md: 9, lg: 9 }
                : { base: 12, md: 12, lg: 12 }
            }
          >
            <PostBlockDiv>
              {withoutImage && (
                <Details>
                  <DetailItem>{date}</DetailItem>
                  <DetailItem>{author}</DetailItem>
                </Details>
              )}

              <PostTitle>{title}</PostTitle>
              <PostBody>{content}</PostBody>
              {!withoutImage && (
                <Details>
                  <DetailItem>{date}</DetailItem>
                  <DetailItem>{author}</DetailItem>
                </Details>
              )}
            </PostBlockDiv>
          </Grid.Col>
          {!withoutImage && (
            <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
              <Image
                src={blogImg}
                style={{ width: "100%", height: "auto" }}
                alt={blogImg}
              />
            </Grid.Col>
          )}
        </Grid>
      </PostContainer>
    </Box>
  );
};

export default PostBlock;

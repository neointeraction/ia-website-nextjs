"use client";

import { SectionTitle } from "@/styles/main.styles";
import { Button, Center, Grid, Group, Stack } from "@mantine/core";
import React, { useState } from "react";

import Arrow from "@/images/title-arrow.svg";
import Image from "next/image";
import {
  PostBlock,
  PostBody,
  PostContainer,
  PostDate,
  PostTitle,
} from "./PostFilter.styles";

function PostFilter({ postsData, home }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(
    home ? postsData.slice(0, 3) : postsData
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredPosts(home ? postsData.slice(0, 3) : postsData);
    } else {
      setFilteredPosts(postsData.filter((post) => post.category === category));
    }
  };

  return (
    <div className="container">
      <Center>
        <SectionTitle data-aos="fade">
          <span className="highlight">Insights</span>
          <span>That Shape Your Path to Success</span>{" "}
          <span>
            <Image src={Arrow} alt="Arrow" width={24} height={24} />
          </span>
        </SectionTitle>
      </Center>
      <Group justify="center" mt={20} mb={20} data-aos="fade">
        <Button
          onClick={() => handleCategoryChange("All")}
          variant={selectedCategory === "All" ? "filled" : "default"}
          radius="xl"
          className={
            selectedCategory === "All" ? "btn-primary" : "btn-secondary"
          }
        >
          All
        </Button>
        <Button
          onClick={() => handleCategoryChange("News")}
          variant={selectedCategory === "News" ? "filled" : "default"}
          radius="xl"
          className={
            selectedCategory === "News" ? "btn-primary" : "btn-secondary"
          }
        >
          News
        </Button>
        <Button
          onClick={() => handleCategoryChange("Blogs")}
          variant={selectedCategory === "Blogs" ? "filled" : "default"}
          radius="xl"
          className={
            selectedCategory === "Blogs" ? "btn-primary" : "btn-secondary"
          }
        >
          Blogs
        </Button>
        <Button
          onClick={() => handleCategoryChange("Events")}
          variant={selectedCategory === "Events" ? "filled" : "default"}
          radius="xl"
          className={
            selectedCategory === "Events" ? "btn-primary" : "btn-secondary"
          }
        >
          Events
        </Button>
      </Group>
      <PostContainer>
        <Stack gap="lg">
          {filteredPosts.map((post, index) => (
            <Grid align="center" key={index} data-aos="fade">
              <Grid.Col span={{ base: 12, md: 9, lg: 9 }}>
                <PostBlock>
                  <PostTitle>{post.title}</PostTitle>
                  <PostBody>{post.content}</PostBody>
                  <PostDate>{post.date}</PostDate>
                </PostBlock>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
                <Image
                  src={post.blogImg}
                  style={{ width: "100%", height: "auto" }}
                  alt={post.blogImg}
                />
              </Grid.Col>
            </Grid>
          ))}
        </Stack>
      </PostContainer>
    </div>
  );
}

export default PostFilter;

"use client";

import { Box, Button, Grid, Group, Stack } from "@mantine/core";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

import { SectionTitle } from "@/styles/main.styles";
import {
  CarouselContainer,
  StoryText,
  StoryUser,
  SuccessStoriesContainer,
} from "./SuccessStories.styles";
import { useState } from "react";

const SuccessStories = ({ title, data, hideFilters }) => {
  const autoplay = useRef(Autoplay());
  const fadeAnimation = useRef(Fade());

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [storyPosts, setStoryPosts] = useState(data);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setStoryPosts(data);
    } else {
      setStoryPosts(data.filter((post) => post.category === category));
    }
  };

  return (
    <Box component="div" className="container">
      <SuccessStoriesContainer>
        <SectionTitle $leftAlign data-aos="fade">
          {title}
        </SectionTitle>
        {!hideFilters && (
          <Group
            data-aos="fade"
            justify="flex-start"
            mt={18}
            style={{ zIndex: 9999, position: "relative" }}
          >
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
              onClick={() => handleCategoryChange("Founders")}
              variant={selectedCategory === "Founders" ? "filled" : "default"}
              radius="xl"
              className={
                selectedCategory === "Founders"
                  ? "btn-primary"
                  : "btn-secondary"
              }
            >
              Founders
            </Button>
            <Button
              onClick={() => handleCategoryChange("Investors")}
              variant={selectedCategory === "Investors" ? "filled" : "default"}
              radius="xl"
              className={
                selectedCategory === "Investors"
                  ? "btn-primary"
                  : "btn-secondary"
              }
            >
              Investors
            </Button>
            <Button
              onClick={() => handleCategoryChange("Partners")}
              variant={selectedCategory === "Partners" ? "filled" : "default"}
              radius="xl"
              className={
                selectedCategory === "Partners"
                  ? "btn-primary"
                  : "btn-secondary"
              }
            >
              Partners
            </Button>
            <Button
              onClick={() => handleCategoryChange("Mentors")}
              variant={selectedCategory === "Mentors" ? "filled" : "default"}
              radius="xl"
              className={
                selectedCategory === "Mentors" ? "btn-primary" : "btn-secondary"
              }
            >
              Mentors
            </Button>
          </Group>
        )}

        <Box className="ss-group">
          <CarouselContainer data-aos="fade">
            <Carousel
              withControls={false}
              withIndicators
              plugins={[autoplay.current, fadeAnimation.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.play}
            >
              {storyPosts.map((item, index) => (
                <Carousel.Slide key={index}>
                  <Grid align="flex-end">
                    <Grid.Col span={{ base: 12, md: 6, lg: 9 }}>
                      <Stack align="stretch" justify="center" gap="md">
                        <StoryText>{item.story}</StoryText>
                        <StoryUser>{item.name}</StoryUser>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                      <Image
                        src={item.img}
                        style={{ width: "100%", height: "100%" }}
                        alt="ss-img"
                      />
                    </Grid.Col>
                  </Grid>
                </Carousel.Slide>
              ))}
            </Carousel>
          </CarouselContainer>
        </Box>
      </SuccessStoriesContainer>
    </Box>
  );
};

export default SuccessStories;

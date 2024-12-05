import { Box, Button, Grid, Group, Stack } from "@mantine/core";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";

import { SectionTitle } from "@/styles/main.styles";
import {
  CarouselContainer,
  StoryText,
  StoryUser,
} from "./SuccessStories.styles";
import { useState } from "react";

const SuccessStories = ({ data }) => {
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
      <SectionTitle $leftAlign>
        <Box component="span" className="highlight">
          Success Stories
        </Box>{" "}
        from Our Community
      </SectionTitle>
      <Group
        justify="flex-start"
        mt={18}
        mb={-100}
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
            selectedCategory === "Founders" ? "btn-primary" : "btn-secondary"
          }
        >
          Founders
        </Button>
        <Button
          onClick={() => handleCategoryChange("Investors")}
          variant={selectedCategory === "Investors" ? "filled" : "default"}
          radius="xl"
          className={
            selectedCategory === "Investors" ? "btn-primary" : "btn-secondary"
          }
        >
          Investors
        </Button>
        <Button
          onClick={() => handleCategoryChange("Partners")}
          variant={selectedCategory === "Partners" ? "filled" : "default"}
          radius="xl"
          className={
            selectedCategory === "Partners" ? "btn-primary" : "btn-secondary"
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
      <Box>
        <CarouselContainer>
          <Carousel withControls={false} withIndicators>
            {storyPosts.map((item, index) => (
              <Carousel.Slide key={index}>
                <Grid align="flex-end">
                  <Grid.Col span={9}>
                    <Stack align="stretch" justify="center" gap="md">
                      <StoryText>{item.story}</StoryText>
                      <StoryUser>{item.name}</StoryUser>
                    </Stack>
                  </Grid.Col>
                  <Grid.Col span={3}>
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
    </Box>
  );
};

export default SuccessStories;

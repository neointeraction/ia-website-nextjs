"use client";

import { Box, Button, Center, Grid, Group, Stack } from "@mantine/core";
import React, { useState } from "react";

import PostBlock from "@/components/PostBlock";
import EventGrid from "@/components/EventGrid";
import SectionTitle from "@/utils/SectionTitle";

function PostSection({ newsData, blogsData, eventData }) {
  const [selectedCategory, setSelectedCategory] = useState("News");

  const handleCategoryChange = (val) => {
    setSelectedCategory(val);
  };

  return (
    <div className="container">
      <Center>
        <SectionTitle
          data-aos="fade"
          $highlight={"Insights"}
          title={"Insights That Shape Your Path to Success"}
        />
      </Center>
      <Group justify="center" mt={20} mb={20} data-aos="fade">
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
      <>
        {selectedCategory === "News" && (
          <Box>
            <Stack gap="lg">
              <Grid align="center" data-aos="fade">
                {newsData.map((post, index) => (
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 6 }}
                    key={index}
                    className="with-border"
                  >
                    <PostBlock
                      title={post.title}
                      content={post.content}
                      date={post.date}
                      author={post.author}
                      blogImg={post.blogImg}
                      withoutImage={post.withoutImage}
                    />
                  </Grid.Col>
                ))}
              </Grid>
            </Stack>
          </Box>
        )}
      </>
      <>
        {selectedCategory === "Blogs" && (
          <Box>
            <Stack gap="lg">
              {blogsData.map((post, index) => (
                <Box key={index}>
                  <PostBlock
                    title={post.title}
                    content={post.content}
                    date={post.date}
                    author={post.author}
                    blogImg={post.blogImg}
                    withoutImage={post.withoutImage}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </>
      <>
        {selectedCategory === "Events" && (
          <Box>
            {eventData.map((item, index) => (
              <Box key={index}>
                <EventGrid
                  date={item.date}
                  eventTitle={item.title}
                  eventSubtitle={item.subtitle}
                  eventTiming={item.timing}
                  eventLocation={item.location}
                />
              </Box>
            ))}
          </Box>
        )}
      </>
    </div>
  );
}

export default PostSection;

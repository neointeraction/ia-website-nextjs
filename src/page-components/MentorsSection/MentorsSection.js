"use client";

import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box, Grid, Select } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FilterBlock, MentorsContainerBlock } from "./MentorsSection.styles";

import UserProfileCard from "@/components/UserProfileCard";
import generateRandomColor from "@/methods/generateRandomColor";
import { Carousel } from "@mantine/carousel";
import { useState } from "react";

const MentorsSection = ({ title, subtitle, data, withFilters }) => {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  const [domain, setDomain] = useState("");
  const [theses, setTheses] = useState("");

  const filteredData = data.filter((item) => {
    const matchesDomain = !domain || item.domain === domain;
    const matchesThesis = !theses || item.theses === theses;
    return matchesDomain && matchesThesis;
  });

  return (
    <Box component="div" className="container">
      <SectionTitle data-aos="fade">{title}</SectionTitle>
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}

      {withFilters && (
        <FilterBlock data-aos="fade">
          <Box className="filters">
            <Grid gutter={isMobileView ? 15 : 30} justify="center">
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <Select
                  clearable
                  className="filter-select"
                  placeholder="Choose domain"
                  data={[
                    { value: "B2B", label: "B2B" },
                    { value: "Education", label: "Education" },
                    { value: "Fintech", label: "Fintech" },
                    { value: "Consumer", label: "Consumer" },
                    { value: "Healthcare", label: "Healthcare" },
                    {
                      value: "Real Estate and Construction",
                      label: "Real Estate and Construction",
                    },
                    { value: "Industrials", label: "Industrials" },
                  ]}
                  value={domain}
                  onChange={setDomain}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <Select
                  clearable
                  className="filter-select"
                  placeholder="Choose theses"
                  data={[
                    {
                      value: "RUMS",
                      label: "Robotics & Unmanned & Space (RUMS)",
                    },
                    {
                      value: "GaME",
                      label: "Gaming, Media & Entertainment (GaME)",
                    },
                    { value: "Impact Labs", label: "Impact Labs" },
                    { value: "Consumer", label: "Consumer" },
                    {
                      value: "EMC",
                      label: "Energy, Mobility & Connectivity (EMC)",
                    },
                    { value: "GenAI", label: "Singularity/GenAI" },
                  ]}
                  value={theses}
                  onChange={setTheses}
                />
              </Grid.Col>
            </Grid>
          </Box>
        </FilterBlock>
      )}

      <MentorsContainerBlock data-aos="fade">
        {!isMobileView ? (
          <Grid>
            {filteredData.map((item, index) => (
              <Grid.Col span={3} key={index}>
                <Box component="div">
                  <UserProfileCard
                    img={item.img}
                    fill={generateRandomColor()}
                    name={item.name}
                    designation={item.designation}
                  />
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        ) : (
          <Carousel
            slideSize="70%"
            align="start"
            slideGap="md"
            withControls={false}
          >
            {filteredData.map((item, index) => (
              <Carousel.Slide key={index}>
                <Box component="div">
                  <UserProfileCard
                    img={item.img}
                    fill={generateRandomColor()}
                    name={item.name}
                    designation={item.designation}
                  />
                </Box>
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
      </MentorsContainerBlock>
    </Box>
  );
};

export default MentorsSection;

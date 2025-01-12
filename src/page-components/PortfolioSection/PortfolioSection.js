"use client";

import { SectionSubTitle } from "@/styles/main.styles";
import { Box, Grid, Group, Select } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  FilterBlock,
  PortfolioContainerBlock,
} from "./PortfolioSection.styles";

import { Carousel } from "@mantine/carousel";
import { useState } from "react";
import SectionTitle from "@/utils/SectionTitle";
import PortfolioCard from "@/components/PortfolioCard";

const PortfolioSection = ({ data }) => {
  const {
    title,
    highlight_text: highlightedText,
    sub_title: subtitle,
    data: portfolioData,
    withFilters,
  } = data;

  const isMobileView = useMediaQuery("(max-width: 768px)");

  const [domain, setDomain] = useState("");
  const [theses, setTheses] = useState("");
  const [startupStage, setStartupStage] = useState(""); // Stages of startup
  const [location, setLocation] = useState(""); // Location
  const [sortBy, setSortBy] = useState(""); // Sort by

  const filteredData = portfolioData
    ?.filter((item) => {
      const matchesDomain = !domain || item.domain === domain;
      const matchesThesis = !theses || item.theses === theses;
      const matchesStartupStage =
        !startupStage || item.startupStage === startupStage;
      const matchesLocation = !location || item.location === location;
      return (
        matchesDomain && matchesThesis && matchesStartupStage && matchesLocation
      );
    })
    ?.sort((a, b) => {
      if (sortBy === "ascending") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "descending") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

  return (
    <Box component="div" className="container">
      <SectionTitle $highlight={highlightedText} title={title} />
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}

      {withFilters && (
        <FilterBlock data-aos="fade">
          <Box className="filters">
            <Group gap="sm">
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
              <Select
                clearable
                className="filter-select"
                placeholder="Stages of startup"
                data={[
                  { value: "Idea", label: "Idea" },
                  { value: "Seed", label: "Seed" },
                  { value: "Early Growth", label: "Early Growth" },
                  { value: "Scaling", label: "Scaling" },
                ]}
                value={startupStage}
                onChange={setStartupStage}
              />
              <Select
                clearable
                className="filter-select"
                placeholder="Location"
                data={[
                  { value: "USA", label: "USA" },
                  { value: "India", label: "India" },
                  { value: "Europe", label: "Europe" },
                  { value: "Asia", label: "Asia" },
                ]}
                value={location}
                onChange={setLocation}
              />
              <Select
                clearable
                className="filter-select"
                placeholder="Sort by"
                data={[
                  { value: "ascending", label: "Ascending" },
                  { value: "descending", label: "Descending" },
                ]}
                value={sortBy}
                onChange={setSortBy}
              />
            </Group>
          </Box>
        </FilterBlock>
      )}

      <PortfolioContainerBlock data-aos="fade">
        {!isMobileView ? (
          <Grid>
            {filteredData.map((item, index) => (
              <Grid.Col span={3} key={index}>
                <Box component="div" style={{ marginTop: 20 }}>
                  <PortfolioCard
                    imgSrc={item.imgSrc}
                    title={item.title}
                    handleClick={() => {}}
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
                  <PortfolioCard
                    imgSrc={item.imgSrc}
                    title={item.title}
                    handleClick={() => {}}
                  />
                </Box>
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
      </PortfolioContainerBlock>
    </Box>
  );
};

export default PortfolioSection;

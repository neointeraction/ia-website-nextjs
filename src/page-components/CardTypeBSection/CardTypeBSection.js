"use client";

import { SectionSubTitle } from "@/styles/main.styles";
import { Box, Center, Grid, Select, TextInput } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { CardContainerBlock, FilterBlock } from "./CardTypeBSection.styles";
import { IconSearch } from "@tabler/icons-react";
import CardTypeB from "@/components/CardTypeB";
import SectionTitle from "@/utils/SectionTitle";

const CardTypeBSection = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    has_textured_card: hasTexturedCard,
    title,
    sub_title: subtitle,
    highlight: highlightedText,
    with_filters: withFilters,
    data: componentData,
  } = data;

  const isMobileView = useMediaQuery("(max-width: 768px)");

  const [domain, setDomain] = useState("");
  const [theses, setTheses] = useState("");
  const [search, setSearch] = useState("");

  const filteredData = componentData.filter((item) => {
    const matchesDomain = !domain || item.domain === domain;
    const matchesThesis = !theses || item.theses === theses;
    const matchesSearch =
      !search || item.title.toLowerCase().includes(search.toLowerCase());
    return matchesDomain && matchesThesis && matchesSearch;
  });

  return (
    <Box component="div" className="container">
      <SectionTitle
        data-aos="fade"
        $highlight={highlightedText}
        title={title}
      />
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}

      {withFilters && (
        <FilterBlock data-aos="fade">
          <Box className="filters">
            <Grid gutter={isMobileView ? 15 : 30}>
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
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <TextInput
                  leftSection={<IconSearch style={{ width: 16, height: 16 }} />}
                  className="filter-search"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Grid.Col>
            </Grid>
          </Box>
        </FilterBlock>
      )}

      <CardContainerBlock>
        <Grid gutter={isMobileView ? 15 : hasTexturedCard ? 15 : 60}>
          {filteredData.map((item, index) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
              <Box component="div" data-aos="fade">
                <Center className="mob-center">
                  <CardTypeB
                    hasTexturedCard={hasTexturedCard}
                    iconNormal={item.icon_normal.url}
                    iconHover={item.icon_hover.url}
                    title={item.title}
                    bodyText={item.body_text}
                    path={item.path}
                  />
                </Center>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </CardContainerBlock>
    </Box>
  );
};

export default CardTypeBSection;

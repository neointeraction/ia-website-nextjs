"use client";

import { SectionSubTitle } from "@/styles/main.styles";
import { Box, Center, Grid, Select } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { CardContainerBlock, FilterBlock } from "./WorkspaceSection.styles";
import WorkspaceCard from "@/components/WorkspaceCard";

import Mask from "@/images/img-mask.png";
import MaskW1 from "@/images/temp/w1.png";
import SectionTitle from "@/utils/SectionTitle";

const WorkspaceSection = ({ subtitle, withFilters }) => {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  const [sizeFilter, setSizeFilter] = useState("");
  const [seatsFilter, setSeatsFilter] = useState("");

  const data = [
    {
      title: "MG Road Upper Ground Floor",
      description:
        "Located in the heart of Gurgaon's vibrant business district, this workspace offers easy access to transportation and amenities.",
      size: "15,000 sq. ft.",
      members: "300 members",
      src: "/workspace1.jpg",
      maskSrc: "/img-mask.png",
    },
    {
      title: "MG Road Lower Ground Floor",
      description:
        "Located in the heart of Gurgaon's vibrant business district, this workspace offers easy access to transportation and amenities.",
      size: "10,000 sq. ft.",
      members: "200 members",
      src: "/workspace2.jpg",
      maskSrc: "/img-mask.png",
    },
    {
      title: "MG Road Upper Ground Floor",
      description:
        "Located in the heart of Gurgaon's vibrant business district, this workspace offers easy access to transportation and amenities.",
      size: "15,000 sq. ft.",
      members: "300 members",
      src: "/workspace1.jpg",
      maskSrc: "/img-mask.png",
    },
    {
      title: "Vatika Triangle",
      description:
        "Located in the heart of Gurgaon's vibrant business district, this workspace offers easy access to transportation and amenities.",
      size: "8,500 sq. ft.",
      members: "150 members",
      src: "/workspace4.jpg",
      maskSrc: "/img-mask.png",
    },
    {
      title: "Sohna Road",
      description:
        "Located in the heart of Gurgaon's vibrant business district, this workspace offers easy access to transportation and amenities.",
      size: "12,000 sq. ft.",
      members: "250 members",
      src: "/workspace5.jpg",
      maskSrc: "/img-mask.png",
    },
    {
      title: "BPTP Centra One",
      description:
        "Located in the heart of Gurgaon's vibrant business district, this workspace offers easy access to transportation and amenities.",
      size: "18,000 sq. ft.",
      members: "350 members",
      src: "/workspace6.jpg",
      maskSrc: "/img-mask.png",
    },
  ];

  const sizeOptions = [
    { value: "5000-10000", label: "5000-10000 sq. ft." },
    { value: "10000-15000", label: "10000-15000 sq. ft." },
    { value: "15000-20000", label: "15000-20000 sq. ft." },
    { value: "20000-25000", label: "20000-25000 sq. ft." },
  ];

  const seatsOptions = [
    { value: "50-100", label: "50-100 seats" },
    { value: "100-200", label: "100-200 seats" },
    { value: "200-300", label: "200-300 seats" },
    { value: "300-400", label: "300-400 seats" },
  ];

  const filteredData = data.filter((item) => {
    const sizeValue = parseInt(item.size.replace(/[^0-9]/g, ""), 10);
    const membersValue = parseInt(item.members.replace(/[^0-9]/g, ""), 10);

    const matchesSize =
      !sizeFilter ||
      (sizeValue >= parseInt(sizeFilter.split("-")[0]) &&
        sizeValue <= parseInt(sizeFilter.split("-")[1]));

    const matchesSeats =
      !seatsFilter ||
      (membersValue >= parseInt(seatsFilter.split("-")[0]) &&
        membersValue <= parseInt(seatsFilter.split("-")[1]));

    return matchesSize && matchesSeats;
  });

  return (
    <Box component="div" className="container">
      <SectionTitle
        data-aos="fade"
        $highlight={"Dynamic Workspaces"}
        title={"Explore Our Dynamic Workspaces Across Gurgaon"}
      />
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
                  placeholder="Filter by sq. ft."
                  data={sizeOptions}
                  value={sizeFilter}
                  onChange={setSizeFilter}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <Select
                  clearable
                  className="filter-select"
                  placeholder="Filter by number of seats"
                  data={seatsOptions}
                  value={seatsFilter}
                  onChange={setSeatsFilter}
                />
              </Grid.Col>
            </Grid>
          </Box>
        </FilterBlock>
      )}

      <CardContainerBlock>
        <Grid gutter={isMobileView ? 15 : 15}>
          {filteredData.map((item, index) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
              <Box component="div" data-aos="fade">
                <Center className="mob-center">
                  <WorkspaceCard
                    src={MaskW1}
                    maskSrc={Mask}
                    alt={item.title}
                    title={item.title}
                    description={item.description}
                    size={item.size}
                    members={item.members}
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

export default WorkspaceSection;

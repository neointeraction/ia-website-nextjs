import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box, Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { MentorsContainerBlock } from "./MentorsSection.styles";

import UserProfileCard from "@/components/UserProfileCard";
import generateRandomColor from "@/methods/generateRandomColor";
import { Carousel } from "@mantine/carousel";

const MentorsSection = ({ title, subtitle, data }) => {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Box component="div" className="container">
      <SectionTitle data-aos="fade">{title}</SectionTitle>
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}
      <MentorsContainerBlock data-aos="fade">
        {!isMobileView ? (
          <Grid>
            {data.map((item, index) => (
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
            {data.map((item, index) => (
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

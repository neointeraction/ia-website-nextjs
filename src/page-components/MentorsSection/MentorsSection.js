import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box, Grid } from "@mantine/core";
import { MentorsContainerBlock } from "./MentorsSection.styles";

import UserProfileCard from "@/components/UserProfileCard";
import generateRandomColor from "@/methods/generateRandomColor";

const MentorsSection = ({ title, subtitle, data }) => {
  return (
    <Box component="div" className="container">
      <SectionTitle>{title}</SectionTitle>
      {subtitle && <SectionSubTitle>{subtitle}</SectionSubTitle>}
      <MentorsContainerBlock>
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
      </MentorsContainerBlock>
    </Box>
  );
};

export default MentorsSection;

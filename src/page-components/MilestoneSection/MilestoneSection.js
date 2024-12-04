import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box, Grid } from "@mantine/core";
import { MilestoneContainerBlock } from "./MilestoneSection.styles";

import Count from "@/components/Count";

const MilestoneSection = ({ title, subtitle, data }) => {
  return (
    <Box component="div" className="container">
      <SectionTitle>{title}</SectionTitle>
      {subtitle && <SectionSubTitle>{subtitle}</SectionSubTitle>}
      <MilestoneContainerBlock>
        <Grid justify="center" align="center">
          {data.map((item, index) => (
            <Grid.Col span={3} key={index}>
              <Box component="div">
                <Count countValue={item.count} label={item.label} suffix="+" />
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </MilestoneContainerBlock>
    </Box>
  );
};

export default MilestoneSection;

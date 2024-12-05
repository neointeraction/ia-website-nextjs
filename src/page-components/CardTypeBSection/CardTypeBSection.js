import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box, Center, Grid } from "@mantine/core";
import { CardContainerBlock } from "./CardTypeBSection.styles";

import CardTypeB from "@/components/CardTypeB";

const CardTypeBSection = ({ title, subtitle, data }) => {
  return (
    <Box component="div" className="container">
      <SectionTitle>{title}</SectionTitle>
      {subtitle && <SectionSubTitle>{subtitle}</SectionSubTitle>}
      <CardContainerBlock>
        <Grid gutter={60}>
          {data.map((item, index) => (
            <Grid.Col span={4} key={index}>
              <Box component="div">
                <Center>
                  <CardTypeB
                    icon={item.icon}
                    title={item.title}
                    bodyText={item.bodyText}
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

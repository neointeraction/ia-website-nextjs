import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box, Center, Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { CardContainerBlock } from "./CardTypeBSection.styles";

import CardTypeB from "@/components/CardTypeB";

const CardTypeBSection = ({ title, subtitle, data }) => {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Box component="div" className="container">
      <SectionTitle data-aos="fade">{title}</SectionTitle>
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}
      <CardContainerBlock>
        <Grid gutter={isMobileView ? 15 : 60}>
          {data.map((item, index) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
              <Box component="div" data-aos="fade">
                <Center className="mob-center">
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

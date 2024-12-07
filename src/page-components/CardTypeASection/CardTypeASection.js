import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box, Grid } from "@mantine/core";
import { CardContainerBlock } from "./CardTypeASection.styles";
import CardTypeA from "@/components/CardTypeA";
import { useMediaQuery } from "@mantine/hooks";

const CardTypeASection = ({ title, subtitle, data }) => {
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
                <CardTypeA
                  icon={item.icon}
                  title={item.title}
                  bodyText={item.bodyText}
                />
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </CardContainerBlock>
    </Box>
  );
};

export default CardTypeASection;

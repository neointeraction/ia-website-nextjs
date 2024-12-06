import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";
import { Box, Grid } from "@mantine/core";
import { CardContainerBlock } from "./CardTypeASection.styles";
import CardTypeA from "@/components/CardTypeA";

const CardTypeASection = ({ title, subtitle, data }) => {
  return (
    <Box component="div" className="container">
      <SectionTitle data-aos="fade">{title}</SectionTitle>
      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}
      <CardContainerBlock>
        <Grid gutter={60}>
          {data.map((item, index) => (
            <Grid.Col span={4} key={index}>
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

"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Box, Grid } from "@mantine/core";

import {
  ClientLogoContainer,
  ClientLogoFlex,
  ClientLogoItem,
} from "./ClientMarquee.styles";

import { SectionSubTitle } from "@/styles/main.styles";
import SectionTitle from "@/utils/SectionTitle";

const ClientMarquee = ({ data }) => {
  const {
    title,
    highlight_text: highlightedText,
    sub_title: subtitle,
    logos = [],
    grid,
  } = data;

  return (
    <Box className="container">
      <SectionTitle
        data-aos="fade"
        $highlight={highlightedText}
        title={title}
      />

      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}
      <ClientLogoContainer data-aos="fade">
        {grid ? (
          <Grid gutter={40}>
            {logos.map((item, index) => (
              <Grid.Col span={{ base: 12, md: 6, lg: 2 }} key={index}>
                <Image
                  src={item.logoImg.url}
                  alt="client-logo"
                  width={item.logoImg.width}
                  height={item.logoImg.height}
                />
              </Grid.Col>
            ))}
          </Grid>
        ) : (
          <Marquee pauseOnHover>
            <ClientLogoFlex>
              {logos.map((item, index) => (
                <ClientLogoItem key={index}>
                  <Image
                    src={item.logoImg.url}
                    alt="client-logo"
                    width={item.logoImg.width}
                    height={item.logoImg.height}
                  />
                </ClientLogoItem>
              ))}
            </ClientLogoFlex>
          </Marquee>
        )}
      </ClientLogoContainer>
    </Box>
  );
};

export default ClientMarquee;

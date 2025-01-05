"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Box } from "@mantine/core";

import {
  ClientLogoContainer,
  ClientLogoFlex,
  ClientLogoItem,
} from "./ClientMarquee.styles";
import { SectionSubTitle } from "@/styles/main.styles";
import SectionTitle from "@/utils/SectionTitle";

const ClientMarquee = ({ data }) => {
  const { title, highlight_text: highlightedText, logos = [] } = data;

  return (
    <Box className="container">
      <SectionTitle
        data-aos="fade"
        $highlight={highlightedText}
        title={title}
      />

      {data.subtitle && (
        <SectionSubTitle data-aos="fade">{data.subtitle}</SectionSubTitle>
      )}
      <ClientLogoContainer data-aos="fade">
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
      </ClientLogoContainer>
    </Box>
  );
};

export default ClientMarquee;

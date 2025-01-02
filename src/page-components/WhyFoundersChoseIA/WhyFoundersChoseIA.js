"use client";

import { SectionTitle } from "@/styles/main.styles";
import { Box } from "@mantine/core";
import {
  ArrowWithText,
  ReasonPointBlock,
  WhyFoundersChoseIAContainer,
} from "./WhyFoundersChoseIA.styles";
import Image from "next/image";

import ArrowTopLeft from "@/images/arrows/top-left.png";
import ArrowTopRight from "@/images/arrows/top-right.png";
import ArrowLeft from "@/images/arrows/left.png";
import ArrowRight from "@/images/arrows/right.png";
import ArrowBottom from "@/images/arrows/bottom.png";

const WhyFoundersChoseIA = ({ title }) => {
  return (
    <Box component="div" className="container">
      <WhyFoundersChoseIAContainer>
        <SectionTitle className="section-title" data-aos="fade">
          {title}
        </SectionTitle>
        <ReasonPointBlock
          className="top-left"
          data-aos="fade"
          data-aos-delay={300}
          // data-aos-offset={-100}
        >
          {/* <ReasonText>Proven Startup Success Methodologies</ReasonText> */}
          <ArrowWithText
            className="top-left-arrow-text"
            $text="Proven Startup Success Methodologies"
          >
            <Image
              src={ArrowTopLeft}
              width={197}
              height={128}
              alt="banner-img-icon"
              className="arrow-image-text"
            />
          </ArrowWithText>
        </ReasonPointBlock>
        <ReasonPointBlock
          className="top-right"
          data-aos="fade"
          data-aos-delay={300}
          // data-aos-offset={-100}
        >
          <ArrowWithText
            className="top-right-arrow-text"
            $text="Tailored Solutions for High-Growth Startups"
          >
            <Image
              src={ArrowTopRight}
              width={244}
              height={176}
              alt="banner-img-icon"
              className="arrow-image-text"
            />
          </ArrowWithText>
        </ReasonPointBlock>
        <ReasonPointBlock
          className="left"
          data-aos="fade"
          data-aos-delay={500}
          data-aos-offset={-100}
        >
          <ArrowWithText
            className="left-arrow-text"
            $text="Accelerated Market Entry"
          >
            <Image
              src={ArrowLeft}
              width={203}
              height={115}
              alt="banner-img-icon"
            />
          </ArrowWithText>
        </ReasonPointBlock>
        <ReasonPointBlock
          className="right"
          data-aos="fade"
          data-aos-delay={800}
          data-aos-offset={-100}
        >
          <ArrowWithText
            className="right-arrow-text"
            $text="A Community for Life"
          >
            <Image
              src={ArrowRight}
              width={158}
              height={82}
              alt="banner-img-icon"
            />
          </ArrowWithText>
        </ReasonPointBlock>
        <ReasonPointBlock
          className="bottom"
          data-aos="fade"
          data-aos-delay={1000}
          data-aos-offset={-300}
        >
          <ArrowWithText
            className="bottom-arrow-text"
            $text="Capital and Strategic Partnerships"
          >
            <Image
              src={ArrowBottom}
              width={34}
              height={117}
              alt="banner-img-icon"
            />
          </ArrowWithText>
        </ReasonPointBlock>
      </WhyFoundersChoseIAContainer>
    </Box>
  );
};

export default WhyFoundersChoseIA;

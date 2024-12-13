import React from "react";
import Head from "next/head";
import { Box, UnstyledButton } from "@mantine/core";

import Banner from "@/images/singularity-banner.png";
import Arrow from "@/images/title-arrow.svg";
import StarRed from "@/images/star-red.svg";
import StarBlue from "@/images/star-blue.svg";
import StarGreen from "@/images/star-green.svg";
import StarYellow from "@/images/star-yellow.svg";

import { BreadcrumbText, Section } from "@/styles/main.styles";

import PageBanner from "@/page-components/PageBanner";
import ClientMarquee from "@/page-components/ClientMarquee";
import Image from "next/image";
import {
  dataClient,
  highlightsData,
  mentorsData,
  successStoryData,
} from "@/mock/data";
import CardTypeASection from "@/page-components/CardTypeASection";
import MilestoneSection from "@/page-components/MilestoneSection";
import SuccessStories from "@/page-components/SuccessStories";
import MentorsSection from "@/page-components/MentorsSection";

const singularity = () => {
  const breadcrumbData = [
    { title: "What we do", href: "#" },
    { title: "Our theses", href: "#" },
    { title: "Singularity/GenAI" },
  ].map((item, index) => (
    <React.Fragment key={index}>
      {item.href ? (
        <UnstyledButton
          href={item.href}
          key={index}
          className="breadcrumb-link"
        >
          {item.title}
        </UnstyledButton>
      ) : (
        <BreadcrumbText> {item.title}</BreadcrumbText>
      )}
    </React.Fragment>
  ));

  return (
    <Box>
      <>
        <Head>
          <title>India Accelerator - Singularity/Gen AI</title>
          <meta name="description" content="India Accelerator" />
          <meta name="keywords" content="India Accelerator" />
        </Head>
      </>
      <Section>
        <PageBanner
          breadcrumbData={breadcrumbData}
          title="Singularity/GenAI"
          subtitle="Generative Al is poised to unleash the next wave of productivity and digital revolution."
          btnText="Apply Now"
          onClick={() => {}}
          bannerImg={Banner}
        />
      </Section>
      <Section $hasTexture>
        <ClientMarquee
          title={
            <>
              Our Leading Startups in
              <Box component="span" className="highlight hbf">
                Singularity and GenAI
              </Box>
              <Box component="span" ml={14}>
                <Image src={Arrow} alt="Arrow" width={24} height={24} />
              </Box>
            </>
          }
          subtitle="Supporting bold ideas and ambitious founders on their journey to success."
          data={dataClient}
        />
      </Section>
      <Section>
        <CardTypeASection
          px
          title={
            <>
              <Box component="span" className="highlight">
                Our Vision
              </Box>
              for Singularity and GenAI
            </>
          }
          subtitle="We are committed to shaping a world where Generative AI and deep tech revolutionize industries and improve lives."
          data={[
            {
              icon: StarRed,
              title: "GenAI Revolution",
              bodyText: "transforming industries with powerful AI tools",
            },
            {
              icon: StarBlue,
              title: "Foundation Models",
              bodyText: "enable smarter automation and content generation",
            },
            {
              icon: StarGreen,
              title: "Global AI Growth",
              bodyText: "fueling the rapid expansion of GenAI and deep tech.",
            },
          ]}
        />
      </Section>
      <Section>
        <MilestoneSection
          cols={3}
          title={
            <>
              Industry
              <Box component="span" className="highlight hbf">
                Highlights
              </Box>
            </>
          }
          subtitle="We are committed to shaping a world where Generative AI and deep tech revolutionize industries and improve lives."
          data={highlightsData}
        />
      </Section>
      <Section>
        <SuccessStories
          hideFilters
          title={
            <>
              <Box component="span" className="highlight">
                Success Stories
              </Box>
              from Our Founders
            </>
          }
          data={successStoryData}
        />
      </Section>
      <Section>
        <CardTypeASection
          title={
            <>
              How
              <Box component="span" className="highlight hbf">
                Singularity and GenAI
              </Box>
              are Shaping Industries
            </>
          }
          subtitle="Explore real-world use cases across industries, showcasing how we drive value at every stage of the supply chain."
          data={[
            {
              icon: StarRed,
              title: "Healthcare",
            },
            {
              icon: StarBlue,
              title: "Al Tooling",
            },
            {
              icon: StarGreen,
              title: "Developer Productivity",
            },
            {
              icon: StarYellow,
              title: "Customer Operations",
            },
            {
              icon: StarRed,
              title: "Legal",
            },
            {
              icon: StarGreen,
              title: "Marketing & Sales",
            },
          ]}
        />
      </Section>
      <Section>
        <MentorsSection
          title={
            <>
              Meet Our
              <Box component="span" className="highlight hbf">
                Mentor Board
              </Box>
              <Box component="span" ml={14}>
                <Image src={Arrow} alt="Arrow" width={24} height={24} />
              </Box>
            </>
          }
          subtitle="Our Mentor Board of industry experts provides guidance to help startups grow and succeed"
          data={mentorsData}
        />
      </Section>
    </Box>
  );
};

export default singularity;

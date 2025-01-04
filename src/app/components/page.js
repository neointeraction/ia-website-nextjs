"use client";

import TextSlider from "@/components/TextSlider";
import {
  dataClient,
  faqData,
  filteredPostsData,
  galleryData,
  highlightsData,
  homeMilestoneData,
  mentorsData,
  mentorsDataDetailed,
  mentorsSpeakData,
  PRServicesData,
  singularityBreadcrumbData,
  successStoryData,
  TextSliderData,
  timelineData,
  upcomingEvents,
} from "@/mock/data";
import ClientMarquee from "@/page-components/ClientMarquee";
import HomeBanner from "@/page-components/HomeBanner";
import { Box, Divider, Grid, Paper, Stack } from "@mantine/core";
import Head from "next/head";
import React from "react";

import Arrow from "@/images/title-arrow.svg";
import IAgri from "@/images/SVGIcons/IAgri";
import Cipher from "@/images/SVGIcons/Cipher";
import Tech from "@/images/SVGIcons/Tech";
import Finseed from "@/images/SVGIcons/Finseed";
import Pulse from "@/images/SVGIcons/Pulse";
import DeepTech from "@/images/SVGIcons/DeepTech";
import StarRed from "@/images/star-red.svg";
import StarBlue from "@/images/star-blue.svg";
import StarGreen from "@/images/star-green.svg";
import StarYellow from "@/images/star-yellow.svg";
import SA from "@/images/startup-accelerator.png";
import EG from "@/images/expert-guidance.png";
import SP from "@/images/strategic-partnerships.png";
import FR from "@/images/funding-resources.png";
import CO from "@/images/co-working-space.png";
import BannerImg from "@/images/banner1.png";
import IAngels from "@/images/SVGIcons/IAngels";
import Finvolve from "@/images/SVGIcons/Finvolve";
import FundingSchemes from "@/images/SVGIcons/FundingSchemes";
import Banner from "@/images/singularity-banner.png";
import GovernmentIcon from "@/images/GP.svg";

import Image from "next/image";
import { Section } from "@/styles/main.styles";
import MilestoneSection from "@/page-components/MilestoneSection";
import WhyFoundersChoseIA from "@/page-components/WhyFoundersChoseIA";
import MentorsSection from "@/page-components/MentorsSection";
import SuccessStories from "@/page-components/SuccessStories";
import StrategicFocusSection from "@/page-components/StrategicFocusSection";
import CardTypeBSection from "@/page-components/CardTypeBSection";
import CardTypeASection from "@/page-components/CardTypeASection";
import HoverCardSection from "@/page-components/HoverCardSection";
import PostFilter from "@/page-components/PostFilter";
import InfoBanner from "@/page-components/InfoBanner";
import FAQSection from "@/page-components/FAQSection";
import PageBanner from "@/page-components/PageBanner";
import { breadcrumbGenerator } from "@/utils/breadcrumbs";
import TestimonialSection from "@/page-components/TestimonialSection";
import EventSection from "@/page-components/EventSection";
import TextImageSection from "@/page-components/TextImageSection";
import GallerySection from "@/page-components/GallerySection";

import WorkspaceSection from "@/page-components/WorkspaceSection";

import VideoSection from "@/page-components/VideoSection";
import SocialMediaFeedSection from "@/page-components/SocialMediaFeedSection";

const components = () => {
  return (
    <Box className="container-fluid">
      <>
        <Head>
          <title>India Accelerator - Components</title>
          <meta name="description" content="India Accelerator" />
          <meta name="keywords" content="India Accelerator" />
        </Head>
      </>

      <Stack
        bg="var(--mantine-color-body)"
        align="stretch"
        justify="center"
        gap="lg"
        py={20}
      >
        {/* TextSlider  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="TextSlider"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <TextSlider data={TextSliderData} />
          </Box>
        </Paper>
        {/* HomeBanner */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="HomeBanner"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <HomeBanner />
          </Box>
        </Paper>
        {/* ClientMarquee */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="ClientMarquee"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <Section $hasTexture>
              <ClientMarquee
                title={
                  <>
                    Startups We’re
                    <Box component="span" className="highlight hbf">
                      Proud to Back
                    </Box>
                    <Box component="span" ml={14}>
                      <Image src={Arrow} alt="Arrow" width={24} height={24} />
                    </Box>
                  </>
                }
                subtitle="Supporting bold ideas and ambitious founders on their journey to
        success."
                data={dataClient}
              />
            </Section>
          </Box>
        </Paper>
        {/* MilestoneSection  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="MilestoneSection"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <MilestoneSection
              title={
                <>
                  Awarded
                  <Box component="span" className="highlight hbf">
                    “best accelerator of India”
                  </Box>
                  in 2022 by the Government of India
                  <Box component="span" ml={14}>
                    <Image src={Arrow} alt="Arrow" width={24} height={24} />
                  </Box>
                </>
              }
              subtitle="IA offers unmatched support, expert mentorship, and tailored growth solutions to empower startups at every stage."
              data={homeMilestoneData}
            />
          </Box>
          {/* variation  */}
          <Divider
            my="xs"
            label="MilestoneSection - variation prop - cols 3"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
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
          </Box>
        </Paper>
        {/* WhyFoundersChoseIA */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="WhyFoundersChoseIA"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <WhyFoundersChoseIA
              title={
                <>
                  Why
                  <Box component="span" className="highlight hbf">
                    400+ founders
                  </Box>
                  chose IA
                </>
              }
            />
          </Box>
        </Paper>
        {/* MentorsSection  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="MentorsSection"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <MentorsSection
              title={
                <>
                  <Box component="span" className="highlight">
                    Expert Mentorship
                  </Box>
                  from Industry Leaders
                  <Box component="span" ml={14}>
                    <Image src={Arrow} alt="Arrow" width={24} height={24} />
                  </Box>
                </>
              }
              subtitle="Our network of mentors helps startups overcome challenges and scale with confidence."
              data={mentorsData}
            />
          </Box>
          {/* variation  */}
          <Divider
            my="xs"
            label="MentorsSection - variation prop - withFilters"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <MentorsSection
              withFilters
              title={
                <>
                  Meet our
                  <Box component="span" className="highlight hbf">
                    Network of Investors
                  </Box>
                  <Box component="span" ml={14}>
                    <Image src={Arrow} alt="Arrow" width={24} height={24} />
                  </Box>
                </>
              }
              subtitle="Our diverse network of visionary investors committed to driving innovation and growth."
              data={mentorsDataDetailed}
            />
          </Box>
        </Paper>
        {/* SuccessStories  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="SuccessStories"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <SuccessStories
              title={
                <>
                  <Box component="span" className="highlight">
                    Success Stories
                  </Box>
                  from Our Community
                </>
              }
              data={successStoryData}
            />
          </Box>
        </Paper>
        {/* StrategicFocusSection */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="StrategicFocusSection"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <StrategicFocusSection
              title={
                <>
                  <Box component="span" className="highlight">
                    Six Theses
                  </Box>
                  Defining Our Strategic Focus
                </>
              }
              subtitle="Driving innovation through six strategic focus areas."
            />
          </Box>
        </Paper>
        {/* CardTypeBSection  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="CardTypeBSection"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <CardTypeBSection
              title={
                <>
                  <Box component="span" className="highlight">
                    Accelerator Programs
                  </Box>
                  , And so much more
                  <Box component="span" ml={14}>
                    <Image src={Arrow} alt="Arrow" width={24} height={24} />
                  </Box>
                </>
              }
              subtitle="Our Accelerator Programs  offer curated mentorship, connections, and a comprehensive support system for growth-stage startups."
              data={[
                {
                  icon: <IAgri />,
                  title: "IA- iAgri",
                  path: "/",
                  bodyText: "Fueling the Future of Agriculture",
                },
                {
                  icon: <Cipher />,
                  title: "IA Cipher",
                  path: "/",
                  bodyText: "Fuel your cyber game",
                },
                {
                  icon: <DeepTech />,
                  title: "IA Deep Tech",
                  path: "/",
                  bodyText: "Propelling startup innovation",
                },
                {
                  icon: <Tech />,
                  title: "IA'B2B Tech",
                  path: "/",
                  bodyText: "Fueling the Future of Agriculture",
                },
                {
                  icon: <Finseed />,
                  title: "IA Finseed",
                  path: "/",
                  bodyText: "Fuel your cyber game",
                },
                {
                  icon: <Pulse />,
                  title: "IA Pulse",
                  path: "/",
                  bodyText: "Propelling startup innovation",
                },
              ]}
            />
          </Box>

          {/* variation  */}
          <Divider
            my="xs"
            label="CardTypeBSection - variation prop - hasTexturedCard"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <CardTypeBSection
              hasTexturedCard
              title={
                <>
                  <Box component="span" className="highlight">
                    We Invest in Startups
                  </Box>
                  , Fueling Innovation and Growth
                  <Box component="span" ml={14}>
                    <Image src={Arrow} alt="Arrow" width={24} height={24} />
                  </Box>
                </>
              }
              subtitle="Explore Our Funding Opportunities"
              data={[
                {
                  icon: <IAngels />,
                  title: "iAngels",
                  path: "/",
                  bodyText:
                    "Angel investors providing seed funding and strategic support.",
                },
                {
                  icon: <Finvolve />,
                  title: "Finvolve",
                  path: "/",
                  bodyText:
                    "A venture enabling wealth managers to invest in startups.",
                },
                {
                  icon: <FundingSchemes />,
                  title: "Funding Schemes",
                  path: "/",
                  bodyText: "Financial programs to boost startup growth.",
                },
              ]}
            />
          </Box>
          {/* variation  */}
          <Divider
            my="xs"
            label="CardTypeBSection - variation prop - withFilters"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <CardTypeBSection
              withFilters
              title={
                <>
                  Find the
                  <Box component="span" className="highlight hbf">
                    right program
                  </Box>
                  for your startup
                </>
              }
              subtitle="Explore and find the perfect program to fast-track your startup's growth."
              data={[
                {
                  icon: <IAgri />,
                  title: "IA- iAgri",
                  path: "/",
                  bodyText: "Fueling the Future of Agriculture",
                  domain: "B2B",
                  theses: "",
                },
                {
                  icon: <Cipher />,
                  title: "IA Cipher",
                  path: "/",
                  bodyText: "Fuel your cyber game",
                  domain: "",
                  theses: "GaME",
                },
                {
                  icon: <DeepTech />,
                  title: "IA Deep Tech",
                  path: "/",
                  bodyText: "Propelling startup innovation",
                  domain: "",
                  theses: "RUMS",
                },
                {
                  icon: <Tech />,
                  title: "IA'B2B Tech",
                  path: "/",
                  bodyText: "Fueling the Future of Agriculture",
                  domain: "",
                  theses: "",
                },
                {
                  icon: <Finseed />,
                  title: "IA Finseed",
                  path: "/",
                  bodyText: "Fuel your cyber game",
                  domain: "",
                  theses: "",
                },
                {
                  icon: <Pulse />,
                  title: "IA Pulse",
                  path: "/",
                  bodyText: "Propelling startup innovation",
                  domain: "",
                  theses: "",
                },
              ]}
            />
          </Box>
        </Paper>
        {/* CardTypeASection  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="CardTypeASection"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <CardTypeASection
              title={
                <>
                  We are a
                  <Box component="span" className="highlight hbf">
                    multi-stage, fund-led accelerator
                  </Box>
                </>
              }
              subtitle="Funding opportunities for every stage"
              data={[
                {
                  icon: StarRed,
                  title: "Accelerator Fund",
                  bodyText:
                    "Startups join us for mentorship and guidance to refine their business models and accelerate growth. (Duration: Typically 3-6 months)",
                },
                {
                  icon: StarBlue,
                  title: "Seed Fund",
                  bodyText:
                    "Promising startups get seed funding to scale operations and expand market reach after completing the accelerator program.",
                },
                {
                  icon: StarGreen,
                  title: "Growth Fund",
                  bodyText:
                    "Access growth funds for companies with strong traction and scalability to support expansion and innovation after achieving key milestones.",
                },
              ]}
            />
          </Box>
          {/* variation  */}
          <Divider
            my="xs"
            label="CardTypeASection - variation prop - cols - 2, px"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <CardTypeASection
              cols={2}
              px
              title={
                <>
                  <Box component="span" className="highlight">
                    Startup Offerings
                  </Box>
                  for Accelerated Growth
                </>
              }
              data={[
                {
                  icon: StarRed,
                  title: "Value Added Services",
                  path: "/value-added-services",
                  bodyText:
                    "Provides startups with a full range of financial, legal, and business management services to help them grow and succeed.",
                },
                {
                  icon: StarBlue,
                  title: "IScale",
                  path: "/",
                  bodyText:
                    "Simplifies and automates data management and analytics to help businesses make better decisions with their data",
                },
              ]}
            />
          </Box>
          {/* variation 2  */}
          <Divider
            my="xs"
            label="CardTypeASection - variation prop - cols - 2, flexed"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <CardTypeASection
              flexed
              cols={2}
              title={
                <>
                  Why
                  <Box component="span" className="highlight hbf">
                    200+ Startups
                  </Box>
                  Trust Our Accelerator
                </>
              }
              data={[
                {
                  icon: StarRed,
                  title: "Accelerated Growth",
                  bodyText:
                    "Fast-track your startup’s growth and market readiness.",
                },
                {
                  icon: StarBlue,
                  title: "Expert Guidance",
                  bodyText:
                    "Learn from leaders who've successfully scaled businesses.",
                },
                {
                  icon: StarGreen,
                  title: "Increased Chances of Success",
                  bodyText: "85% success rate of securing follow-on funding ",
                },
                {
                  icon: StarYellow,
                  title: "Access to Capital",
                  bodyText:
                    "Immediate exposure to investors who trust our track record. ",
                },
              ]}
            />
          </Box>
          {/* variation 3  */}
          <Divider
            my="xs"
            label="CardTypeASection - variation prop - cols - 2, hasBg"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <CardTypeASection
              cols={2}
              hasBg
              title={
                <>
                  <Box component="span" className="highlight">
                    Startup Offerings
                  </Box>
                  for Accelerated Growth
                </>
              }
              data={[
                {
                  icon: GovernmentIcon,
                  title: "Government Partnerships",
                  bodyText:
                    "Collaborations with government bodies like Startup India, MEITY Startup Hub, and Regional Centre for Biotechnology.",
                },
                {
                  icon: GovernmentIcon,
                  title: "Corporate Partnerships",
                  bodyText:
                    "Empowering Startups Through Strategic Collaborations with leading corporations such as PVR, JSW, ICICI Bank, and Infosys.",
                },
                {
                  icon: GovernmentIcon,
                  title: "IA CEP: Campus partnerships",
                  bodyText:
                    "Aims to bridge the gap between academia and industry, by enhancing the startup ecosystem within educational institutions.",
                },
                {
                  icon: GovernmentIcon,
                  title: "VCs",
                  bodyText:
                    "We partner with leading venture capital firms, incubators, and innovation hubs to provide startups with support.",
                },
              ]}
            />
          </Box>
        </Paper>
        {/* HoverCardSection  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="HoverCardSection"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <HoverCardSection
              asDynamic
              title={
                <>
                  How We Fuel Your
                  <Box component="span" className="highlight hbf">
                    Startup Journey
                  </Box>
                </>
              }
              subtitle="Hands-on mentorship, access to expert networks, and resources designed
        to drive growth and success for startups across various sectors"
              data={[
                {
                  image: SA,
                  text: "Startup Accelerator",
                  type: "green",
                },
                {
                  image: EG,
                  text: "Expert Guidance",
                  type: "yellow",
                },
                {
                  image: SP,
                  text: "Strategic Partnerships",
                  type: "blue",
                },
                {
                  image: FR,
                  text: "Funding Resources",
                  type: "red",
                },
                {
                  image: CO,
                  text: "Co working Space",
                  type: "green-v2",
                },
              ]}
            />
          </Box>
        </Paper>
        {/* PostFilter  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="PostFilter"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <Section $hasGreyBg>
              <PostFilter postsData={filteredPostsData} home />
            </Section>
          </Box>
        </Paper>
        {/* InfoBanner  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="InfoBanner"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <InfoBanner
              title="Ready to Grow?"
              displayTitile={
                <>
                  <span>Start your journey</span> with us today!
                </>
              }
              btnText="Accelerate your startup"
              onClick={() => {}}
              bannerImg={BannerImg}
            />
          </Box>
        </Paper>
        {/* FAQSection  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="FAQSection"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <FAQSection title="Frequently Asked Questions" data={faqData} />
          </Box>
        </Paper>
        {/* PageBanner  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="PageBanner"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <PageBanner
              breadcrumbData={breadcrumbGenerator(singularityBreadcrumbData)}
              title="Singularity/GenAI"
              subtitle="Generative Al is poised to unleash the next wave of productivity and digital revolution."
              btnText="Apply Now"
              onClick={() => {}}
              bannerImg={Banner}
            />
          </Box>
        </Paper>
        {/* TestimonialSection  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="TestimonialSection"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <TestimonialSection
              title={
                <>
                  <Box component="span" className="highlight">
                    Mentors
                  </Box>
                  speak
                </>
              }
              subtitle="Our mentors share their experiences working with IA startups"
              data={mentorsSpeakData}
            />
          </Box>
        </Paper>
        {/* EventsSection  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="EventsSection"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <EventSection
              title={
                <>
                  Upcoming
                  <Box component="span" className="highlight hbf">
                    Events
                  </Box>
                </>
              }
              data={upcomingEvents}
            />
          </Box>
        </Paper>
        {/* TextImageSection  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="TextImageSection"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <TextImageSection
              title={
                <>
                  Strategic
                  <Box component="span" className="highlight hbf">
                    PR Services
                  </Box>
                </>
              }
              data={PRServicesData}
            />
          </Box>
        </Paper>

        {/* GallerySection  */}
        <Paper withBorder p="xl">
          <Divider
            my="xs"
            label="GallerySection"
            labelPosition="left"
            variant="dashed"
          />
          <Box py={20}>
            <GallerySection
              title={
                <>
                  <Box component="span" className="highlight hbf">
                    Gallery
                  </Box>
                </>
              }
              data={galleryData}
            />
          </Box>
        </Paper>
      </Stack>
      <>
        {/* WorkspaceSection  */}
        <Stack
          bg="var(--mantine-color-body)"
          align="stretch"
          justify="center"
          gap="lg"
          py={20}
        >
          <Paper withBorder p="xl">
            <Divider
              my="xs"
              label="WorkspaceSection"
              labelPosition="left"
              variant="dashed"
            />
            <Box py={20}>
              <WorkspaceSection withFilters />
            </Box>
          </Paper>
        </Stack>
      </>
      <>
        {/* VideoSection  */}
        <Stack
          bg="var(--mantine-color-body)"
          align="stretch"
          justify="center"
          gap="lg"
          py={20}
        >
          <Paper withBorder p="xl">
            <Divider
              my="xs"
              label="VideoSection"
              labelPosition="left"
              variant="dashed"
            />
            <Box py={20}>
              <VideoSection />
            </Box>
          </Paper>
        </Stack>
      </>
      <>
        {/* SocialMediaFeedSection  */}
        <Stack
          bg="var(--mantine-color-body)"
          align="stretch"
          justify="center"
          gap="lg"
          py={20}
        >
          <Paper withBorder p="xl">
            <Divider
              my="xs"
              label="SocialMediaFeedSection"
              labelPosition="left"
              variant="dashed"
            />
            <Box py={20}>
              <SocialMediaFeedSection />
            </Box>
          </Paper>
        </Stack>
      </>
    </Box>
  );
};

export default components;

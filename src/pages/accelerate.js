import MilestoneSection from "@/page-components/MilestoneSection";
import {
  AccelerateBannerAction,
  BreadcrumbText,
  Section,
} from "@/styles/main.styles";
import { Anchor, Box, Breadcrumbs, Button, Center } from "@mantine/core";
import Head from "next/head";

import Arrow from "@/images/title-arrow.svg";
import StarRed from "@/images/star-red.svg";
import StarBlue from "@/images/star-blue.svg";
import StarGreen from "@/images/star-green.svg";
import StarYellow from "@/images/star-yellow.svg";
import IAgri from "@/images/SVGIcons/IAgri";
import Cipher from "@/images/SVGIcons/Cipher";
import Tech from "@/images/SVGIcons/Tech";
import Finseed from "@/images/SVGIcons/Finseed";
import Pulse from "@/images/SVGIcons/Pulse";
import DeepTech from "@/images/SVGIcons/DeepTech";
// import BannerImg from "@/images/banner1.png";

import GA1 from "@/images/ga1.png";
import GA2 from "@/images/ga2.png";
import GA3 from "@/images/ga3.png";
import GA4 from "@/images/ga4.png";

import {
  accelerateMilestoneData,
  dataClient,
  mentorsData,
  successStoryData,
} from "@/mock/data";
import Image from "next/image";
import ClientMarquee from "@/page-components/ClientMarquee";
import MentorsSection from "@/page-components/MentorsSection";
import CardTypeASection from "@/page-components/CardTypeASection";
import SuccessStories from "@/page-components/SuccessStories";
import StrategicFocusSection from "@/page-components/StrategicFocusSection";
import CardTypeBSection from "@/page-components/CardTypeBSection";
import React from "react";
import HoverCardSection from "@/page-components/HoverCardSection";

const accelerate = () => {
  const items = [{ title: "Accelerate" }].map((item, index) => (
    <React.Fragment key={index}>
      {item.href ? (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ) : (
        <BreadcrumbText> {item.title}</BreadcrumbText>
      )}
    </React.Fragment>
  ));

  return (
    <Box component="div">
      <>
        <Head>
          <title>India Accelerator - Accelerate</title>
          <meta name="description" content="India Accelerator" />
          <meta name="keywords" content="India Accelerator" />
        </Head>
      </>
      <Section>
        <Center>
          <Breadcrumbs separator="→" separatorMargin="md" mt="xs">
            {items}
          </Breadcrumbs>
        </Center>
        <MilestoneSection
          bannerTitle={
            <>
              Ready to
              <Box component="span" className="highlight hbf">
                accelerate
              </Box>
              your startup?
            </>
          }
          subtitle="Our Accelerator Programs  offers curated mentorship, connections, and a comprehensive support system for growth-stage startups."
          data={accelerateMilestoneData}
        />
        <AccelerateBannerAction>
          <Button
            variant="filled"
            radius="xl"
            size="lg"
            className="btn-primary lg"
          >
            Accelerate your startup
          </Button>
        </AccelerateBannerAction>
      </Section>
      <Section $hasTexture>
        <ClientMarquee
          title={
            <>
              <Box component="span" className="highlight">
                200+ startups
              </Box>
              who chose our accelerator programs
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
      </Section>
      <Section>
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
      </Section>
      <Section>
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
      </Section>
      <Section>
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
              path: "/home",
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
      </Section>
      <Section>
        <HoverCardSection
          title={
            <>
              A True
              <Box component="span" className="highlight hbf">
                Global Accelerator
              </Box>
            </>
          }
          data={[
            {
              image: GA1,
              text: "Startup Accelerator",
              type: "blue",
            },
            {
              image: GA2,
              text: "Expert Guidance",
              type: "green",
            },
            {
              image: GA3,
              text: "Strategic Partnerships",
              type: "yellow",
            },
            {
              image: GA4,
              text: "Funding Resources",
              type: "red",
            },
          ]}
        />
      </Section>
      <Section $hasTexture>
        <ClientMarquee
          title={
            <>
              Empowered by
              <Box component="span" className="highlight hbf">
                50+ partners
              </Box>
              <Box component="span" ml={14}>
                <Image src={Arrow} alt="Arrow" width={24} height={24} />
              </Box>
            </>
          }
          data={dataClient}
        />
      </Section>
      <Section>
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
      </Section>
      {/* **  */}
    </Box>
  );
};

export default accelerate;

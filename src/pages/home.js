import Head from "next/head";
import { Box } from "@mantine/core";
import Image from "next/image";

import Banner from "@/page-components/Banner";
import { Section } from "@/styles/main.styles";
import BannerImg from "@/images/banner1.png";
import PostFilter from "@/page-components/PostFilter";
import ClientMarquee from "@/page-components/ClientMarquee";

import Arrow from "@/images/title-arrow.svg";
import StarRed from "@/images/star-red.svg";
import StarBlue from "@/images/star-blue.svg";
import StarGreen from "@/images/star-green.svg";

import CardTypeASection from "@/page-components/CardTypeASection";
import StartupJourney from "@/page-components/StartupJourney";
import MentorsSection from "@/page-components/MentorsSection";
import {
  dataClient,
  filteredPostsData,
  homeMilestoneData,
  mentorsData,
} from "@/mock/data";
import StrategicFocusSection from "@/page-components/StrategicFocusSection";
import MilestoneSection from "@/page-components/MilestoneSection";

const home = () => {
  return (
    <Box component="div">
      <>
        <Head>
          <title>India Accelerator - Home</title>
          <meta name="description" content="India Accelerator" />
          <meta name="keywords" content="India Accelerator" />
        </Head>
      </>
      <Section $hasTexture>
        <ClientMarquee
          title={
            <>
              Startups We’re
              <Box component="span" className="highlight">
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
      <Section>
        <MilestoneSection
          title={
            <>
              Awarded{" "}
              <Box component="span" className="highlight">
                “best accelerator of India”
              </Box>{" "}
              in 2022 by the Government of India
              <Box component="span" ml={14}>
                <Image src={Arrow} alt="Arrow" width={24} height={24} />
              </Box>
            </>
          }
          subtitle="IA offers unmatched support, expert mentorship, and tailored growth solutions to empower startups at every stage."
          data={homeMilestoneData}
        />
      </Section>
      <Section>
        <MentorsSection
          title={
            <>
              <Box component="span" className="highlight">
                Expert Mentorship
              </Box>{" "}
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
      <Section $hasTexture>
        <ClientMarquee
          title={
            <>
              Empowered by
              <Box component="span" className="highlight">
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
        <StrategicFocusSection
          title={
            <>
              <Box component="span" className="highlight">
                Six Theses
              </Box>{" "}
              Defining Our Strategic Focus
            </>
          }
          subtitle="Driving innovation through six strategic focus areas."
        />
      </Section>
      <Section>
        <CardTypeASection
          title={
            <>
              We are a{" "}
              <Box component="span" className="highlight">
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
      <Section>
        <StartupJourney />
      </Section>
      <Section $hasGreyBg>
        <PostFilter postsData={filteredPostsData} home />
      </Section>
      <Section>
        <Banner
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
      </Section>
    </Box>
  );
};

export default home;

import React from "react";
import Head from "next/head";
import { Box, Loader } from "@mantine/core";
import Image from "next/image";

import { breadcrumbGenerator } from "@/utils/breadcrumbs";
import { LoaderContainer, Section } from "@/styles/main.styles";

import TextSlider from "@/components/TextSlider";
import PageBanner from "@/page-components/PageBanner";
import ClientMarquee from "@/page-components/ClientMarquee";
import HoverCardSection from "@/page-components/HoverCardSection";
import MilestoneSection from "@/page-components/MilestoneSection";
import MentorsSection from "@/page-components/MentorsSection";
import CardTypeASection from "@/page-components/CardTypeASection";
import SuccessStories from "@/page-components/SuccessStories";
import StrategicFocusSection from "@/page-components/StrategicFocusSection";
import CardTypeBSection from "@/page-components/CardTypeBSection";
import InfoBanner from "@/page-components/InfoBanner";
import FAQSection from "@/page-components/FAQSection";

import SA from "@/images/startup-accelerator.png";
import EG from "@/images/expert-guidance.png";
import SP from "@/images/strategic-partnerships.png";
import FR from "@/images/funding-resources.png";
import CO from "@/images/co-working-space.png";
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
import BannerImg from "@/images/banner1.png";
import Banner from "@/images/singularity-banner.png";
import Arrow from "@/images/title-arrow.svg";

import {
  accelerateMilestoneData,
  dataClient,
  faqData,
  mentorsData,
  singularityBreadcrumbData,
  successStoryData,
} from "@/mock/data";
import generateRandomColor from "@/methods/generateRandomColor";
import WhyFoundersChoseIA from "@/page-components/WhyFoundersChoseIA";

const DynamicPage = ({ blocks, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blocks) {
    return (
      <LoaderContainer>
        <Loader color={generateRandomColor()} />
      </LoaderContainer>
    );
  }

  return (
    <>
      <Head>
        <title>India Accelerator - page</title>
        <meta name="description" content="India Accelerator" />
        <meta name="keywords" content="India Accelerator" />
      </Head>
      <div>
        {blocks.map((block, index) => {
          switch (block.post_type) {
            case "text-slider":
              return <TextSlider id={block.ID} key={index} />;
            case "page-banner":
              return (
                <Section key={index}>
                  <PageBanner
                    id={block.ID}
                    breadcrumbData={breadcrumbGenerator(
                      singularityBreadcrumbData
                    )}
                    title="Singularity/GenAI"
                    subtitle="Generative AI is poised to unleash the next wave of productivity and digital revolution."
                    btnText="Apply Now"
                    onClick={() => {}}
                    bannerImg={Banner}
                  />
                </Section>
              );
            case "milestone-section":
              return (
                <Section key={index}>
                  <MilestoneSection
                    id={block.ID}
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
                </Section>
              );
            case "client-marquee":
              return (
                <Section $hasTexture key={index}>
                  <ClientMarquee id={block.ID} />
                </Section>
              );
            case "mentors-section":
              return (
                <Section key={index}>
                  <MentorsSection
                    title={
                      <>
                        <Box component="span" className="highlight">
                          Expert Mentorship
                        </Box>
                        from Industry Leaders
                        <Box component="span" ml={14}>
                          <Image
                            src={Arrow}
                            alt="Arrow"
                            width={24}
                            height={24}
                          />
                        </Box>
                      </>
                    }
                    subtitle="Our network of mentors helps startups overcome challenges and scale with confidence."
                    data={mentorsData}
                  />
                </Section>
              );
            case "card-type-a-section":
              return (
                <Section key={index}>
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
                        bodyText:
                          "85% success rate of securing follow-on funding ",
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
              );
            case "hover-cardsection":
              return (
                <Section key={index}>
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
                </Section>
              );
            case "success-story":
              return (
                <Section key={index}>
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
              );

            case "strategic-focus-sect":
              return (
                <Section key={index}>
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
              );

            case "card-type-b-section":
              return (
                <Section key={index}>
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
              );
            case "info-banner":
              return (
                <Section key={index}>
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
                </Section>
              );
            case "faq-section":
              return (
                <Section key={index}>
                  <FAQSection
                    title="Frequently Asked Questions"
                    data={faqData}
                  />
                </Section>
              );

            case "why-founders-chose-ia":
              return (
                <Section>
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
                </Section>
              );
            default:
              return null;
          }
        })}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { url } = context.params;

  try {
    const routeRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/route?acf_format=standard`
    );
    const routes = await routeRes.json();

    console.log(routes[0]?.acf?.page_routes, "routes");

    const route = routes[0]?.acf?.page_routes.find(
      (r) => r.post_name.toLowerCase() === url.toLowerCase()
    );

    if (!route) {
      return { notFound: true };
    }
    console.log(route.ID, "route.ID");

    const pageRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/pages/${route.ID}?acf_format=standard`
    );

    const pageData = await pageRes.json();

    console.log(pageData.acf?.["page-blocks"], "blocks");

    const blocks = pageData.acf?.["page-blocks"] || [];

    return {
      props: { blocks },
    };
  } catch (err) {
    return {
      props: { error: "Failed to fetch data" },
    };
  }
}

export default DynamicPage;

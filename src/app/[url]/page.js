import React from "react";
import { Box } from "@mantine/core";

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

// temps
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

import { accelerateMilestoneData, successStoryData } from "@/mock/data";

import WhyFoundersChoseIA from "@/page-components/WhyFoundersChoseIA";
import VideoSection from "@/page-components/VideoSection";

const ISR_TIMEOUT = 60;

async function fetchData(url) {
  const routeRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/route?acf_format=standard`,
    { next: { revalidate: ISR_TIMEOUT } }
  );
  const routes = await routeRes.json();
  const route = routes[0]?.acf?.page_routes.find(
    (r) => r.post_name.toLowerCase() === url.toLowerCase()
  );

  if (!route) {
    throw new Error("Route not found");
  }

  const pageRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/pages/${route.ID}?acf_format=standard`,
    { next: { revalidate: ISR_TIMEOUT } }
  );
  const pageData = await pageRes.json();

  const blocks = pageData.acf?.["page-blocks"] || [];

  const updatedBlocks = await Promise.all(
    blocks.map(async (block) => {
      try {
        switch (block.post_type) {
          case "client-marquee":
            const clientMarqueeRes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/client-marquee/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const clientMarqueeData = await clientMarqueeRes.json();
            block.data = clientMarqueeData.acf || {};
            break;
          case "text-slider":
            const textSliderRes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/text-slider/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const textSliderData = await textSliderRes.json();
            block.data = textSliderData.acf?.TextSlider || [];
            break;
          case "page-banner":
            const pageBannerRes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/page-banner/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const pageBannerData = await pageBannerRes.json();
            block.data = pageBannerData.acf || {};
            break;
          case "faq-section":
            const faqRes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/faq-section/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const faqData = await faqRes.json();
            block.data = faqData.acf || {};
            break;
          case "mentors-section":
            const mentorsRes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/mentors-section/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const mentorsData = await mentorsRes.json();
            block.data = mentorsData.acf || {};
            break;
          case "card-type-a-section": // TO BE MAPPED
            const cardARes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/card-type-a-section/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const cardAData = await cardARes.json();
            block.data = cardAData.acf || {};
            console.log(cardAData, "cardAData block.data");
            break;
          case "card-type-b-section": // TO BE MAPPED
            const cardBRes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/card-type-b-section/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const cardBData = await cardBRes.json();
            block.data = cardBData.acf || {};
            console.log(cardBData, "cardBData block.data");
            break;
          case "success-story": // TO BE MAPPED
            const successStoryRes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/success-story/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const successStoryData = await successStoryRes.json();
            block.data = successStoryData.acf || {};
            console.log(successStoryData, "successStoryData block.data");
            break;
          case "video-section": // TO BE MAPPED
            const videoRes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/video-section/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const videoData = await videoRes.json();
            block.data = videoData.acf || {};
            console.log(videoData, "videoData block.data");
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(
          `Error fetching data for block ${block.post_type}:`,
          error
        );
      }
      return block;
    })
  );

  return updatedBlocks;
}

export async function generateStaticParams() {
  const routeRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/route?acf_format=standard`
  );
  const routes = await routeRes.json();

  return (
    routes[0]?.acf?.page_routes.map((route) => ({
      url: route.post_name,
    })) || []
  );
}

export default async function DynamicPage({ params }) {
  const { url } = await params;

  let blocks;
  try {
    blocks = await fetchData(url);
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!blocks) {
    return (
      <div className="LoaderContainer">
        {/* <Loader color="red" /> */}
        loading
      </div>
    );
  }

  return (
    <div>
      {blocks.map((block, index) => {
        switch (block.post_type) {
          case "text-slider":
            return <TextSlider data={block.data} key={index} />;
          case "page-banner":
            return (
              <div className="Section" key={index}>
                <PageBanner data={block.data} />
              </div>
            );
          case "milestone-section":
            return (
              <div className="Section" key={index}>
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
                  subtitle="Our Accelerator Programs offers curated mentorship, connections, and a comprehensive support system for growth-stage startups."
                  data={accelerateMilestoneData}
                />
              </div>
            );
          case "client-marquee":
            return (
              <div className="Section hasTexture" key={index}>
                <ClientMarquee id={block.ID} data={block.data} />
              </div>
            );
          case "mentors-section":
            return (
              <div className="Section" key={index}>
                <MentorsSection data={block.data} />
              </div>
            );
          case "card-type-a-section":
            return (
              <div className="Section" key={index}>
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
                        "85% success rate of securing follow-on funding",
                    },
                    {
                      icon: StarYellow,
                      title: "Access to Capital",
                      bodyText:
                        "Immediate exposure to investors who trust our track record. ",
                    },
                  ]}
                />
              </div>
            );
          case "hover-cardsection":
            return (
              <div className="Section" key={index}>
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
                  subtitle="Hands-on mentorship, access to expert networks, and resources designed to drive growth and success for startups across various sectors"
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
              </div>
            );
          case "success-story":
            return (
              <div className="Section" key={index}>
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
              </div>
            );
          case "strategic-focus-sect":
            return (
              <div className="Section" key={index}>
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
              </div>
            );
          case "card-type-b-section":
            return (
              <div className="Section" key={index}>
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
              </div>
            );
          case "info-banner":
            return (
              <div className="Section" key={index}>
                <InfoBanner
                  title="Ready to Grow?"
                  displayTitile={
                    <>
                      <span>Start your journey</span> with us today!
                    </>
                  }
                  btnText="Accelerate your startup"
                  // onClick={() => {}}
                  bannerImg={BannerImg}
                />
              </div>
            );
          case "faq-section":
            return (
              <div className="Section" key={index}>
                <FAQSection data={block.data} />
              </div>
            );
          case "why-founder-chose-ia":
            return (
              <div className="Section">
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
              </div>
            );
          case "video-section":
            return (
              <div className="Section">
                <VideoSection />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

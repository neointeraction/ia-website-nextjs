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
import BannerImg from "@/images/banner1.png";

import WhyFoundersChoseIA from "@/page-components/WhyFoundersChoseIA";
import VideoSection from "@/page-components/VideoSection";
import SocialMediaFeedSection from "@/page-components/SocialMediaFeedSection";

const ISR_TIMEOUT = 60;

export const revalidate = 60;

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
            console.log(block.data, "clientMarqueeData block.data");
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
          case "card-type-a-section":
            const cardARes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/card-type-a-section/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const cardAData = await cardARes.json();
            block.data = cardAData.acf || {};
            console.log(cardAData, "cardAData block.data");
            break;
          case "card-type-b-section":
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
          case "video-section":
            const videoRes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/video-section/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const videoData = await videoRes.json();
            block.data = videoData.acf || {};
            break;
          case "milestone-section":
            const milestoneRes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/milestone-section/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const milestoneData = await milestoneRes.json();
            block.data = milestoneData.acf || {};
            console.log(milestoneData, "milestoneData block.data");
            break;
          case "hover-cardsection":
            const hoverRes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/hover-cardsection/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const hoverData = await hoverRes.json();
            block.data = hoverData.acf || {};
            console.log(hoverData, "hoverData block.data");
            break;
          case "info-banner":
            const infoBannerRes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/info-banner/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const infoBannerData = await infoBannerRes.json();
            block.data = infoBannerData.acf || {};
            console.log(infoBannerData, "infoBannerData block.data");
            break;
          case "social-media-feed":
            const socialMediaFeedRes = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API_URL}/social-media-feed/${block.ID}?acf_format=standard`,
              { next: { revalidate: ISR_TIMEOUT } }
            );
            const socialMediaFeedData = await socialMediaFeedRes.json();
            block.data = socialMediaFeedData.acf || {};
            console.log(socialMediaFeedData, "socialMediaFeedData block.data");
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
                <MilestoneSection data={block.data} />
              </div>
            );
          case "client-marquee":
            return (
              <div className="Section hasTexture" key={index}>
                <ClientMarquee data={block.data} />
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
                <CardTypeASection data={block.data} />
              </div>
            );
          case "hover-cardsection":
            return (
              <div className="Section" key={index}>
                <HoverCardSection data={block.data} />
              </div>
            );
          case "success-story":
            return (
              <div className="Section" key={index}>
                <SuccessStories data={block.data} />
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
                <CardTypeBSection data={block.data} />
              </div>
            );
          case "info-banner":
            return (
              <div className="Section" key={index}>
                <InfoBanner data={block.data} />
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
                <VideoSection data={block.data} />
              </div>
            );
          case "social-media-feed":
            return (
              <div className="Section">
                <SocialMediaFeedSection data={block.data} />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

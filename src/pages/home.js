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

// temps
import BlogImg1 from "@/images/temp/1.png";
import BlogImg2 from "@/images/temp/2.png";
import BlogImg3 from "@/images/temp/3.png";

// temp images - to be removed
import Logo1 from "@/images/temp/4.png";
import Logo2 from "@/images/temp/5.png";
import Logo3 from "@/images/temp/6.png";
import Logo4 from "@/images/temp/7.png";
import Logo5 from "@/images/temp/8.png";
import Logo6 from "@/images/temp/9.png";
import Logo7 from "@/images/temp/10.png";
import CardTypeASection from "@/page-components/CardTypeASection";
import StartupJourney from "@/page-components/StartupJourney";

const dataClient = [
  {
    logoImg: Logo1,
  },
  {
    logoImg: Logo2,
  },
  {
    logoImg: Logo3,
  },
  {
    logoImg: Logo4,
  },
  {
    logoImg: Logo5,
  },
  {
    logoImg: Logo6,
  },
  {
    logoImg: Logo7,
  },
];

const filteredPostsData = [
  {
    title: "Denta Mitra revenue grows 200% in FY 22, reaching INR 30 Million",
    date: "20th September, 2024",
    category: "News",
    blogImg: BlogImg1,
    content:
      "Denta Mitra, India's exclusive dental marketplace that brings quality dental care to patients' homes, has experienced a remarkable increase in revenue...",
  },
  {
    title:
      "Armour Heavy performance wear closes seed round led by India Accelerator",
    date: "20th September, 2024",
    category: "News",
    blogImg: BlogImg2,
    content:
      "Denta Mitra, India's exclusive dental marketplace that brings quality dental care to patients' homes, has experienced a remarkable increase...",
  },
  {
    title:
      "India Accelerator partners with Z Nation Lab, expands to Silicon Valley",
    date: "20th September, 2024",
    category: "News",
    blogImg: BlogImg3,
    content:
      "Denta Mitra, India's exclusive dental marketplace that brings quality dental care to patients' homes, has experienced a remarkable increase in revenue. In the fiscal year 2022-23, their revenue soared by three times, reaching INR 30 millio...",
  },
  {
    title:
      "India Accelerator partners with Z Nation Lab, expands to Silicon Valley",
    date: "20th September, 2024",
    category: "Blogs",
    blogImg: BlogImg1,
    content:
      "Denta Mitra, India's exclusive dental marketplace that brings quality dental care to patients' homes, has experienced a remarkable increase in revenue. In the fiscal year 2022-23, their revenue soared by three times, reaching INR 30 millio...",
  },
];

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

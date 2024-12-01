import Head from "next/head";

import Banner from "@/page-components/Banner";
import { Section } from "@/styles/main.styles";
import BannerImg from "@/images/banner1.png";
import PostFilter from "@/page-components/PostFilter";

// temps
import BlogImg1 from "@/images/temp/1.png";
import BlogImg2 from "@/images/temp/2.png";
import BlogImg3 from "@/images/temp/3.png";

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
    <div>
      <>
        <Head>
          <title>India Accelerator - Home</title>
          <meta name="description" content="India Accelerator" />
          <meta name="keywords" content="India Accelerator" />
        </Head>
      </>
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
    </div>
  );
};

export default home;

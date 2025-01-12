import TOC from "@/components/TOC";
import {
  blogData,
  blogDetailBannerData,
  blogDetailSectionData,
  callbackFormSectionData,
  getInTouchFormSectionData,
  newsData,
  portfolioDataMock,
  upcomingEvents,
} from "@/mock/data";
import BlogDetailBanner from "@/page-components/BlogDetailBanner";
import FormSection from "@/page-components/FormSection";
import PortfolioSection from "@/page-components/PortfolioSection";
import PostSection from "@/page-components/PostSection";

export default function Home() {
  return (
    <div className="container">
      <div className="Section">
        <PostSection
          newsData={newsData}
          blogsData={blogData}
          eventData={upcomingEvents}
        />
      </div>
      <div className="Section">
        <BlogDetailBanner data={blogDetailBannerData} />
      </div>
      <div className="Section">
        <TOC sections={blogDetailSectionData} />
      </div>
      <div className="Section">
        <PortfolioSection data={portfolioDataMock} />
      </div>
      <div className="Section">
        <FormSection data={callbackFormSectionData} />
      </div>
      <div className="Section">
        <FormSection data={getInTouchFormSectionData} />
      </div>
    </div>
  );
}

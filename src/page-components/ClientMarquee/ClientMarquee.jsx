import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Box } from "@mantine/core";

import {
  ClientLogoContainer,
  ClientLogoFlex,
  ClientLogoItem,
} from "./ClientMarquee.styles";
import { SectionSubTitle } from "@/styles/main.styles";
import SectionTitle from "@/utils/SectionTitle";

const ClientMarquee = ({ id }) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [highlightedText, setHighlightedText] = useState("");

  useEffect(() => {
    // Fetch the data based on the provided id
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/client-marquee/${id}?acf_format=standard`
        );
        const result = await response.json();

        if (result.acf) {
          // Update the state with the fetched data
          setTitle(result.acf.title);
          setHighlightedText(result.acf.highlight_text);
          setData(result.acf.logos || []);
        }
      } catch (error) {
        console.error("Error fetching client marquee data:", error);
      }
    };

    fetchData();
  }, [id]); // Trigger effect when 'id' changes

  return (
    <Box className="container">
      <SectionTitle
        data-aos="fade"
        $highlight={highlightedText}
        title={title}
      />

      {subtitle && (
        <SectionSubTitle data-aos="fade">{subtitle}</SectionSubTitle>
      )}
      <ClientLogoContainer data-aos="fade">
        <Marquee pauseOnHover>
          <ClientLogoFlex>
            {data.map((item, index) => (
              <ClientLogoItem key={index}>
                <Image
                  src={item.logoImg.url}
                  alt="client-logo"
                  width={item.logoImg.width} // Assuming the logo image has width and height info
                  height={item.logoImg.height}
                />
              </ClientLogoItem>
            ))}
          </ClientLogoFlex>
        </Marquee>
      </ClientLogoContainer>
    </Box>
  );
};

export default ClientMarquee;

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Box } from "@mantine/core";

import {
  ClientLogoContainer,
  ClientLogoFlex,
  ClientLogoItem,
} from "./ClientMarquee.styles";
import { SectionSubTitle, SectionTitle } from "@/styles/main.styles";

const ClientMarquee = ({ title, subtitle, data }) => {
  return (
    <Box className="container">
      <SectionTitle>{title}</SectionTitle>
      {subtitle && <SectionSubTitle>{subtitle}</SectionSubTitle>}
      <ClientLogoContainer>
        <Marquee pauseOnHover>
          <ClientLogoFlex>
            {data.map((item, index) => (
              <ClientLogoItem key={index}>
                <Image
                  src={item.logoImg}
                  // style={{ width: "100%", height: "auto" }}
                  alt="client-logo"
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

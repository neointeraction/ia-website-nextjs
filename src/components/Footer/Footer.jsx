"use client";

import Image from "next/image";
import { Box, Divider, Grid, Group, UnstyledButton } from "@mantine/core";
import {
  CopyrightText,
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterTitle,
  LogoSocialBlock,
  LogoSubText,
} from "./Footer.styles";

import FooterLogo from "@/images/footer-logo.png";
import FB from "@/images//icons/fb.svg";
import IG from "@/images//icons/ig.svg";
import X from "@/images//icons/x.svg";
import YT from "@/images//icons/yt.svg";

import { useRouter } from "next/navigation";

const data = [
  {
    title: "What we do",
    links: [
      { label: "We accelerate", link: "/accelerate" },
      { label: "We fund you", link: "/we-fund-you" },
      { label: "We mentor you", link: "/we-mentor-you" },
      { label: "We partner", link: "/funding-scheme-partnership-programs" },
    ],
  },
  {
    title: "Who we are",
    links: [
      { label: "About us", link: "/who-we-are" },
      { label: "Portfolio Brands", link: "/portfolio-brands" },
      { label: "Contact us", link: "contact-us" },
      { label: "Privacy Policy", link: "privacy-policy" },
      { label: "Terms & Conditions", link: "/terms-and-condidtions" },
    ],
  },
  {
    title: "Co-working",
    links: [
      { label: "IA Co-working", link: "/ia-coworking" },
      { label: "Third place", link: "/third-place" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", link: "/insights" },
      { label: "Blogs", link: "/blogs" },
      { label: "Events", link: "/events" },
      { label: "News", link: "/news" },
      { label: "Startup school", link: "/startup-schools" },
    ],
  },
];

const dataSub = [
  {
    title: "We Accelerate",
    links: [
      { label: "Accelerator Programs", link: "/accelerator-programs" },
      { label: "Value Added Services", link: "/value-added-services" },
      { label: "iScale", link: "/iscale" },
      { label: "Perks & Benefits", link: "/perks-benefits" },
      { label: "Global expansion", link: "global-expansion" },
      { label: "Venture studio", link: "venture-studio" },
      { label: "Apply as a startup", link: "apply-as-a-startup" },
    ],
  },
  {
    title: "We fund you",
    links: [
      { label: "IAngels", link: "/iangels" },
      { label: "Finvolve", link: "/finvolve" },
      { label: "Funding schemes", link: "/funding-schemes" },
      { label: "Apply as an investor", link: "apply-as-investor-page" },
      { label: "Apply as a partner", link: "apply-as-a-partner" },
    ],
  },
  {
    title: "Mentorship",
    links: [{ label: "Apply as a mentor", link: "#" }],
  },
  {
    title: "Our theses",
    links: [
      {
        label: "Robotics & Unmanned & Space (RUMS)",
        link: "/theses-robotics-rums",
      },
      { label: "Consumer", link: "/theses-consumer" },
      {
        label: "Gaming, Media & Entertainment (GaME)",
        link: "/theses-gaming-media-entertainment-game",
      },
      {
        label: "Energy, Mobility & Connectivity (EMC)",
        link: "/theses-energy-mobility-connectivityemc",
      },
      { label: "Singularity/GenAI", link: "/theses-singularitygenai" },
      { label: "Impact Labs", link: "/theses-impact-labs" },
    ],
  },
];

const Footer = () => {
  const router = useRouter();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <FooterLink
        key={index}
        component="a"
        href={link.link}
        // onClick={(event) => event.preventDefault()}
        onClick={() => router.push(link.link)}
      >
        {link.label}
      </FooterLink>
    ));

    return (
      <Grid.Col span={{ base: 6, md: 3, lg: 3 }} key={group.title}>
        <FooterTitle>{group.title}</FooterTitle>
        {links}
      </Grid.Col>
    );
  });

  const groupsSub = dataSub.map((group) => {
    const links = group.links.map((link, index) => (
      <FooterLink
        key={index}
        component="a"
        href={link.link}
        // onClick={(event) => event.preventDefault()}
        onClick={() => router.push(link.link)}
      >
        {link.label}
      </FooterLink>
    ));

    return (
      <Grid.Col span={{ base: 6, md: 3, lg: 3 }} key={group.title}>
        <FooterTitle $sm>{group.title}</FooterTitle>
        {links}
      </Grid.Col>
    );
  });

  return (
    <FooterContainer>
      <Box component="div" className="container">
        <LogoSocialBlock>
          <Grid align="flex-end">
            <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
              <Box component="div">
                <Image
                  src={FooterLogo}
                  width={237}
                  height={28}
                  alt="footer-logo"
                />
                <LogoSubText>Seeding the Future of Innovation</LogoSubText>
              </Box>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
              <Box component="div">
                <Group>
                  <UnstyledButton>
                    <Image src={FB} width={32} height={32} alt="facebook" />
                  </UnstyledButton>
                  <UnstyledButton>
                    <Image src={IG} width={32} height={32} alt="instagram" />
                  </UnstyledButton>
                  <UnstyledButton>
                    <Image src={X} width={32} height={32} alt="twitter" />
                  </UnstyledButton>
                  <UnstyledButton>
                    <Image src={YT} width={32} height={32} alt="youtube" />
                  </UnstyledButton>
                </Group>
              </Box>
            </Grid.Col>
          </Grid>
        </LogoSocialBlock>

        <FooterLinksContainer>
          <Grid>{groups}</Grid>
        </FooterLinksContainer>
        <Divider my="xl" color="rgba(253, 253, 253, 0.15)" />
        <FooterLinksContainer>
          <Grid>{groupsSub}</Grid>
        </FooterLinksContainer>
        <CopyrightText>
          © iAccel India Accelerator Private Limited, 2024. All Rights Reserved.
        </CopyrightText>
      </Box>
    </FooterContainer>
  );
};

export default Footer;

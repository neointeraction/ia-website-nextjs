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
      { label: "Accelerate", link: "/accelerate" },
      { label: "Invest", link: "#" },
      { label: "Mentorship", link: "#" },
      { label: "Partnership programs", link: "#" },
    ],
  },
  {
    title: "Who we are",
    links: [
      { label: "About us", link: "#" },
      { label: "Portfolio companies", link: "#" },
      { label: "Privacy Policy", link: "#" },
      { label: "Terms & Conditions", link: "#" },
    ],
  },
  {
    title: "Co-working",
    links: [
      { label: "IA Hubs", link: "#" },
      { label: "Kube", link: "#" },
      { label: "Third place", link: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", link: "#" },
      { label: "Blogs", link: "#" },
      { label: "Events", link: "#" },
      { label: "News", link: "#" },
      { label: "Startup school", link: "#" },
    ],
  },
];

const dataSub = [
  {
    title: "Accelerate",
    links: [
      { label: "Accelerator Programs", link: "#" },
      { label: "Startup offerings", link: "#" },
      { label: "Global expansion", link: "#" },
      { label: "Venture studio", link: "#" },
      { label: "Apply as a startup", link: "#" },
    ],
  },
  {
    title: "Invest",
    links: [
      { label: "Angels", link: "/iangels" },
      { label: "Finvolve", link: "#" },
      { label: "Funding schemes", link: "/fundingschemes" },
      { label: "Apply as an investor", link: "#" },
      { label: "Apply as a partner", link: "#" },
    ],
  },
  {
    title: "Mentorship",
    links: [{ label: "Apply as a mentor", link: "#" }],
  },
  {
    title: "Our theses",
    links: [
      { label: "Robotics & Unmanned & Space (RUMS)", link: "/theses-robotics-rums" },
      { label: "Consumer", link: "/theses-consumer" },
      { label: "Gaming, Media & Entertainment (GaME)", link: "/theses-gaming-media-entertainment-game" },
      { label: "Energy, Mobility & Connectivity (EMC)", link: "/theses-energy-mobility-connectivityemc" },
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

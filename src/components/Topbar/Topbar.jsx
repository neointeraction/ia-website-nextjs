import {
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Grid,
  Group,
  Popover,
  ScrollArea,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";

import Image from "next/image";

import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons-react";

import { useDisclosure } from "@mantine/hooks";

import Logo from "@/images/logo.png";

import MenuList from "./components/MenuList";
import { Header, HeaderFlex, HeaderFlexItem } from "./Topbar.styles";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export default function Topbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={"subLink"} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <Header>
        <div className="container">
          <HeaderFlex>
            <HeaderFlexItem>
              <Image src={Logo} width={208} height={24} alt="Logo" />
            </HeaderFlexItem>
            <HeaderFlexItem $grow>
              <Group h="100%" gap={0} visibleFrom="sm">
                <Popover width={"100%"} position="bottom" withArrow shadow="md">
                  <Popover.Target>
                    <a href="#" className={"link"}>
                      What we do
                    </a>
                  </Popover.Target>
                  <Popover.Dropdown
                    style={{
                      overflow: "hidden",
                      marginTop: "-11px",
                      marginLeft: "-6px",
                      padding: "40px 0",
                    }}
                  >
                    <div className="container">
                      <Grid>
                        <Grid.Col span={3}>
                          <MenuList
                            title="Accelerate"
                            listItems={[
                              {
                                text: "Our theses",
                                link: "https://example.com/our-theses",
                              },
                              {
                                text: "Accelerator programs",
                                link: "https://example.com/accelerator-programs",
                              },
                              {
                                text: "Startup offerings",
                                link: "https://example.com/startup-offerings",
                              },
                              {
                                text: "Global expansion",
                                link: "https://example.com/global-expansion",
                              },
                              {
                                text: "Venture studio",
                                link: "https://example.com/venture-studio",
                              },
                            ]}
                            borderColor="#EC5427"
                          />
                        </Grid.Col>
                        <Grid.Col span={3}>
                          <MenuList
                            title="We fund you"
                            listItems={[
                              {
                                text: "IAngels",
                                link: "https://example.com/iangels",
                              },
                              {
                                text: "Finvolve",
                                link: "https://example.com/finvolve",
                              },
                              {
                                text: "Funding schemes",
                                link: "https://example.com/funding-schemes",
                              },
                              {
                                text: "Apply as an investor",
                                link: "https://example.com/apply-investor",
                              },
                            ]}
                            borderColor="#00A14C"
                          />
                        </Grid.Col>
                        <Grid.Col span={3}>
                          <MenuList
                            title="We mentor you"
                            listItems={[
                              {
                                text: "Apply as a mentor",
                                link: "https://example.com/iangels",
                              },
                            ]}
                            borderColor="#00AAE7"
                          />
                        </Grid.Col>
                        <Grid.Col span={3}>
                          <MenuList
                            title="Partnership programs"
                            listItems={[
                              {
                                text: "Government partnerships",
                                link: "https://example.com/our-theses",
                              },
                              {
                                text: "Corporate partnerships",
                                link: "https://example.com/accelerator-programs",
                              },
                              {
                                text: "University partnerships",
                                link: "https://example.com/startup-offerings",
                              },
                              {
                                text: "VCs",
                                link: "https://example.com/global-expansion",
                              },
                              {
                                text: "Apply as a partner",
                                link: "https://example.com/venture-studio",
                              },
                            ]}
                            borderColor="#F7C822"
                          />
                        </Grid.Col>
                      </Grid>
                    </div>
                  </Popover.Dropdown>
                </Popover>

                <Popover width={"100%"} position="bottom" withArrow shadow="md">
                  <Popover.Target>
                    <a href="#" className={"link"}>
                      Who are we
                    </a>
                  </Popover.Target>
                  <Popover.Dropdown
                    style={{
                      overflow: "hidden",
                      marginTop: "-11px",
                      marginLeft: "-6px",
                    }}
                  >
                    <div className="container">
                      <Grid>
                        <Grid.Col span={3}>22</Grid.Col>
                        <Grid.Col span={3}>2</Grid.Col>
                        <Grid.Col span={3}>3</Grid.Col>
                        <Grid.Col span={3}>3</Grid.Col>
                      </Grid>
                    </div>
                  </Popover.Dropdown>
                </Popover>
                <a href="#" className={"link"}>
                  Companies
                </a>
                <a href="#" className={"link"}>
                  Co-working
                </a>
                <a href="#" className={"link"}>
                  Resources
                </a>
              </Group>
            </HeaderFlexItem>
            <HeaderFlexItem>
              <Group visibleFrom="sm" gap="xs">
                <Button variant="default" radius="xl" className="btn-secondary">
                  Let’s Chat
                </Button>
                <Button variant="filled" radius="xl" className="btn-primary">
                  Accelerate your startup
                </Button>
              </Group>
            </HeaderFlexItem>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </HeaderFlex>
        </div>
      </Header>
      {/* Mobile  */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={"link"}>
            Home
          </a>
          <UnstyledButton className={"link"} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={"link"}>
            Learn
          </a>
          <a href="#" className={"link"}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default" radius="xl" className="btn-secondary">
              Let’s Chat
            </Button>
            <Button variant="filled" radius="xl" className="btn-primary">
              Accelerate your startup
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

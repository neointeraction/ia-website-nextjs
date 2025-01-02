"use client";

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
import { useRouter } from "next/navigation";

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
import { useState } from "react";
import { whatWeDoData } from "./data/menuData";
import SubNav from "./components/SubNav";
import React from "react";

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
  const router = useRouter();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const [subMenuId, setSubMenuId] = useState("");
  const [subMenuData, setSubMenuData] = useState([]);

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

  const getSubMenuValue = (id, subData) => {
    setSubMenuId(id);
    setSubMenuData(subData);
  };

  const resetSubNavValue = () => {
    setSubMenuId("");
    setSubMenuData([]);
  };

  console.log(subMenuId, "subMenuId");
  console.log(subMenuData, "subMenuId");

  return (
    <Box>
      <Header>
        <div className="container">
          <HeaderFlex>
            <HeaderFlexItem>
              <UnstyledButton
                component="a"
                onClick={() => router.push("/homepage")}
              >
                <Image src={Logo} width={208} height={24} alt="Logo" />
              </UnstyledButton>
            </HeaderFlexItem>
            <HeaderFlexItem $grow>
              <Group h="100%" gap={0} visibleFrom="sm">
                <Popover
                  width={"100%"}
                  position="bottom"
                  withArrow
                  shadow="md"
                  onChange={() => resetSubNavValue()}
                >
                  <Popover.Target>
                    <UnstyledButton
                      className={"link"}
                      onClick={() => console.log("hello")}
                    >
                      What we do
                    </UnstyledButton>
                  </Popover.Target>
                  <Popover.Dropdown
                    style={{
                      overflow: "hidden",
                      marginTop: "-11px",
                      marginLeft: "-5px",
                      padding: "40px 0",
                    }}
                  >
                    <Box className="container">
                      <Grid>
                        {whatWeDoData
                          .filter(
                            (item) =>
                              subMenuId === "" ||
                              item.listItems.some(
                                (listItem) => listItem.text === subMenuId
                              )
                          )
                          .map((item, index) => {
                            const isFiltered =
                              subMenuId !== "" &&
                              item.listItems.some(
                                (listItem) => listItem.text === subMenuId
                              );

                            return (
                              <React.Fragment
                                key={item.title || `item-${index}`}
                              >
                                <Grid.Col span={isFiltered ? 3 : 3} key={index}>
                                  <MenuList
                                    title={item.title}
                                    path={item.path}
                                    getValue={getSubMenuValue}
                                    listItems={item.listItems}
                                    borderColor={item.borderColor}
                                    subMenuId={subMenuId}
                                  />
                                </Grid.Col>
                                {isFiltered && (
                                  <Grid.Col span={9} key={`subnav-${index}`}>
                                    <SubNav data={subMenuData} />
                                  </Grid.Col>
                                )}
                              </React.Fragment>
                            );
                          })}
                      </Grid>
                    </Box>
                  </Popover.Dropdown>
                </Popover>

                {/* <Popover width={"100%"} position="bottom" withArrow shadow="md">
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
                </Popover> */}
                <a
                  href="javascript:void(0)"
                  className={"link"}
                  onClick={() => router.push("/whoweare")}
                >
                  Who are we
                </a>
                <a
                  href="javascript:void(0)"
                  className={"link"}
                  onClick={() => router.push("/whoweare")}
                >
                  Brands
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

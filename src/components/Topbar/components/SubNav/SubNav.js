"use client";

import { useState } from "react";
import { Box, Grid, Group, UnstyledButton } from "@mantine/core";
import { SubnavContainer } from "./SubNav.styles";
import { List, ListItem } from "../MenuList/MenuList.styles";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SubNav = ({ data }) => {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <Box component="div">
      <SubnavContainer>
        <Group align="flex-start" justify="space-between">
          <Grid w={"50%"}>
            {data.map((item, index) => (
              <Grid.Col span={12} key={index} p={7}>
                <List>
                  <ListItem $noMb>
                    <UnstyledButton
                      component="a"
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className="sub-links"
                      onClick={() => router.push(item.path)}
                    >
                      {item.text}
                    </UnstyledButton>
                  </ListItem>
                </List>
              </Grid.Col>
            ))}
          </Grid>
          {hoveredItem !== null && data[hoveredItem]?.img && (
            <Box style={{ width: "200px", marginLeft: "16px" }}>
              <Image
                src={data[hoveredItem]?.img}
                style={{ width: "100%", height: "100%" }}
                alt="header-img"
              />
            </Box>
          )}
        </Group>
      </SubnavContainer>
    </Box>
  );
};

export default SubNav;

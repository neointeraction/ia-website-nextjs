import { useState } from "react";
import { Box, Grid, UnstyledButton } from "@mantine/core";
import { SubnavContainer } from "./SubNav.styles";
import { List, ListItem } from "../MenuList/MenuList.styles";
import Image from "next/image";

const SubNav = ({ data }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <Box component="div">
      <SubnavContainer>
        <Grid>
          {data.map((item, index) => {
            return (
              <Grid.Col span={12} key={index} p={7}>
                <Box>
                  <List>
                    <ListItem $noMb>
                      <UnstyledButton
                        component="a"
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="sub-links"
                      >
                        {item.text}
                      </UnstyledButton>
                    </ListItem>
                  </List>
                  <Box>
                    {hoveredItem === index && item.img && (
                      <Box style={{ width: "200px" }}>
                        <Image
                          src={item.img}
                          style={{ width: "100%", height: "100%" }}
                          alt="header-img"
                        />
                      </Box>
                    )}
                  </Box>
                </Box>
              </Grid.Col>
            );
          })}
        </Grid>
      </SubnavContainer>
    </Box>
  );
};

export default SubNav;

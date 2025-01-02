"use client";

import { Group, UnstyledButton } from "@mantine/core";
import React from "react";

import { useRouter } from "next/navigation";
import Arrow from "@/images/content-arrow.svg";
import Image from "next/image";
import { Card, List, ListItem, Title } from "./MenuList.styles";

const MenuList = ({
  title,
  path,
  listItems,
  borderColor,
  getValue,
  subMenuId,
}) => {
  const router = useRouter();

  return (
    <Card $borderColor={borderColor}>
      <UnstyledButton
        component="a"
        onClick={() => router.push(path)}
        className="route-title"
      >
        <Group gap="xs" align="center" mb={15}>
          <Title>{title}</Title>
          <Image
            src={Arrow}
            alt="Arrow"
            width={18}
            height={18}
            className="route-arrow"
          />
        </Group>
      </UnstyledButton>

      <List>
        {listItems.map((item, index) => (
          <ListItem key={index}>
            <UnstyledButton
              component="a"
              onClick={() => getValue(item.text, item.listSubData)}
              className={`sub-links ${subMenuId === item.text ? "active" : ""}`}
            >
              {item.text}
            </UnstyledButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default MenuList;

"use client";

import { Box, Group, Stack, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Arrow from "@/images/content-arrow.svg";

import {
  CardTypeBBodyText,
  CardTypeBContainer,
  CardTypeBTitle,
} from "./CardTypeB.styles";
import { useState } from "react";

const CardTypeB = ({
  iconNormal,
  iconHover,
  title,
  bodyText,
  hasTexturedCard,
  path,
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      component="div"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardTypeBContainer $hasTexturedCard={hasTexturedCard}>
        <Stack gap="xs">
          <Box>
            {isHovered ? (
              <Image src={iconHover} alt="Arrow" width={46} height={46} />
            ) : (
              <Image src={iconNormal} alt="Arrow" width={46} height={46} />
            )}
          </Box>
          <Group justify="flex-start" gap={16}>
            <UnstyledButton onClick={() => router.push(path)}>
              <CardTypeBTitle>{title}</CardTypeBTitle>
            </UnstyledButton>
            <Image src={Arrow} alt="Arrow" width={24} height={24} />
          </Group>
          {bodyText && <CardTypeBBodyText>{bodyText}</CardTypeBBodyText>}
        </Stack>
      </CardTypeBContainer>
    </Box>
  );
};

export default CardTypeB;

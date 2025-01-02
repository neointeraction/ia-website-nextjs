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

const CardTypeB = ({ icon, title, bodyText, hasTexturedCard, path }) => {
  const router = useRouter();
  return (
    <Box component="div">
      <CardTypeBContainer $hasTexturedCard={hasTexturedCard}>
        <Stack gap="xs">
          {icon && icon}
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

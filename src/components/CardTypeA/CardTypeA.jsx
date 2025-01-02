"use client";

import { Box, Group, Stack, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Arrow from "@/images/content-arrow.svg";

import {
  CardTypeABodyText,
  CardTypeAContainer,
  CardTypeATitle,
} from "./CardTypeA.styles";

const CardTypeA = ({ icon, title, bodyText, flexed, path, hasBg }) => {
  const router = useRouter();

  return (
    <CardTypeAContainer $hasBg={hasBg}>
      <Box component="div">
        {flexed ? (
          <Group justify="flex-start" align="flex-start" gap={10} wrap="nowrap">
            {icon && (
              <Box component="div" mt={5}>
                <Image src={icon} width={34} height={34} alt="icon" />
              </Box>
            )}
            <Stack gap="xs">
              {path !== undefined ? (
                <UnstyledButton
                  onClick={() => router.push(path)}
                  className="route-link"
                >
                  <Group justify="flex-start" gap={16}>
                    <CardTypeATitle>{title}</CardTypeATitle>
                    <Image src={Arrow} alt="Arrow" width={24} height={24} />
                  </Group>
                </UnstyledButton>
              ) : (
                <CardTypeATitle>{title}</CardTypeATitle>
              )}

              {bodyText && <CardTypeABodyText>{bodyText}</CardTypeABodyText>}
            </Stack>
          </Group>
        ) : (
          <Stack gap="xs">
            {icon && <Image src={icon} width={34} height={34} alt="icon" />}
            {path !== undefined ? (
              <UnstyledButton
                onClick={() => router.push(path)}
                className="route-link"
              >
                <Group justify="flex-start" gap={16}>
                  <CardTypeATitle>{title}</CardTypeATitle>
                  <Image src={Arrow} alt="Arrow" width={24} height={24} />
                </Group>
              </UnstyledButton>
            ) : (
              <CardTypeATitle>{title}</CardTypeATitle>
            )}

            {bodyText && <CardTypeABodyText>{bodyText}</CardTypeABodyText>}
          </Stack>
        )}
      </Box>
    </CardTypeAContainer>
  );
};

export default CardTypeA;

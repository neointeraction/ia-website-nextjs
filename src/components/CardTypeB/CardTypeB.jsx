import { Box, Group, Stack } from "@mantine/core";
import Image from "next/image";

import Arrow from "@/images/content-arrow.svg";

import {
  CardTypeBBodyText,
  CardTypeBContainer,
  CardTypeBTitle,
} from "./CardTypeB.styles";

const CardTypeB = ({ icon, title, bodyText }) => {
  return (
    <Box component="div">
      <CardTypeBContainer>
        <Stack gap="xs">
          {icon && icon}
          <Group justify="flex-start" gap={16}>
            <CardTypeBTitle>{title}</CardTypeBTitle>
            <Image src={Arrow} alt="Arrow" width={24} height={24} />
          </Group>
          {bodyText && <CardTypeBBodyText>{bodyText}</CardTypeBBodyText>}
        </Stack>
      </CardTypeBContainer>
    </Box>
  );
};

export default CardTypeB;

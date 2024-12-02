import { Box, Stack } from "@mantine/core";
import Image from "next/image";
import { CardTypeABodyText, CardTypeATitle } from "./CardTypeA.styles";

const CardTypeA = ({ icon, title, bodyText }) => {
  return (
    <Box component="div">
      <Stack gap="xs">
        {icon && <Image src={icon} width={34} height={34} alt="icon" />}
        <CardTypeATitle>{title}</CardTypeATitle>
        {bodyText && <CardTypeABodyText>{bodyText}</CardTypeABodyText>}
      </Stack>
    </Box>
  );
};

export default CardTypeA;

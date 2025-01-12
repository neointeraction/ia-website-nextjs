import { Box, Group, Stack } from "@mantine/core";
import {
  AuthorDesignation,
  AuthorText,
  TestimonialCardContainer,
  TestimonialInfo,
  TestimonialText,
} from "./TestimonialCard.styles";
import Image from "next/image";

const TestimonialCard = ({ name, img, message, designation }) => {
  return (
    <Box>
      <TestimonialCardContainer>
        <Stack align="stretch" justify="space-between" gap="md" h={350}>
          <TestimonialText>{message}</TestimonialText>
          <TestimonialInfo>
            <Group gap="lg">
              <Image
                src={img}
                width={84}
                height={84}
                alt="banner-img-icon"
                className="banner-img-icon"
              />
              <Box>
                <AuthorText>{name}</AuthorText>
                <AuthorDesignation>{designation}</AuthorDesignation>
              </Box>
            </Group>
          </TestimonialInfo>
        </Stack>
      </TestimonialCardContainer>
    </Box>
  );
};

export default TestimonialCard;

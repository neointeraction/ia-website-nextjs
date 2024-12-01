import { Button, Grid, Stack } from "@mantine/core";
import {
  BannerContainer,
  BannerDisplayText,
  BannerTitle,
} from "./Banner.styles";

import Image from "next/image";

const Banner = ({ title, displayTitile, btnText, onClick, bannerImg }) => {
  return (
    <div className="container">
      <BannerContainer>
        <Grid align="center">
          <Grid.Col span={7}>
            <Stack align="flex-start" gap="lg">
              <div>
                <BannerTitle>{title}</BannerTitle>
                <BannerDisplayText>{displayTitile}</BannerDisplayText>
              </div>

              <Button
                variant="filled"
                radius="xl"
                className="btn-primary"
                onClick={onClick}
              >
                {btnText}
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={5}>
            <Image
              src={bannerImg}
              alt="banner-img"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid.Col>
        </Grid>
      </BannerContainer>
    </div>
  );
};

export default Banner;

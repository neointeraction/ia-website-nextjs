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
          <Grid.Col span={{ base: 12, md: 7, lg: 7 }}>
            <Stack align="flex-start" gap="lg">
              <div>
                <BannerTitle data-aos="fade">{title}</BannerTitle>
                <BannerDisplayText data-aos="fade">
                  {displayTitile}
                </BannerDisplayText>
              </div>

              <Button
                variant="filled"
                radius="xl"
                size="lg"
                className="btn-primary lg"
                onClick={onClick}
                data-aos="fade"
              >
                {btnText}
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5, lg: 5 }}>
            <Image
              data-aos="fade"
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

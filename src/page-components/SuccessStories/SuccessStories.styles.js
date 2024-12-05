import styled from "styled-components";

export const CarouselContainer = styled.div`
  background-image: url(@/../quote-bg.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 60px;
  margin-bottom: 60px;
  .mantine-Carousel-indicators {
    justify-content: flex-start;
    bottom: -60px;
    .mantine-Carousel-indicator {
      background-color: #b7b7b7;
      &[data-active] {
        background-color: #f7c822;
      }
    }
  }
`;

export const StoryText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 36px;
  color: #282828;
  width: 650px;
`;

export const StoryUser = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 36px;
  color: #0f0f0f;
`;

import styled from "styled-components";

export const SuccessStoriesContainer = styled.div`
  .ss-group {
    margin-top: -80px;
  }
  @media (max-width: 768px) {
    .ss-group {
      margin-top: 0px;
    }
  }
`;

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
  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
    .mantine-Carousel-indicators {
      bottom: -30px;
    }
  }
`;

export const StoryText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 36px;
  color: #282828;
  width: 650px;
  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    width: 100%;
  }
`;

export const StoryUser = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 36px;
  color: #0f0f0f;
`;

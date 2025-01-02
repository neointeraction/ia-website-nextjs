import styled, { keyframes } from "styled-components";

export const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RotateReverse = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const MainContainer = styled.section`
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(@/../banner-texture.png);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const Main = styled.div`
  width: 1000px;
  height: 1000px;
  position: relative;
`;

export const BiggerCircle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px dotted #33333266;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Rotate} 80s linear infinite;
`;

export const BigCircle = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  border: 2px dotted #33333266;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Rotate} 60s linear infinite;
`;

export const Circle = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  border: 2px dotted #33333266;
  border-radius: 50%;
  background: #fdfdfd;
  animation: ${Rotate} 40s linear infinite;
`;

export const HoverContent = styled.div`
  display: flex;
  opacity: 0;
  justify-content: flex-start;
  align-items: baseline;
  position: absolute;
  bottom: -18px;
  right: -40px;
  width: 120px;
  transition: 0.3s all ease-in-out;
  &.startups {
    bottom: -40px;
    right: -20px;
  }
`;

export const BannerIconContainer = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  cursor: pointer;
  .banner-img-icon {
    transition: 0.3s all ease-in-out;
  }
  &:hover {
    ${HoverContent} {
      opacity: 1;
      transition: 0.3s all ease-in-out;
    }
    .banner-img-icon {
      transform: scale(1.1);
      transition: 0.3s all ease-in-out;
    }
  }
`;

export const IconBlock = styled.div`
  /* width: 100px;
  height: 42px; */
  position: absolute;

  &.icon-block-outer {
    button {
      animation: ${RotateReverse} 80s linear infinite;
    }
    ${BannerIconContainer} {
      animation: ${RotateReverse} 80s linear infinite;
    }
  }
  &.icon-block-middle {
    button {
      animation: ${RotateReverse} 60s linear infinite;
    }
    ${BannerIconContainer} {
      animation: ${RotateReverse} 60s linear infinite;
    }
  }
  &.icon-block-inner {
    button {
      animation: ${RotateReverse} 40s linear infinite;
    }
    ${BannerIconContainer} {
      animation: ${RotateReverse} 40s linear infinite;
    }
  }
`;

export const CenterLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btn-primary {
    margin-top: 40px;
  }
`;

export const MainTitle = styled.h1`
  text-align: center;
  font-size: 54px;
  font-weight: 900;
  color: #0f0f0f;
  line-height: 72px;
`;

export const HoverText = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #282828;
`;

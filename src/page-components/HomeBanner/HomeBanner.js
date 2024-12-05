import { Button } from "@mantine/core";
import React from "react";
import styled, { keyframes } from "styled-components";

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotateReverse = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const MainContainer = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(@/../banner-texture.png);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const Main = styled.div`
  width: 1000px;
  height: 1000px;
  position: relative;
`;

const BiggerCircle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px dotted #33333266;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Rotate} 60s linear infinite;
`;

const BigCircle = styled.div`
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

const Circle = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  border: 2px dotted #33333266;
  border-radius: 50%;

  animation: ${Rotate} 60s linear infinite;
`;

const IconBlock = styled.div`
  width: 100px;
  height: 42px;
  position: absolute;
  button {
    animation: ${RotateReverse} 60s linear infinite;
  }
`;

const CenterLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    max-width: 200px;
  }
`;

const getIconPositions = (radius) => [
  {
    top: `calc(50% - ${radius}px)`,
    left: "50%",
    transform: "translate(-50%, -100%)",
  }, // Top
  {
    top: "50%",
    left: `calc(50% + ${radius}px)`,
    transform: "translate(0, -50%)",
  }, // Right
  {
    top: `calc(50% + ${radius}px)`,
    left: "50%",
    transform: "translate(-50%, 0)",
  }, // Bottom
  {
    top: "50%",
    left: `calc(50% - ${radius}px)`,
    transform: "translate(-100%, -50%)",
  }, // Left
];

const HomeBanner = () => {
  const biggerCircleIcons = [
    {
      label: "Text 1",
    },
    {
      label: "Text 2",
    },
    {
      label: "Text 3",
    },
    {
      label: "Text 4",
    },
  ];

  const bigCircleIcons = [
    {
      label: "Text 1",
    },
    {
      label: "Text 2",
    },
    {
      label: "Text 3",
    },
    {
      label: "Text 4",
    },
  ];

  const circleIcons = [
    {
      label: "Text 1",
    },
    {
      label: "Text 2",
    },
    {
      label: "Text 3",
    },
    {
      label: "Text 4",
    },
  ];

  const biggerCirclePositions = getIconPositions(470);
  const bigCirclePositions = getIconPositions(360);
  const smallCirclePositions = getIconPositions(260);

  return (
    <MainContainer>
      <Main>
        <BiggerCircle>
          {biggerCircleIcons.map((item, index) => (
            <IconBlock key={index} style={biggerCirclePositions[index]}>
              <Button variant="default" radius="xl" className="btn-secondary">
                {item.label}
              </Button>
            </IconBlock>
          ))}
        </BiggerCircle>
        <BigCircle>
          {bigCircleIcons.map((item, index) => (
            <IconBlock key={index} style={bigCirclePositions[index]}>
              <Button variant="default" radius="xl" className="btn-secondary">
                {item.label}
              </Button>
            </IconBlock>
          ))}
        </BigCircle>
        <Circle>
          {circleIcons.map((item, index) => (
            <IconBlock key={index} style={smallCirclePositions[index]}>
              <Button variant="default" radius="xl" className="btn-secondary">
                {item.label}
              </Button>
            </IconBlock>
          ))}
        </Circle>

        <CenterLogo>
          <h1>Hello</h1>
        </CenterLogo>
      </Main>
    </MainContainer>
  );
};

export default HomeBanner;

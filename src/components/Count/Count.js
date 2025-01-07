"use client";

import { Box, Center, Divider } from "@mantine/core";
import CountUp from "react-countup";

import { CountContainer, MilestoneLabel } from "./Count.styles";
import generateRandomColor from "@/methods/generateRandomColor";

const Count = ({ countValue, label, suffix, prefix, lineColor }) => {
  return (
    <Box component="div">
      <CountContainer>
        <Center className="center-div">
          <CountUp
            end={countValue}
            prefix={prefix === null ? "" : prefix}
            suffix={suffix === null ? "" : suffix}
            enableScrollSpy
            className="count-text"
          />
        </Center>
        <Divider size={2} color={lineColor} className="custom-divider" />
        <MilestoneLabel>{label}</MilestoneLabel>
      </CountContainer>
    </Box>
  );
};

export default Count;

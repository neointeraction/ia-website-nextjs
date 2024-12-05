import { Box, Center, Divider } from "@mantine/core";
import CountUp from "react-countup";

import { CountContainer, MilestoneLabel } from "./Count.styles";
import generateRandomColor from "@/methods/generateRandomColor";

const Count = ({ countValue, label, suffix, prefix }) => {
  return (
    <Box component="div">
      <CountContainer>
        <Center>
          <CountUp
            end={countValue}
            prefix={prefix}
            suffix={suffix}
            enableScrollSpy
            className="count-text"
          />
        </Center>
        <Divider
          size={2}
          color={generateRandomColor()}
          className="custom-divider"
        />
        <MilestoneLabel>{label}</MilestoneLabel>
      </CountContainer>
    </Box>
  );
};

export default Count;

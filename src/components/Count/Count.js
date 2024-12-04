import { Box, Center, Divider } from "@mantine/core";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import { CountContainer, MilestoneLabel } from "./Count.styles";
import generateRandomColor from "@/methods/generateRandomColor";

const Count = ({ countValue, label, suffix, prefix }) => {
  return (
    <Box component="div">
      <CountContainer>
        <Center>
          <CountUp end={countValue} prefix={prefix} suffix={suffix}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start}>
                <Box component="span" className="count-text" ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
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

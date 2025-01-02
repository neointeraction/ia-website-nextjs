import { Box, Button, Flex } from "@mantine/core";
import React from "react";
import {
  DateText,
  EventGridContainer,
  EventLocation,
  EventSubtitle,
  EventTiming,
  EventTitle,
  MonthText,
} from "./EventGrid.styles";

const EventGrid = ({
  date,
  eventTitle,
  eventSubtitle,
  eventTiming,
  eventLocation,
}) => {
  return (
    <Box data-aos="fade">
      <EventGridContainer>
        <Flex
          mih={50}
          gap={60}
          justify="flex-start"
          align="center"
          direction="row"
          wrap="nowrap"
          className="event-grid"
        >
          <Box style={{ flexBasis: "150px" }}>
            {date &&
              (() => {
                const [day, month] = date.split(" ");
                return (
                  <div style={{ textAlign: "center", fontWeight: "bold" }}>
                    <DateText>
                      <Box component="span" className="highlight">
                        {day}
                      </Box>
                    </DateText>
                    <MonthText>{month}</MonthText>
                  </div>
                );
              })()}
          </Box>

          <Box style={{ flexGrow: 1 }}>
            <EventTitle>{eventTitle}</EventTitle>
            <EventSubtitle>{eventSubtitle}</EventSubtitle>
          </Box>
          <Box style={{ flexBasis: "300px" }}>
            <EventTiming>{eventTiming}</EventTiming>
            <EventLocation>{eventLocation}</EventLocation>
          </Box>
          <Box style={{ flexBasis: "200px" }}>
            <Button variant="filled" radius="xl" className="btn-primary">
              Register now
            </Button>
          </Box>
        </Flex>
      </EventGridContainer>
    </Box>
  );
};

export default EventGrid;

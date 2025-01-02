import styled from "styled-components";

export const EventGridContainer = styled.div`
  .event-grid {
    padding: 24px;
    border-bottom: 1px solid #b7b7b7;
  }
`;

export const EventTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.022em;
  color: #282828;
`;

export const EventSubtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.022em;
  color: #282828;
`;

export const EventTiming = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: -0.022em;
  color: #282828;
`;

export const EventLocation = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: -0.022em;
  color: #282828;
`;

export const DateText = styled.h2`
  display: block;
  font-size: 42px;
  font-weight: 600;
  color: #0f0f0f;
  width: ${(props) => (props.$leftAlign ? "auto" : "fit-content")};
  margin: auto;
  line-height: 8px;

  .highlight {
    font-weight: 600;
    margin-right: 10px;
    &.hbf {
      margin-left: 10px;
    }
  }
  .highlight::after {
    content: "";
    background-color: #f7c822;
    display: block;
    width: 100%;
    height: 12px;
    margin-top: 4px;
  }
`;

export const MonthText = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #282828;
`;

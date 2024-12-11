import { Accordion } from "@mantine/core";
import styled from "styled-components";

export const StyledAccordionItem = styled(Accordion.Item)`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 0;
`;

export const AccordionContainer = styled.div`
  .accordion-control {
    padding: 30px;
    &:hover {
      background-color: transparent;
    }
    .mantine-Accordion-label {
      padding: 0;
    }
  }
  .accordion-panel {
    .mantine-Accordion-content {
      padding: 0 30px 30px 30px;
    }
  }
`;

export const AccordionQuestionBlock = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #0f0f0f;
`;

export const AccordionAnswerBlock = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  color: #282828;
`;

import React from "react";
import { Accordion } from "@mantine/core";
import {
  AccordionAnswerBlock,
  AccordionContainer,
  AccordionQuestionBlock,
  StyledAccordionItem,
} from "./FAQComponent.styles";

const FAQComponent = ({ data }) => {
  return (
    <AccordionContainer>
      <Accordion>
        {data.map((item, index) => (
          <StyledAccordionItem key={index} value={`faq-${index}`}>
            <Accordion.Control className="accordion-control">
              <AccordionQuestionBlock>{item.question}</AccordionQuestionBlock>
            </Accordion.Control>
            <Accordion.Panel className="accordion-panel">
              <AccordionAnswerBlock>{item.answer}</AccordionAnswerBlock>
            </Accordion.Panel>
          </StyledAccordionItem>
        ))}
      </Accordion>
    </AccordionContainer>
  );
};

export default FAQComponent;

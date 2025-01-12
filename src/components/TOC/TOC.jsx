"use client";

import { useEffect, useState } from "react";
import { Box } from "@mantine/core";

import {
  IndexTitle,
  TOCContainer,
  TOCContent,
  TOCNav,
  Wrapper,
} from "./TOC.styles";

const TOC = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500;
      let start = null;

      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      const animation = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = elapsed / duration;
        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

        if (elapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );
      let current = "";

      sectionElements.forEach((section) => {
        if (section && section.getBoundingClientRect().top <= 100) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <Wrapper>
      <TOCContainer className="toc">
        <IndexTitle>Index</IndexTitle>
        <TOCNav>
          <ol>
            {sections.map((section) => (
              <li
                key={section.id}
                className={activeSection === section.id ? "nav-active" : ""}
                onClick={() => scrollToSection(section.id)}
              >
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </TOCNav>
      </TOCContainer>
      <TOCContent className="content">
        {sections.map((item, index) => (
          <Box component="section" id={item.id} key={index}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </Box>
        ))}
      </TOCContent>
    </Wrapper>
  );
};

export default TOC;

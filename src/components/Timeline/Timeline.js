"use client";

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 0;
`;

const TimelinePath = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 2px;
  background-color: #ddd;
`;

const TimelineYear = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #eee;
  margin: 0 auto;
  margin-bottom: 50px;
  transition: transform 0.5s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #333;
    border-radius: 50%;
  }

  &.active {
    transform: scale(1.2);
  }
`;

const TimelineContent = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Timeline = ({ data }) => {
  const [activeYear, setActiveYear] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      const scrollTop = window.scrollY;
      const timelineTop = timeline.offsetTop;
      const timelineHeight = timeline.offsetHeight;

      const visibleYears = Math.floor(
        (scrollTop - timelineTop) / timelineHeight
      );
      setActiveYear(Math.max(0, Math.min(visibleYears, data.length - 1)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  return (
    <TimelineContainer ref={timelineRef}>
      <TimelinePath />
      {data.map((year, index) => (
        <TimelineYear
          key={index}
          className={index === activeYear ? "active" : ""}
        >
          <span>{year.year}</span>
        </TimelineYear>
      ))}
      {data.map((year, index) => (
        <TimelineContent
          key={index}
          className={index === activeYear ? "active" : ""}
        >
          <h3>{year.year}</h3>
          <p>{year.description}</p>
        </TimelineContent>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;

import React from "react";
import { PortfolioCardContainer, Title } from "./PortfolioCard.styles";
import Image from "next/image";
import { Button, Group } from "@mantine/core";
import Arrow from "@/images/content-arrow.svg";

const PortfolioCard = ({ imgSrc, title, handleClick }) => {
  return (
    <PortfolioCardContainer onClick={handleClick}>
      <Image
        src={imgSrc}
        width={296}
        height={296}
        alt="logo"
        className="portfolio-img"
      />
      <Group gap="sm" justify="center">
        <Title>{title}</Title>
        <Image src={Arrow} width={31} height={15} alt="arrow" />
      </Group>
    </PortfolioCardContainer>
  );
};

export default PortfolioCard;

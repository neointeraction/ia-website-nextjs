import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 2px solid ${(props) => props.$borderColor};
  padding: 20px;
  border-radius: 2px;
  width: 100%;
  min-height: 261px;
  max-height: 261px;
`;

const Title = styled.h3`
  color: #282828;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 500;
  position: relative;
  width: fit-content;
  &::after {
    content: "";
    background-color: #f7c822;
    display: block;
    width: 100%;
    height: 12px;
    margin-top: -15px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #282828;
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #f7c822;
  }
`;

const MenuList = ({ title, listItems, borderColor }) => {
  return (
    <Card $borderColor={borderColor}>
      <Title>{title}</Title>
      <List>
        {listItems.map((item, index) => (
          <ListItem key={index}>
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              {item.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default MenuList;

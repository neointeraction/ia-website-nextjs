import styled from "styled-components";

export const Title = styled.h3`
  color: #282828;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  width: fit-content;

  &::after {
    content: "";
    background-color: #f7c822;
    display: block;
    width: 100%;
    height: 10px;
    margin-top: -12px;
  }
`;

export const Card = styled.div`
  border: 2px solid ${(props) => props.$borderColor};
  padding: 20px;
  border-radius: 2px;
  width: 100%;
  min-height: 261px;
  max-height: 261px;
  .route-title {
    position: relative;
    .route-arrow {
      opacity: 0;
      transition: 0.3s all ease-in-out;
    }
    &:hover {
      ${Title} {
        transition: 0.1s all ease-in-out;
        text-decoration: underline;

        &::after {
          background-color: transparent;
        }
      }
      .route-arrow {
        opacity: 1;
        transition: 0.3s all ease-in-out;
      }
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: ${(props) => (props.$noMb ? 0 : "10px")};
  color: #282828;
  cursor: pointer;
  .sub-links {
    &.active {
      font-weight: 600;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #f7c822;
  }
`;

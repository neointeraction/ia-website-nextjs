import styled from "styled-components";

export const StrategicFocusContainer = styled.div`
  margin-top: 60px;
`;

export const SFListTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: #0f0f0f;
  line-height: 24px;
  height: 24px;
  transition: 0.1s all ease-in-out;
`;

export const SFListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  cursor: pointer;
  &:hover {
    ${SFListTitle} {
      font-weight: 600;
      transition: 0.1s all ease-in-out;
    }
  }
`;

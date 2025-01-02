import styled from "styled-components";

export const StartupJourneyContainer = styled.div`
  margin-top: 60px;
`;

export const StartupJourneyCardFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;
`;

export const HoveringImageblock = styled.div`
  background-image: ${({ type }) =>
    type === "yellow"
      ? "url(@/../card-yellow.png)"
      : type === "blue"
      ? "url(@/../card-blue.png)"
      : type === "green-v2"
      ? "url(@/../card-green-v2.png)"
      : "url(@/../card-green.png)"};
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.3s all ease-in-out;
  width: ${(props) => (props.$asDynamic ? "300px" : "260px")};
  height: ${(props) => (props.$asDynamic ? "300px" : "260px")};
  padding: 30px 30px 14px 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  &:hover {
    background-image: ${({ type }) =>
      type === "yellow"
        ? "url(@/../card-yellow-hover.png)"
        : type === "blue"
        ? "url(@/../card-blue-hover.png)"
        : type === "green-v2"
        ? "url(@/../card-green-v2-hover.png)"
        : "url(@/../card-green-hover.png)"};
    transition: 0.3s all ease-in-out;
  }
`;

export const SJCTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-top: 16px;
`;

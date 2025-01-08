import styled, { css } from "styled-components";

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
  transition: 0.3s all ease-in-out;
  width: ${(props) => (props.$asDynamic ? "300px" : "260px")};
  height: ${(props) => (props.$asDynamic ? "300px" : "260px")};
  padding: ${(props) => (props.$asDynamic ? "30px 30px 14px 30px" : "0")};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  ${(props) =>
    !props.$asDynamic &&
    css`
      .hover-card-img {
        height: 100%;
        width: 100%;
      }
    `}
`;

export const SJCTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-top: 16px;
`;

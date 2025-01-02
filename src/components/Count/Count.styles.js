import styled from "styled-components";

export const CountContainer = styled.div`
  .count-text {
    font-size: 38px;
    font-weight: 600;
    color: #0f0f0f;
  }
  .custom-divider {
    width: 50%;
    margin: auto;
  }
  @media (max-width: 768px) {
    .count-text {
      font-size: 28px;
      text-align: left;
    }
    .center-div {
      display: block;
    }
    .custom-divider {
      width: 50%;
      margin: 0;
    }
  }
`;

export const MilestoneLabel = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #282828;
  text-align: center;
  margin-top: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: left;
  }
`;

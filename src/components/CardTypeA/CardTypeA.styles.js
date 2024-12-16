import styled from "styled-components";

export const CardTypeATitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: #0f0f0f;
`;

export const CardTypeABodyText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #282828;
`;

export const CardTypeAContainer = styled.div`
  background-color: ${(props) => (props.$hasBg ? "#F3F3F3" : "transpartent")};
  padding: ${(props) => (props.$hasBg ? "24px" : "0")};
  .route-link {
    &:hover {
      text-decoration: underline;
    }
  }
`;

import styled from "styled-components";

export const UPTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #0f0f0f;
`;

export const UserProfileCardContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  cursor: pointer;
  &:hover {
    ${UPTitle} {
      text-decoration: underline;
    }
  }
`;

export const UPDesignation = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #282828;
`;

export const UPCInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12px;
`;

import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  color: #0f0f0f;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #282828;
  margin: 0 0 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Details = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #282828;
  margin-bottom: 12px;
`;

export const DetailItem = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
  &::before {
    content: "";
    height: 6px;
    width: 6px;
    border-radius: 50%;
    display: block;
    background-color: #00a14c;
  }
  &:first-child {
    &::before {
      display: none;
    }
  }
`;

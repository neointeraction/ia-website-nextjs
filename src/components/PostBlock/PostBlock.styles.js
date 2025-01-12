import styled, { css } from "styled-components";

export const PostContainer = styled.div``;

export const PostBlockDiv = styled.div`
  margin-top: 30px;
`;

export const PostTitle = styled.h1`
  font-size: 28px;
  font-weight: 400;
  line-height: 48px;
  color: #0f0f0f;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const PostBody = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  color: #282828;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 20px;
`;

export const PostDate = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  color: #282828;
  margin-bottom: 10px;
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

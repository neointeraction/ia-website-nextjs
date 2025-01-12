import styled, { css } from "styled-components";

export const PostContainer = styled.div`
  margin-top: 30px;
`;

export const PostBlock = styled.div`
  width: 80%;
  margin-top: 30px;
`;

export const PostTitle = styled.h1`
  font-size: 28px;
  font-weight: 400;
  line-height: 48px;
  color: #0f0f0f;
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
  margin-bottom: 20px;
`;

export const PostDate = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  color: #282828;
  margin-bottom: 20px;
`;

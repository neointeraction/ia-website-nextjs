import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  margin: auto;

  .content {
    section {
      margin-bottom: 20px;
      padding-top: 20px;

      &:first-child {
        border-top: none;
        padding-top: 0;
      }

      h2 {
        color: #282828;
        margin-bottom: 15px;
        font-size: 24px;
        font-weight: 400;
      }

      p {
        color: #282828;
        margin-bottom: 20px;
      }
    }
  }
`;

export const TOCContainer = styled.div`
  width: 25%;
  padding: 15px 0;
`;

export const IndexTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.022em;
  color: #0f0f0f;
  margin-bottom: 10px;
  margin-top: -12px;
`;

export const TOCNav = styled.nav`
  position: sticky;
  top: 16px;

  ol {
    padding: 0;
    li {
      font-size: 16px;
      font-weight: 400;

      a {
        text-decoration: none;
        color: #757575;
        padding: 6px 4px 0px 4px;
        display: block;
        transition: border-color 0.3s;
      }
    }

    .nav-active a {
      border-left-color: #212b35;
      font-weight: 600;
      color: #282828;
    }
  }
`;

export const TOCContent = styled.div`
  width: 75%;
  padding-left: 20px;
  border-left: 1px solid #b7b7b7;
`;

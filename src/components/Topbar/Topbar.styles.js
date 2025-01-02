import styled, { css } from "styled-components";

export const HeaderFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderFlexItem = styled.div`
  ${(props) =>
    props.$grow &&
    css`
      flex-grow: 1;
    `}
`;

export const Header = styled.div`
  background-image: url(@/../header-texture.png);
  background-repeat: no-repeat;
  background-size: cover;

  .link {
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    color: #0f0f0f;
    font-size: 16px;
    font-weight: 400;
    padding: 28px 8px;
  }

  @media (max-width: 768px) {
    .link {
      height: 42px;
      width: 100%;
    }
  }

  .subLink {
    width: 100%;
    padding: 8px 16px;
    border-radius: 4px;
  }

  .subLink:hover {
    background-color: #f8f9fa;
  }

  .dropdownFooter {
    background-color: #f8f9fa;
    margin: -16px;
    margin-top: 8px;
    padding: 16px 32px;
    padding-bottom: 24px;
    border-top: 1px solid #e0e0e0;
  }
`;

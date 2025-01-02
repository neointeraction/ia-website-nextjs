import styled, { css } from "styled-components";

export const CardTypeBTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: #0f0f0f;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CardTypeBBodyText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #282828;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardTypeBContainer = styled.div`
  cursor: pointer;

  .svg-icon-yellow {
    fill: transparent;
    transition: 0.3s all ease-in-out;
  }
  .svg-icon-green {
    fill: transparent;
    transition: 0.3s all ease-in-out;
  }
  .svg-icon-blue {
    fill: transparent;
    transition: 0.3s all ease-in-out;
  }
  .svg-icon-red {
    fill: transparent;
    transition: 0.3s all ease-in-out;
  }
  .svg-icon-red-stroke {
    stroke: #0f0f0f;
    transition: 0.3s all ease-in-out;
  }
  .svg-icon-green-stroke {
    stroke: #0f0f0f;
    transition: 0.3s all ease-in-out;
  }

  &:hover {
    ${CardTypeBTitle} {
      text-decoration: underline;
    }
    .svg-icon-yellow {
      fill: #f7c822;
      transition: 0.3s all ease-in-out;
    }
    .svg-icon-green {
      fill: #00a14c;
      transition: 0.3s all ease-in-out;
    }
    .svg-icon-blue {
      fill: #00aae7;
      transition: 0.3s all ease-in-out;
    }
    .svg-icon-red {
      fill: #ec5427;
      transition: 0.3s all ease-in-out;
    }
    .svg-icon-red-stroke {
      stroke: #ec5427;
      transition: 0.3s all ease-in-out;
    }
    .svg-icon-green-stroke {
      stroke: #00a14c;
      transition: 0.3s all ease-in-out;
    }
  }
  ${(props) =>
    props.$hasTexturedCard &&
    css`
      background-image: url(@/../card-texture.png);
      background-repeat: no-repeat;
      background-size: cover;
      padding: 30px 30px;
      min-height: 262px;
    `}
  @media (max-width: 768px) {
    padding-bottom: 10px;
    border-bottom: 1px solid #b7b7b7;
  }
`;

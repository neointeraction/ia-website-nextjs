import styled from "styled-components";

export const ArrowWithText = styled.div`
  position: relative;
  &::before {
    content: ${(props) => `"${props.$text || ""}"`};
    font-size: 20px;
    font-weight: 400;
    color: #282828;
    text-align: center;
    position: absolute;
  }
`;

export const WhyFoundersChoseIAContainer = styled.div`
  position: relative;
  padding: 180px 0;
  .section-title {
    width: 400px;
  }
  .top-left {
    top: 12%;
    left: 25%;
    & .top-left-arrow-text {
      &::before {
        left: -260px;
        top: -17px;
        width: 250px;
      }
    }
  }
  .top-right {
    top: 2%;
    right: 20%;
    & .top-right-arrow-text {
      &::before {
        right: -245px;
        top: -17px;
        width: 250px;
      }
    }
  }
  .left {
    top: 43%;
    left: 14%;
    & .left-arrow-text {
      &::before {
        left: -140px;
        bottom: -30px;
        width: 250px;
      }
    }
  }
  .right {
    top: 43%;
    right: 18%;
    & .right-arrow-text {
      &::before {
        right: -140px;
        bottom: -30px;
        width: 250px;
      }
    }
  }
  .bottom {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    & .bottom-arrow-text {
      &::before {
        bottom: -100px;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 250px;
      }
    }
  }
`;

export const ReasonPointBlock = styled.div`
  margin: 0;
  position: absolute;
`;

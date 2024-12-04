import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #0f0f0f;
  padding: 48px 0;
`;

export const LogoSubText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #b7b7b7;
  margin-top: 20px;
`;

export const LogoSocialBlock = styled.div`
  padding-bottom: 50px;
`;

export const FooterLinksContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const FooterTitle = styled.h2`
  font-size: ${(props) => (props.$sm ? "18px" : "22px")};
  font-weight: 600;
  color: #fdfdfd;
  margin-bottom: 28px;
`;

export const FooterLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: #b7b7b7;
  margin-bottom: 16px;
  display: block;
  transition: 0.3s all ease-in-out;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    transition: 0.3s all ease-in-out;
    color: #fdfdfd;
  }
`;

export const CopyrightText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #7e7e7e;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

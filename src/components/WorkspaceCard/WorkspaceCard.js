import styled from "styled-components";
import ImageMask from "../ImageMask";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
  color: #333;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 12px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
`;

const DetailItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: "•";
    color: green;
    font-size: 16px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const WorkspaceCard = ({ src, maskSrc, title, description, size, members }) => {
  return (
    <Card>
      <ImageWrapper>
        <ImageMask src={src} maskSrc={maskSrc} alt={`${title} image`} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Details>
          <DetailItem>{size}</DetailItem>
          <DetailItem>{members} members</DetailItem>
        </Details>
        <Button>View details</Button>
      </Content>
    </Card>
  );
};

export default WorkspaceCard;

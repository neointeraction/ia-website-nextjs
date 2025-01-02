import { Button } from "@mantine/core";
import ImageMask from "../ImageMask";
import {
  Card,
  Content,
  Description,
  DetailItem,
  Details,
  ImageWrapper,
  Title,
} from "./WorkspaceCard.styles";

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
          <DetailItem>{members}</DetailItem>
        </Details>
        <Button variant="filled" radius="xl" className="btn-primary">
          View details
        </Button>
      </Content>
    </Card>
  );
};

export default WorkspaceCard;

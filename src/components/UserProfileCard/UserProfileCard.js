import { Box } from "@mantine/core";
import Image from "next/image";
import {
  UPCInfo,
  UPDesignation,
  UPTitle,
  UserProfileCardContainer,
} from "./UserProfileCard.styles";

const UserProfileCard = ({ img, name, designation }) => {
  return (
    <Box component="div">
      <UserProfileCardContainer>
        <Image
          src={img?.url}
          width={img?.width}
          height={img?.height}
          alt="profile-img"
        />
        <UPCInfo>
          <UPTitle>{name}</UPTitle>
          <UPDesignation>{designation}</UPDesignation>
        </UPCInfo>
      </UserProfileCardContainer>
    </Box>
  );
};

export default UserProfileCard;

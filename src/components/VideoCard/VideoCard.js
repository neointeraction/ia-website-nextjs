"use client";

import React, { useState } from "react";
import { Modal } from "@mantine/core";
import {
  VideoCardContainer,
  VideoIframe,
  VideoTitle,
} from "./VideoCard.styles";

const VideoCard = ({ title, src }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <VideoCardContainer>
        <VideoIframe
          width="100%"
          height="236px"
          src={src}
          title={title}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></VideoIframe>
        <VideoTitle onClick={openModal}>{title}</VideoTitle>
      </VideoCardContainer>

      {/* Mantine Modal */}
      <Modal
        opened={isModalOpen}
        onClose={closeModal}
        centered
        size="100%"
        overlayColor="rgba(0, 0, 0, 0.5)"
        overlayOpacity={0.75}
        className="video-modal"
      >
        <VideoIframe
          width="100%"
          height="600px"
          src={src}
          title={title}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ marginBottom: "-6px" }}
        ></VideoIframe>
      </Modal>
    </>
  );
};

export default VideoCard;

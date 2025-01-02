"use client";

import { BreadcrumbText } from "@/styles/main.styles";
import { UnstyledButton } from "@mantine/core";
import React from "react";

export const breadcrumbGenerator = (data) => {
  const breadcrumbData = data.map((item, index) => (
    <React.Fragment key={index}>
      {item.href ? (
        <UnstyledButton
          href={item.href}
          key={index}
          className="breadcrumb-link"
        >
          {item.title}
        </UnstyledButton>
      ) : (
        <BreadcrumbText> {item.title}</BreadcrumbText>
      )}
    </React.Fragment>
  ));

  return breadcrumbData;
};

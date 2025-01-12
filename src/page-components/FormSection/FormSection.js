"use client";

import React from "react";

import { Box, Grid, Stack } from "@mantine/core";

import SectionTitle from "@/utils/SectionTitle";

import { SectionSubTitle } from "@/styles/main.styles";
import { FormSectionContainer, SuperText } from "./FormSection.styles";

import CardTypeA from "@/components/CardTypeA";
import FormBlock from "@/components/FormBlock";

import StarRed from "@/images/star-red.svg";
import StarGreen from "@/images/star-green.svg";
import StarBlue from "@/images/star-blue.svg";

const FormSection = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    super_text,
    title,
    sub_title: subtitle,
    highlight: highlightedText,
    formId,
    email,
    phone,
    address,
  } = data;

  return (
    <FormSectionContainer>
      <Grid gutter={60}>
        <Grid.Col span={6}>
          <Box component="div" mt={20}>
            {super_text && <SuperText data-aos="fade">{super_text}</SuperText>}
            <SectionTitle
              $leftAlign
              data-aos="fade"
              $highlight={highlightedText}
              title={title}
            />
            {subtitle && (
              <SectionSubTitle data-aos="fade" $leftAlign>
                {subtitle}
              </SectionSubTitle>
            )}
            <Stack justify="center" gap="xl" mt={40}>
              {email && (
                <CardTypeA
                  icon={StarRed}
                  title={"Email"}
                  bodyText={email}
                  path={null}
                  flexed
                />
              )}
              {phone && (
                <CardTypeA
                  icon={StarGreen}
                  title={"Phone"}
                  bodyText={phone}
                  path={null}
                  flexed
                />
              )}
              {address && (
                <CardTypeA
                  icon={StarBlue}
                  title={"Address"}
                  bodyText={address}
                  path={null}
                  flexed
                />
              )}
            </Stack>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}>
          <FormBlock formId={formId} />
        </Grid.Col>
      </Grid>
    </FormSectionContainer>
  );
};

export default FormSection;

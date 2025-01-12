"use client";

import React from "react";
import { Button, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  Form,
  FormBlockContainer,
  FormSubTitile,
  FormTitile,
} from "../FormBlock.styles";

const GetInTouchForm = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    },

    validate: {
      name: (value) => (value.trim().length > 0 ? null : "Name is required"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        /^[0-9]{10}$/.test(value) ? null : "Phone number must be 10 digits",
      city: (value) => (value.trim().length > 0 ? null : "City is required"),
      message: (value) =>
        value.trim().length > 0 ? null : "Message is required",
    },
  });

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <FormBlockContainer>
      <FormTitile>Get in Touch with Us</FormTitile>
      <FormSubTitile>
        Fill out the form, and we’ll get back to you soon.
      </FormSubTitile>
      <Form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Name"
          placeholder="Your name"
          {...form.getInputProps("name")}
          required
          className="form-input"
        />
        <TextInput
          label="Email"
          placeholder="Email id"
          {...form.getInputProps("email")}
          required
          mt="sm"
          className="form-input"
        />
        <TextInput
          label="Phone number"
          placeholder="Enter number"
          {...form.getInputProps("phone")}
          required
          mt="sm"
          className="form-input"
        />
        <TextInput
          label="City"
          placeholder="Enter City"
          {...form.getInputProps("city")}
          required
          mt="sm"
          className="form-input"
        />
        <Textarea
          label="Message"
          placeholder="Enter Message"
          {...form.getInputProps("message")}
          required
          mt="sm"
          className="form-input"
          mb={30}
        />
        <Button
          type="submit"
          variant="filled"
          radius="xl"
          size="lg"
          className="btn-primary lg"
          mt="md"
        >
          Submit
        </Button>
      </Form>
    </FormBlockContainer>
  );
};

export default GetInTouchForm;

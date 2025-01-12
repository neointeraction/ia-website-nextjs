"use client";

import React from "react";
import { Button, Select, TextInput, NumberInput, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePickerInput } from "@mantine/dates";
import {
  Form,
  FormBlockContainer,
  FormSubTitile,
  FormTitile,
} from "../FormBlock.styles";

const CallbackForm = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      location: "",
      date: null,
      seats: null,
    },

    validate: {
      name: (value) => (value.trim().length > 0 ? null : "Name is required"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        /^[0-9]{10}$/.test(value) ? null : "Phone number must be 10 digits",
      city: (value) => (value ? null : "City is required"),
      location: (value) => (value ? null : "Location is required"),
      date: (value) => (value ? null : "Date is required"),
      seats: (value) =>
        value && value > 0 ? null : "Seats required must be greater than 0",
    },
  });

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };
  return (
    <FormBlockContainer>
      <FormTitile>Request a callback</FormTitile>
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
          mt="lg"
          className="form-input"
        />
        <TextInput
          label="Phone number"
          placeholder="Enter number"
          {...form.getInputProps("phone")}
          required
          mt="lg"
          className="form-input"
        />
        <Group grow mt="lg">
          <Select
            label="Pick City"
            placeholder="Select"
            data={["City 1", "City 2", "City 3"]}
            {...form.getInputProps("city")}
            required
            className="form-input"
          />
          <Select
            label="Pick Location"
            placeholder="Select"
            data={["Location 1", "Location 2", "Location 3"]}
            {...form.getInputProps("location")}
            required
            className="form-input"
          />
        </Group>
        <Group grow mt="lg" mb={30}>
          <DatePickerInput
            label="Pick a date"
            placeholder="Select"
            {...form.getInputProps("date")}
            required
            variant="unstyled"
            className="form-input"
          />
          <NumberInput
            label="Seats required"
            placeholder="Select"
            {...form.getInputProps("seats")}
            required
            className="form-input"
          />
        </Group>

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

export default CallbackForm;

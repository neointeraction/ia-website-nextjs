"use client";

import React from "react";

import CallbackForm from "./components/CallbackForm";
import GetInTouchForm from "./components/GetInTouchForm";

const FormBlock = ({ formId }) => {
  const formMap = {
    callback: CallbackForm,
    getInTouch: GetInTouchForm,
  };

  const SelectedForm = formMap[formId];

  return SelectedForm ? (
    <SelectedForm />
  ) : (
    <div>Invalid form ID. Please check the configuration.</div>
  );
};

export default FormBlock;

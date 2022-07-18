import React from "react";
import { useFormik } from "formik";
import { useTheme } from "../../data/stores/useTheme";
import { useNavigate } from "react-router-dom";
import configData from "../../data/config.json";
import { Button, Form } from "react-bootstrap";

function SettingsForm() {
  const isTheme = useTheme((state) => state.isTheme);
  const setTheme = useTheme((state) => state.setTheme);
  const navigate = useNavigate();

  const submitSettingsForm = (theme) => {
    setTheme(theme);
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      theme: isTheme,
      lang: "",
    },
    onSubmit: (values) => {
      submitSettingsForm(values.theme);
    },
  });
  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="validationFormik01">
        <Form.Label className="fw-bold text-light">Color theme</Form.Label>
        <Form.Select
          name="theme"
          onChange={formik.handleChange}
          value={formik.values.theme}
        >
          <option value={configData.DARK_COLOR} label="Dark"></option>
          <option value={configData.LIGHT_COLOR} label="Light"></option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationFormik01">
        <Form.Label className="fw-bold text-light">Langauge</Form.Label>
        <Form.Select
          name="lang"
          onChange={formik.handleChange}
          value={formik.values.lang}
        >
          <option value="en_US" label="English"></option>
          <option value="ru" label="Russian"></option>
        </Form.Select>
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default SettingsForm;

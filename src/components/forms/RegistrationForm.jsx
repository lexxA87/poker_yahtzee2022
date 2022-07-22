import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
// import { userRegistration } from "../../api/userAPI";

function RegistrationForm(props) {
  const [isLoading, setLoading] = useState(false);
  //   const { t } = useTranslation();

  //   Yup.setLocale({
  //     mixed: {
  //       required: "required",
  //     },
  //     string: {
  //       email: "invalid_email",
  //     },
  //   });

  console.log("reg form");

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(60, "field too big")
      .min(2, "field too short")
      .required(),
    password: Yup.string()
      .min(4, "field too short")
      .max(20, "field too big")
      .required(),
    email: Yup.string().email().required(),
  });

  //   const registrationSubmit = async (values) => {
  //     setLoading(true);
  //     const res = await userRegistration(values);
  //     if (res.user) {
  //       alert(res.message);
  //       setShowLogin(true);
  //     } else {
  //       alert(res);
  //       setLoading(false);
  //     }
  //   };

  const registrationSubmit = (values) => {
    setLoading(true);
    alert(values);
    setLoading(false);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={registrationSubmit}
      initialValues={{
        name: "",
        password: "",
        email: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form className="mb-3" noValidate onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="name"
            className="mb-3"
          >
            <Form.Control
              name="name"
              value={values.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.name}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel controlId="emailInput" label="email" className="mb-3">
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.email}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              isInvalid={!!errors.password}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.password}
            </Form.Control.Feedback>
          </FloatingLabel>

          <Button variant="primary" type="submit" disabled={isLoading}>
            Registration
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;

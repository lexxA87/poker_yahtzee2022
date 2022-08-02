import React, { useState } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as Yup from "yup";
import { userLogin } from "../../api/userAPI";
import { useCurrentUserStore } from "../../data/stores/useCurrentUserStore";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const [isLoading, setLoading] = useState(false);
  const setCurrentUser = useCurrentUserStore((state) => state.setCurrentUser);
  const setIsAuth = useCurrentUserStore((state) => state.setIsAuth);
  //   const { t } = useTranslation();
  const navigate = useNavigate();

  //   Yup.setLocale({
  //     mixed: {
  //       required: "required",
  //     },
  //     string: {
  //       email: "invalid_email",
  //     },
  //   });

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(4, "field too short")
      .max(20, "field too big")
      .required(),
    email: Yup.string().email().required(),
  });

  const loginSubmit = async (values) => {
    setLoading(true);
    const res = await userLogin(values);
    if (res.name) {
      setCurrentUser(res);
      setIsAuth(true);
      navigate("/");
    } else {
      alert(res);
    }
    setLoading(false);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={loginSubmit}
      initialValues={{
        email: "",
        password: "",
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

          <Button variant="success" type="submit" disabled={isLoading}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;

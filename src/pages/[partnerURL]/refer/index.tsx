import React from "react";
import type { PageProps } from "gatsby";

import { Formik } from "formik";
import * as Yup from "yup";

import { Input } from "./../../../components/Form";

const RefereForm: React.FC<PageProps> = ({ params }) => {
  console.log(params.partnerURL);
  return (
    <>
      {/* <h1>{params.partnerURL}</h1> */}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <Input
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />

            <Input
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />

            <Input label="Email Address" name="email" type="email" />

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default RefereForm;

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function YoutobeForm() {
  console.clear();
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required")
  });
  const initialValues = {
    name: "Vishwas",
    email: "",
    channel: ""
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="fprm-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          {formik.touched.channel && formik.errors.channel && (
            <div className="error">{formik.errors.channel}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutobeForm;

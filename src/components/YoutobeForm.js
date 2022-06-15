import React from "react";
import { useFormik } from "formik";
//import validator from "validator";
import * as Yup from "yup";

function YoutobeForm() {
  console.clear();
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required")
  });
  const formik = useFormik({
    initialValues: { name: "", email: "", channel: "" },
    onSubmit: (values) => {
      console.log("Form Submit", values);
    },
    validationSchema
    // validate: (values) => {
    //   let errors = {};

    //   if (!values.name) {
    //     errors.name = "Required";
    //   }
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (!validator.isEmail(values.email)) {
    //     errors.email = "Invalid Email";
    //   }
    //   if (!values.channel) {
    //     errors.channel = "Required";
    //   }

    //   return errors;
    // }
  });

  console.log("Visited field", formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="fprm-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel && (
            <div className="error">{formik.errors.channel}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YoutobeForm;

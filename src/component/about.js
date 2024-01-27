import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export const About = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      dateOfBirth: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      location: Yup.string().required('Required'),
      dateOfBirth: Yup.date().required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="signup-form" onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="error-message">{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="error-message">{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error-message">{formik.errors.email}</div>
      ) : null}

      <label htmlFor="location">Location</label>
      <input
        id="location"
        name="location"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.location}
      />
      {formik.touched.location && formik.errors.location ? (
        <div className="error-message">{formik.errors.location}</div>
      ) : null}

      <label htmlFor="dateOfBirth">Date of Birth</label>
      <input
        id="dateOfBirth"
        name="dateOfBirth"
        type="date"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.dateOfBirth}
      />
      {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
        <div className="error-message">{formik.errors.dateOfBirth}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};


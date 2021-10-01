import { useFormik } from "formik";
export const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values);
    },

    validate: (values) => {
      let errors = {};
      if (!values.username) {
        errors.username = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }
    }
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label>Username</label>
        <br></br>
        <input
          type="text"
          name="username"
          id="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        <br></br>
        <label>Email</label>
        <br></br>
        <input
          type="text"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <br></br>
        <label>Password</label>
        <br></br>
        <input
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <br></br>
        <button> Submit</button>
      </form>
    </>
  );
};

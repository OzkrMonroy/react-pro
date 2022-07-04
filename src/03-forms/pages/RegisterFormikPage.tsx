import "../styles/styles.css";
import { Form, Formik } from "formik";
import { MyCustomInputText } from "03-forms/components";
import * as Yup from "yup";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          email: "",
          name: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Incorrect email format")
            .required("This field is required."),
          name: Yup.string()
            .min(2, "Min 2 characters")
            .max(15, "Max 15 characters")
            .required("This field is required"),
          password: Yup.string()
            .min(6, "Must have minimum 6 characters")
            .required("This field is required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password")], "The passwords does not match")
            .required("This field is required."),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyCustomInputText name="name" placeholder="Oscar" label="Name" />
            <MyCustomInputText
              name="email"
              placeholder="test@test.com"
              label="Email"
            />
            <MyCustomInputText
              name="password"
              label="Password"
              type="password"
            />
            <MyCustomInputText
              name="password2"
              label="Repeat your password"
              type="password"
            />
            <button type="submit">Register</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

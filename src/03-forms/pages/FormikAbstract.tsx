import { MyCustomInputText } from "03-forms/components/MyCustomInputText";
import { MyCustomSelect } from "03-forms/components/MyCustomSelect";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik abstract tutorial</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Check the email format")
            .required("required"),
          terms: Yup.boolean().oneOf(
            [true],
            "Must accept the terms and conditions"
          ),
          jobType: Yup.string()
            .required("Required")
            .notOneOf(["it-jr"], "The option is not allow."),
        })}
      >
        {(formik) => (
          <Form>
            <MyCustomInputText
              name={"firstName"}
              label={"First Name"}
              placeholder={"First name"}
            />
            <MyCustomInputText
              name={"lastName"}
              label={"Last Name"}
              placeholder={"Last name"}
            />
            <MyCustomInputText
              name={"email"}
              label={"Email"}
              placeholder={"email@example.com"}
              type="email"
            />

            <MyCustomSelect name="jobType" label="Job type">
              <option value="">Select</option>
              <option value="engineer">Engineer</option>
              <option value="designer">Designer</option>
              <option value="it-jr">IT jr.</option>
            </MyCustomSelect>

            <label>
              Terms and conditions
              <Field name="terms" type="checkbox" />
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

import { MyCustomInputText, MyCustomSelect } from "03-forms/components";
import { Form, Formik } from "formik";
import formJson from "../data/custom-form.json";
import * as Yup from "yup";

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;
  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required(rule.message);
    }
    if (rule.type === "minLength") {
      schema = schema.min((rule as any).value, rule.message);
    }
    if (rule.type === "email") {
      schema = schema.email(rule.message);
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ label, name, placeholder, type, options }) => {
              if (type === "select") {
                return (
                  <MyCustomSelect key={name} name={name} label={label}>
                    <option value="">Select an option</option>
                    {options?.map((op) => (
                      <option value={op.id} key={op.id}>
                        {op.label}
                      </option>
                    ))}
                  </MyCustomSelect>
                );
              }
              return (
                <MyCustomInputText
                  name={name}
                  label={label}
                  type={type as any}
                  placeholder={placeholder}
                  key={name}
                />
              );
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

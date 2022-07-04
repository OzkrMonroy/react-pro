import { ErrorMessage, useField } from "formik";

interface Props {
  name: string;
  type?: "text" | "email" | "password";
  label: string;
  placeholder?: string;
  [x: string]: any;
}

export const MyCustomInputText = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};

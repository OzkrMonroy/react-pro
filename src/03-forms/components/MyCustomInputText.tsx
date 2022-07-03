import { useField } from "formik";

interface Props {
  name: string;
  type?: "text" | "email" | "password";
  label: string;
  placeholder?: string;
  [x: string]: any;
}

export const MyCustomInputText = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id ? props.id : props.name}>{label}</label>
      <input className="" {...field} {...props} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </>
  );
};

import { useField, ErrorMessage } from "formik";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  [x: string]: any;
}

export const MyCustomSelect = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id ? props.id : props.name}>{label}</label>
      <select className="" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};

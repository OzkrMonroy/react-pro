import { useField } from "formik";

interface Props {
  name: string;
  label: string;
  [x: string]: any;
}

export const MyCustomCheckbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        <input type={"checkbox"} {...field} {...props} />
        {label}
      </label>
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </>
  );
};

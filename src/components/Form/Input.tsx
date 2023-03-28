import React from "react";
import { useField } from "formik";

interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  id?: string;
}

const Input = (props: InputProps) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default Input;

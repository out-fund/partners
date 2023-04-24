import React from "react";
import { useField } from "formik";
import styled from "styled-components";

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
    <InputWrapper>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorWrapper>{meta.error}</ErrorWrapper>
      ) : null}
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  /* background-color: #afa; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  label {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
  input {
    box-sizing: border-box;
    border-radius: 4px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    background-color: #fff;

    height: 40px;
    outline: none;
    padding: 0 16px;
  }
`;
const ErrorWrapper = styled.div`
  /* background-color: #ffa; */
  color: red;
  line-height: 1;
  font-size: 14px;
`;

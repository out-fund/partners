import React from "react";
import { useField } from "formik";
import styled from "styled-components";

interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  id?: string;
  children?: React.ReactNode;
  defaultValue?: string;
}

const Input = (props: InputProps) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  if (props.type === "select")
    return (
      <InputWrapper>
        <label htmlFor={props.id || props.name}>{props.label}</label>
        <select {...field} {...props}>
          {props.children}
        </select>
        {meta.touched && meta.error ? (
          <ErrorWrapper>{meta.error}</ErrorWrapper>
        ) : null}
      </InputWrapper>
    );
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

    font-weight: 600;
  }
  input,
  select {
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
    &:focus {
      border-color: #000;
    }
  }
  select {
    /* background-color: #afa; */
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: 0.65rem auto;
  }
`;
const ErrorWrapper = styled.div`
  /* background-color: #ffa; */
  color: red;
  line-height: 1;
  font-size: 14px;
`;

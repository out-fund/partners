import React from "react";
import styled from "styled-components";

interface ButtonProps {
  btnBgColor: string;
  btnTextColor: string;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  console.log(props);
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button<any>`
  background-color: ${({ btnBgColor }) => btnBgColor};
  color: ${({ btnTextColor }) => btnTextColor};
  padding: 8px 24px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
`;

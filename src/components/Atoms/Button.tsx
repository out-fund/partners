import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

interface ButtonProps {
  btnbgcolor: string;
  btntextcolor: string;
  children: React.ReactNode;
  to?: string;
  type?: string;
}

const Button = (props: ButtonProps) => {
  // console.log(props);

  let url = props.to;
  if (!url) {
    url = "apply";
  }
  if (!props.type)
    return (
      <StyledLink to={url} {...props}>
        {props.children}
      </StyledLink>
    );

  if (props.type)
    return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

const StyledLink = styled(Link)<any>`
  background-color: ${({ btnbgcolor }) => btnbgcolor};
  color: ${({ btntextcolor }) => btntextcolor};
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  font-weight: bold;
`;

const StyledButton = styled.button<any>`
  background-color: ${({ btnbgcolor }) => btnbgcolor};
  color: ${({ btntextcolor }) => btntextcolor};
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  font-weight: bold;
`;

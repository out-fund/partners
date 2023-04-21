import React from "react";
import styled from "styled-components";

// interface InputProps {
//   label: string;

// }

const Page = (props: any) => {
  return <Main>{props.children}</Main>;
};

export default Page;

const Main = styled.div`
  background-color: #afa;
`;

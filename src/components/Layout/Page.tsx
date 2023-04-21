import React from "react";
import styled from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

const Page = (props: any) => {
  return (
    <ChakraProvider>
      <Main>{props.children} </Main>
    </ChakraProvider>
  );
};

export default Page;

const Main = styled.div`
  /* background-color: #afa; */
`;

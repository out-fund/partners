import React from "react";
import styled from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

const Page = (props: any) => {
  // console.log(props);
  return (
    <ChakraProvider>
      <Main {...props}>{props.children}</Main>
    </ChakraProvider>
  );
};

export default Page;

const Main = styled.div<any>`
  background-color: ${({ options }) => options.background};
  min-height: 101vh;
  padding-top: ${({ options }) => options.topBarHeight};
  color: ${({ options }) => options.color.text};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ options }) => options.color.heading};
  }
`;

// const ContentWrapper = styled.div`
//   /* background-color: #afa; */
//   max-width: 1170px;
//   margin: 0 auto;
// `;

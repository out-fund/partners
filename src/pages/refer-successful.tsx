import * as React from "react";
import styled from "styled-components";
import type { HeadFC } from "gatsby";
import { navigate } from "gatsby";
import { ChakraProvider } from "@chakra-ui/react";

import { Button } from "./../components/Atoms";

export const Head: HeadFC = () => (
  <>
    <title>Refer successful</title>
  </>
);

const ReferSuccessfulPage: React.FC = () => {
  return (
    <ChakraProvider>
      <Main>
        <h1>Refer successful</h1>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          btnbgcolor="#003EDB"
          btntextcolor="#ffffff"
          type="button"
        >
          Refer another
        </Button>
      </Main>
    </ChakraProvider>
  );
};

export default ReferSuccessfulPage;

const Main = styled.main`
  text-align: center;
  padding-top: 100px;
  h1 {
    font-size: 24px;
    margin-bottom: 32px;
  }
`;

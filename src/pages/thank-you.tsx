import * as React from "react";
import styled from "styled-components";
import type { HeadFC, PageProps } from "gatsby";
import { Button } from "./../components/Atoms";
import { ChakraProvider } from "@chakra-ui/react";

export const Head: HeadFC = () => (
  <>
    <title>Thank you</title>
  </>
);

const ThankYouPage: React.FC<PageProps> = (props) => {
  let buttonVars = {
    btnbgcolor: "#000",
    btntextcolor: "#fff",
  };

  if (props.location.state?.color.btnBG) {
    buttonVars = {
      btnbgcolor: props.location.state.color.btnBG,
      btntextcolor: props.location.state.color.btnText,
    };
  }

  let slug = props.location.state?.slug ? props.location.state?.slug : "";

  return (
    <ChakraProvider>
      <Main>
        <h1>Thank you for your contact details</h1>
        <Button
          btnbgcolor={buttonVars.btnbgcolor}
          btntextcolor={buttonVars.btntextcolor}
          href={`https://client.out.fund/signup?utm_source=partner&utm_medium=partnerLandingPage&utm_campaign=${slug}`}
        >
          Proceed with your application
        </Button>
      </Main>
    </ChakraProvider>
  );
};

export default ThankYouPage;

const Main = styled.main`
  text-align: center;
  padding-top: 100px;
  h1 {
    font-size: 24px;
    margin-bottom: 32px;
  }
`;

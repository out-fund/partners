import * as React from "react";
import styled from "styled-components";
import type { HeadFC, PageProps } from "gatsby";

export const Head: HeadFC = () => (
  <>
    <title>Outfund + Partners</title>
  </>
);

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Main>
      <h1>Outfund partner pages</h1>
      <a href="https://out.fund/partners/">Become a partner</a>
    </Main>
  );
};

export default IndexPage;

const Main = styled.main`
  text-align: center;
  padding-top: 100px;
  font-family: sans-serif;
  h1 {
    font-size: 24px;
    margin-bottom: 32px;
  }
`;

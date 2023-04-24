import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import { ContentWrapper, Button } from "./../Atoms";

const WhatWeDo: React.FC = (props: any) => {
  return (
    <StyledWhatWeDo {...props.options}>
      <ContentWrapper>
        <div className="small">
          <h2>{parse(props.content.title)}</h2>
          {props.content.description && (
            <p>{parse(props.content.description)}</p>
          )}
          {props.content.statement && (
            <p className="statement">{parse(props.content.statement)}</p>
          )}
          {props.options.showButton && (
            <>
              {/* @ts-expect-error Server Component */}
              <Button
                btnbgcolor={props.options.color.btnBG}
                btntextcolor={props.options.color.btnText}
              >
                {parse(props.content.btnText)}
              </Button>
            </>
          )}
        </div>
      </ContentWrapper>
    </StyledWhatWeDo>
  );
};

export default WhatWeDo;

const StyledWhatWeDo = styled.section<any>`
  background-color: ${({ color }) => color.background};

  padding: 64px 0;
  @media only screen and (min-width: 970px) {
    padding: 80px 0;
  }
  @media only screen and (min-width: 1200px) {
    padding: 100px 0;
  }
  @media only screen and (min-width: 1600px) {
    padding: 120px 0;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 16px;
  }
  .small {
    max-width: 770px;
    margin: 0 auto;
    text-align: center;
    .statement {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ color }) => color.statement};
      margin-bottom: 32px;
    }
  }
`;

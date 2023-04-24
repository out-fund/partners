import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import { ContentWrapper } from "./../Atoms";

const WhatWeDo: React.FC = (props: any) => {
  return (
    <StyledWhatWeDo {...props.options}>
      <ContentWrapper>
        <div className="small">
          <h2>{parse(props.content.title)}</h2>
          <p>{parse(props.content.description)}</p>
          {props.content.statement && (
            <p className="statement">{parse(props.content.statement)}</p>
          )}
        </div>
      </ContentWrapper>
    </StyledWhatWeDo>
  );
};

export default WhatWeDo;

const StyledWhatWeDo = styled.section<any>`
  background-color: ${({ color }) => color.section};
  padding: 64px 0;

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
    }
  }
`;

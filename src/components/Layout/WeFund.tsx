import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import { ContentWrapper, Button } from "./../Atoms";

const WeFund: React.FC = (props: any) => {
  return (
    <StyledWeFund {...props.options}>
      <ContentWrapper>
        <div className="content">
          <h2>{parse(props.content.title)}</h2>
          <ul>
            {props.content.list.map((item: any, index: any) => (
              <li key={index}>{parse(item)}</li>
            ))}
          </ul>

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
    </StyledWeFund>
  );
};

export default WeFund;

const StyledWeFund = styled.section<any>`
  background-color: ${({ color }) => color.background};
  padding: 64px 0;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 8px;
  }
  ul {
    margin-bottom: 16px;
  }
`;

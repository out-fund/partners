import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import { ContentWrapper, Button } from "./../Atoms";
import RepaySVG from "../../images/RepaySVG";

const Repay: React.FC = (props: any) => {
  return (
    <StyledRepay {...props.options}>
      <SmallContentWrapper>
        <Content>
          <div className="left">
            <RepaySVG line={props.options.color.graphLine} />
          </div>
          <div className="right">
            <h2>{parse(props.content.title)}</h2>
            <p>{parse(props.content.description)}</p>
            {/* <button
              style={{
                color: props.options.color.btnText,
                backgroundColor: props.options.color.btnBG,
              }}
            >
              {parse(props.content.btnText)}
            </button> */}
            <Button
              btnBgColor={props.options.color.btnBG}
              btnTextColor={props.options.color.btnText}
            >
              {parse(props.content.btnText)}
            </Button>
          </div>
        </Content>
      </SmallContentWrapper>
    </StyledRepay>
  );
};

export default Repay;

const StyledRepay = styled.section<any>`
  background-color: ${({ color }) => color.background};
  padding: 64px 0;
`;
const SmallContentWrapper = styled(ContentWrapper)<any>`
  max-width: 970px;
`;

const Content = styled.div<any>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 270fr;
    gap: 80px;
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
`;

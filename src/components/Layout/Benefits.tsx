import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import { ContentWrapper } from "./../Atoms";

const Benefits: React.FC = (props: any) => {
  // console.log(props);
  return (
    <StyledBenefits {...props.options}>
      <ContentWrapper>
        <div className="grid">
          {props.content.columns.map((item: any, index: any) => (
            <div className="column" key={index}>
              <div className="icon">
                <span
                  className="material-icons-round"
                  style={{
                    fontSize: "48px",
                    color: props.options.color.icons,
                  }}
                >
                  {item.icon}
                </span>
              </div>
              <h3>{parse(item.title)}</h3>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </StyledBenefits>
  );
};

export default Benefits;

const StyledBenefits = styled.section<any>`
  padding: 32px 0;
  background-color: ${({ color }) => color.section};

  h3 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.2;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;

    @media only screen and (min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
  }
  .column {
    /* background-color: #fff; */
    text-align: center;
  }
`;

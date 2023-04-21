import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import SourcesSVG from "../../images/SourcesSVG";
import OffersSVG from "../../images/OffersSVG";
import RepaySVG from "../../images/RepaySVG";

import { ContentWrapper } from "./../Atoms";

const HowItWorks: React.FC = (props: any) => {
  console.log(props);

  const whichSVG = (index: number) => {
    if (index === 0) return <SourcesSVG />;
    if (index === 1)
      return (
        <OffersSVG
          bg={props.options.color.cardBackground}
          elements={props.options.color.cardElements}
          text={props.options.color.cardText}
        />
      );
    if (index === 2) return <RepaySVG line={props.options.color.graphLine} />;
  };

  return (
    <StyledHowItWorks {...props.options}>
      <ContentWrapper>
        <div className="intro">
          <h2>{parse(props.content.title)}</h2>
          <p>{parse(props.content.description)}</p>
        </div>
        <div className="grid">
          {props.content.columns.map((item: any, index: any) => (
            <div className="column" key={index}>
              <div className="number">{index + 1}</div>
              <h3>{parse(item.title)}</h3>
              <p>{parse(item.description)}</p>
              {props.options.showImages && (
                <div className="illustration">{whichSVG(index)}</div>
              )}
            </div>
          ))}
        </div>
      </ContentWrapper>
    </StyledHowItWorks>
  );
};

export default HowItWorks;

const StyledHowItWorks = styled.section<any>`
  padding: 32px 0;
  background-color: ${({ color }) => color.section};

  .intro {
    text-align: center;
    margin-bottom: 40px;
    h2 {
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    p {
      margin: 0;
    }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3 {
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 16px;
      line-height: 1.2;
    }
    .illustration {
      margin-top: 16px;
    }
    p {
      margin-bottom: 16px;
    }
  }
  .number {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ color }) => color.numbers};

    border-radius: 50%;
    font-weight: 800;
    color: #fff;
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

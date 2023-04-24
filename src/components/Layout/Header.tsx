import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import { Button, ContentWrapper } from "./../Atoms";
import CardSVG from "../../images/CardSVG";

const svgDir = require.context("!@svgr/webpack!../../images/partnerLogos/");

const Header: React.FC = (props: any) => {
  // console.log(props);

  let CardLogo;
  if (props.options.showCardLogo) {
    CardLogo = svgDir(`./${props.content?.cardLogo}`).default;
  }

  return (
    <StyledHeader {...props.options}>
      <ContentWrapper>
        <Container>
          <div className="left">
            <h1>
              {parse(props.content.title.firstLine)}
              {props.content.title.secondLine && (
                <>
                  <br />
                  <span>{parse(props.content.title.secondLine)}</span>
                </>
              )}
            </h1>
            <p>{parse(props.content.description)}</p>
            {/* @ts-expect-error Server Component */}
            <Button
              btnbgcolor={props.options.color.btnBG}
              btntextcolor={props.options.color.btnText}
            >
              {parse(props.content.btnText)}
            </Button>
          </div>

          <div className="right">
            <div className="card">
              {props.options.showCardLogo && <CardLogo className="cardLogo" />}
              <CardSVG
                bg={props.options.color.cardBackground}
                elements={props.options.color.cardElements}
                text={props.options.color.cardText}
              />
            </div>
          </div>
        </Container>
      </ContentWrapper>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header<any>`
  background-color: ${({ color }) => color.background};

  padding: 64px 0;
  @media only screen and (min-width: 970px) {
    padding: 80px 0;
  }
  @media only screen and (min-width: 1200px) {
    padding: 120px 0;
  }
  @media only screen and (min-width: 1600px) {
    padding: 200px 0;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 16px;
    span {
      color: ${({ color }) => color.secondLine};
    }
  }

  p {
    margin-bottom: 32px;
    /* font-size: 1.1rem; */
  }
`;

const Container = styled.div<any>`
  /* background-color: #ffa; */
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;

  @media only screen and (min-width: 800px) {
    grid-template-columns: 340fr 1fr;
    gap: 80px;
  }

  .right {
    /* background-color: #fff; */
    display: flex;
    justify-content: center;

    .card {
      position: relative;
    }
    .cardLogo {
      position: absolute;
      top: 62px;
      left: 50px;
      transform: rotate(10deg);
      max-width: 120px;
      max-height: 27px;
    }
  }
`;

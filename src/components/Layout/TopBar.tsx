import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "./../Atoms";

const svgDir = require.context("!@svgr/webpack!../../images/partnerLogos/");

const TopBar: React.FC = (props: any) => {
  let OutfundLogo;
  let PartnerLogo;
  if (props.content?.outfundLogo) {
    OutfundLogo = svgDir(`./${props.content?.outfundLogo}`).default;
  }
  if (props.content?.partnerLogo) {
    PartnerLogo = svgDir(`./${props.content?.partnerLogo}`).default;
  }

  // console.log(props);
  return (
    <StyledTopBar {...props}>
      <ContentWrapper>
        <div className="logo">
          {props.content?.outfundLogo && (
            <div className="ofl">
              <OutfundLogo />
            </div>
          )}

          {props.content?.outfundLogo && props.content?.partnerLogo && (
            <div>+</div>
          )}

          {props.content?.partnerLogo && (
            <div className="ptl">
              <PartnerLogo />
            </div>
          )}
        </div>
      </ContentWrapper>
    </StyledTopBar>
  );
};

const StyledTopBar = styled.nav<any>`
  background-color: ${({ options }) => options.color.background};
  height: ${({ options }) => options.topBarHeight};
  display: flex;
  align-items: center;
  width: 100%;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  box-shadow: rgba(5, 24, 64, 0.07) 0px 17px 33px,
    rgba(5, 24, 64, 0.05) 0px 3.8002px 13.45px,
    rgba(5, 24, 64, 0.04) 0px 1.07885px 7.14579px;

  .logo {
    display: flex;
    gap: 24px;
    align-items: center;
    svg {
      height: ${({ options }) => options.logoHeight};
    }
  }
  .ofl svg {
    height: calc(${({ options }) => options.logoHeight} * 0.8);
  }
`;

export default TopBar;

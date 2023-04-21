import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "./../Atoms";

const svgDir = require.context("!@svgr/webpack!../../images/partnerLogos/");

const TopBar: React.FC = (props: any) => {
  const PartnerLogo = svgDir(`./${props.content?.partnerLogo}`).default;
  // console.log(props);
  return (
    <StyledTopBar
      topBarHeight={props.options.topBarHeight}
      bgc={props.options.color.background}
    >
      <ContentWrapper>
        <Logo h={props.options.logoHeight}>
          <PartnerLogo />
        </Logo>
      </ContentWrapper>
    </StyledTopBar>
  );
};

const StyledTopBar = styled.nav<{ topBarHeight: string; bgc: string }>`
  background-color: ${({ bgc }) => bgc};
  height: ${({ topBarHeight }) => topBarHeight};
  display: flex;
  align-items: center;
  width: 100%;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

const Logo = styled.div<{ h: string }>`
  display: block;

  svg {
    height: ${({ h }) => h};
  }
`;

export default TopBar;

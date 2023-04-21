import React from "react";
import styled, { css } from "styled-components/macro";
// import { PageProps } from "gatsby";

interface TopBarProps {
  content?: {
    partnerLogo: string;
  };
  options?: {
    height: string;
    color: {
      background: string;
    };
  };
}

const svgDir = require.context("!@svgr/webpack!../../images/partnerLogos/");

const TopBar: React.FC = (props: TopBarProps) => {
  const PartnerLogo = svgDir(`./${props.content?.partnerLogo}`).default;
  // console.log(props);

  return (
    <StyledTopBar {...props}>
      <Logo {...props}>
        <PartnerLogo />
      </Logo>
    </StyledTopBar>
  );
};

const StyledTopBar = styled.nav<TopBarProps>`
  display: block;
  height: ${(p) => p.options?.height};
  background-color: ${(p) => p.options?.color.background};
`;

const Logo = styled.div<TopBarProps>`
  display: block;
  max-height: 66%;
  height: ${(p) => p.options?.height};
  svg {
    max-height: 100%;
  }
`;

export default TopBar;

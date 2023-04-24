import React from "react";
import styled from "styled-components";

import { ContentWrapper } from "./../Atoms";

const Footer: React.FC = (props: any) => {
  return (
    <StyledFooter {...props.options}>
      <ContentWrapper>
        <div className="content">
          <div className="power">
            Powered By <a href="https://out.fund/">Outfund</a>
          </div>
          <div className="policy">
            <a href="https://out.fund/legal/cookie-policy/">Cookie Policy</a>
            <a href="https://out.fund/legal/privacy-policy/">Privacy Policy</a>
          </div>
        </div>
      </ContentWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.section<any>`
  background-color: ${({ color }) => color.background};
  padding: 16px 0;
  font-size: 14px;
  a {
    text-decoration: underline;
  }
  .content {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    div {
      opacity: 0.7;
    }
    .policy {
      display: flex;
      gap: 24px;
    }
  }
`;

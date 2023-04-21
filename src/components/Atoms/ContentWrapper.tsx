import React from "react";
import styled from "styled-components";

const ContentWrapper = (props: any) => {
  // console.log(props);
  return <StyledContentWrapper>{props.children}</StyledContentWrapper>;
};

export default ContentWrapper;

const StyledContentWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
`;

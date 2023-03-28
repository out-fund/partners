// import * as React from "react";
import { PageProps } from "gatsby";

import React from "react";

const Header: React.FC<PageProps> = (props: any) => {
  console.log(props);
  return (
    <>
      <h1>test{props.title}</h1>
    </>
  );
};

export default Header;

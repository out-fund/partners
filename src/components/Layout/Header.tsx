import React from "react";
import { PageProps } from "gatsby";
import parse from "html-react-parser";

const Header: React.FC<PageProps> = (props: any) => {
  return (
    <header>
      <h1>{parse(props.content.title)}</h1>
      <p>{parse(props.content.description)}</p>
      <button>{parse(props.content.btnText)}</button>
    </header>
  );
};

export default Header;

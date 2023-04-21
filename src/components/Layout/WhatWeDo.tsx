import React from "react";
import { PageProps } from "gatsby";
import parse from "html-react-parser";

const WhatWeDo: React.FC<PageProps> = (props: any) => {
  return (
    <section>
      <h2>{parse(props.content.title)}</h2>
      <p>{parse(props.content.description)}</p>
      {props.content.statement && <p>{parse(props.content.statement)}</p>}
    </section>
  );
};

export default WhatWeDo;

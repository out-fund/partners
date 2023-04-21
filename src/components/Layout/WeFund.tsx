import React from "react";
import { PageProps } from "gatsby";
import parse from "html-react-parser";

const WeFund: React.FC<PageProps> = (props: any) => {
  return (
    <section>
      <h2>{parse(props.content.title)}</h2>
      <ul>
        {props.content.list.map((item: any, index: any) => (
          <li key={index}>{parse(item)}</li>
        ))}
      </ul>
      <button
        style={{
          color: props.options.color.btnText,
          backgroundColor: props.options.color.btnBG,
        }}
      >
        {parse(props.content.btnText)}
      </button>
    </section>
  );
};

export default WeFund;

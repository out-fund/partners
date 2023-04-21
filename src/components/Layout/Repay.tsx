import React from "react";
import { PageProps } from "gatsby";
import parse from "html-react-parser";

const Repay: React.FC<PageProps> = (props: any) => {
  return (
    <section>
      <h2>{parse(props.content.title)}</h2>
      <p>{parse(props.content.description)}</p>
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

export default Repay;

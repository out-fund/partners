import React from "react";
import { PageProps } from "gatsby";
import parse from "html-react-parser";

const HowItWorks: React.FC<PageProps> = (props: any) => {
  return (
    <section>
      <h2>{parse(props.content.title)}</h2>
      <p>{parse(props.content.description)}</p>
      <div>
        {props.content.columns.map((item: any, index: any) => (
          <div key={index}>
            <h3>{parse(item.title)}</h3>
            <p>{parse(item.description)}</p>
            {props.options.showImages && <div>Image</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

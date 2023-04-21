import React from "react";
import { PageProps } from "gatsby";
import parse from "html-react-parser";

const Benefits: React.FC<PageProps> = (props: any) => {
  return (
    <section>
      {props.content.columns.map((item: any, index: any) => (
        <div key={index}>
          <div className="icon">
            <span
              className="material-icons-round"
              style={{
                fontSize: "48px",
                color: props.options.color.icons,
              }}
            >
              {item.icon}
            </span>
          </div>
          <h2>{parse(item.title)}</h2>
        </div>
      ))}
    </section>
  );
};

export default Benefits;

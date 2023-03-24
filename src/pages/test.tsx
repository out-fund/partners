// import * as React from "react";
import { PageProps } from "gatsby";

// const TestPage: React.FC<PageProps> = () => {
//   return <main>test</main>;
// };

// export default TestPage;

import React from "react";

const TestPage: React.FC<PageProps> = (props) => {
  console.log(props.location);
  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

export default TestPage;

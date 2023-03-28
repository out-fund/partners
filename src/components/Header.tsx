import React from "react";
import { PageProps } from "gatsby";

// interface TestProps {
//   text: string;
// }

// const Test: React.FC<TestProps> = ({ text }) => {
//   return <main>{text}</main>;
// };

// export default Test;

const Header: React.FC<PageProps> = (props: any) => {
  console.log(props);
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
};

export default Header;

import * as React from "react";

interface TestProps {
  text: string;
}

const Test: React.FC<TestProps> = ({ text }) => {
  return <main>{text}</main>;
};

export default Test;

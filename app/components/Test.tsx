interface TestProps {
  text: string;
}

const Test = ({ text }: TestProps) => {
  return <div>test = {text}</div>;
};

export default Test;

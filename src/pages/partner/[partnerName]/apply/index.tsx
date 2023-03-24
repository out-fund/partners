import React from "react";
import { PageProps } from "gatsby";

const ApplyPage: React.FC<PageProps> = ({ params }) => {
  const param = params[`partnerName`].split("/")[0];

  console.log(params);

  // const ApplyPage: React.FC<PageProps> = (props) => {
  //   console.log(props.location);
  //   const uri = props.location.pathname.split("/")[1];
  //   const name = decodeURI(uri);
  return (
    <div>
      <h1>Apply page</h1>
      <h2>test = {param}</h2>
    </div>
  );
};

export default ApplyPage;

// export default function ApplyPage({ params }) {
//   const param = params[`awsKey`];

//   // When visiting a route like `image/hello/world`,
//   // the value of `param` is `hello/world`.
//   return (
//     <div>
//       <h1>Apply</h1>
//       <h2>test = {param}</h2>
//     </div>
//   );
// }

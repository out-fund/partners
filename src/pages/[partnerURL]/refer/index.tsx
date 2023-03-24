// import React from "react";
// import SEO from "./../../components/SEO";
// import type { PageProps } from "gatsby";

// export const Head = (props: any) => {
//   // console.log(props);
//   const uri = props.location.pathname.split("/")[1];
//   const name = decodeURI(uri);
//   return <SEO partnerName={name} />;
// };

// const PartnerPage: React.FC<PageProps> = (props) => {
//   // console.log(props.location);
//   const uri = props.location.pathname.split("/")[1];
//   const name = decodeURI(uri);
//   return (
//     <div>
//       <h1>test = {name}</h1>
//     </div>
//   );
// };

// export default PartnerPage;

import React from "react";
import type { PageProps } from "gatsby";

const RefereForm: React.FC<PageProps> = ({ params }) => {
  const param = params[`partnerURL`];

  // When visiting a route like `image/hello/world`,
  // the value of `param` is `hello/world`.
  return (
    <div>
      <h1>Refer</h1>
      <h2>test = {param}</h2>
    </div>
  );
};

export default RefereForm;

import React from "react";
import styled from "styled-components";
import type { PageProps } from "gatsby";
import { Formik } from "formik";
import * as yup from "yup";

import { ChakraProvider } from "@chakra-ui/react";
import { Input } from "./../../../../components/Form";
import { ContentWrapper, Button } from "./../../../../components/Atoms";

const partnerDir = require.context("./../../../partner/");

const ApplyPage: React.FC<PageProps> = (props) => {
  // const partnerName = params[`partnerName`].split("/")[0];

  const pageVars = partnerDir(`./${props.params.partnerName}.mdx`);
  const svgDir = require.context(
    "!@svgr/webpack!./../../../../images/partnerLogos/"
  );

  const PartnerLogo = svgDir(`./${pageVars.variables.partnerLogo}`).default;
  const OutfundLogo = svgDir(`./${pageVars.variables.outfundLogo}`).default;
  // console.log(pageVars.variables);

  // console.log(props);
  return (
    <StyledApplyPage {...pageVars.variables}>
      <ChakraProvider>
        <div className="topbar">
          {/* <div className="logo">
            <PartnerLogo />
          </div> */}
          <div className="logo">
            {pageVars.variables.outfundLogo && (
              <div className="ofl">
                <OutfundLogo />
              </div>
            )}

            {pageVars.variables.outfundLogo &&
              pageVars.variables.partnerLogo && <div>+</div>}

            {pageVars.variables.partnerLogo && (
              <div className="ptl">
                <PartnerLogo />
              </div>
            )}
          </div>
        </div>
        <ContentWrapper>
          {/* <h1>test = {props.params.partnerName}</h1> */}

          <div className="content">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
              }}
              validationSchema={yup.object({
                firstName: yup
                  .string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                lastName: yup
                  .string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: yup
                  .string()
                  .email("Invalid email address")
                  .required("Required"),
                phone: yup
                  .string()
                  .max(20, "Must be 20 numbers or less")
                  .required("Required"),
                website: yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                  <div className="firstLast">
                    <Input label="First Name" name="firstName" type="text" />

                    <Input label="Last Name" name="lastName" type="text" />
                  </div>

                  <Input label="Business email" name="email" type="email" />
                  <Input
                    label="Business phone number"
                    name="phone"
                    type="tel"
                  />
                  <Input label="Business website" name="website" type="text" />
                  {/* @ts-expect-error Server Component */}
                  <Button
                    btnbgcolor={pageVars.variables.color.btnBG}
                    btntextcolor={pageVars.variables.color.btnText}
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </ContentWrapper>
      </ChakraProvider>
    </StyledApplyPage>
  );
};

export default ApplyPage;

const StyledApplyPage = styled.div<any>`
  background-color: #fafafa;
  min-height: 101vh;
  .topbar {
    background-color: ${({ topBar }) => topBar.background};
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ topBar }) => topBar.height};
    box-shadow: rgba(5, 24, 64, 0.07) 0px 17px 33px,
      rgba(5, 24, 64, 0.05) 0px 3.8002px 13.45px,
      rgba(5, 24, 64, 0.04) 0px 1.07885px 7.14579px;
  }
  .logo {
    display: flex;
    gap: 24px;
    svg {
      height: ${({ topBar }) => topBar.logoHeight};
    }
  }
  .content {
    max-width: 600px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 64px;
    .firstLast {
      display: flex;
      gap: 24px;
    }
  }
`;

// import React from "react";
// import { PageProps } from "gatsby";

// const ApplyPage: React.FC<PageProps> = ({ params }) => {
//   const param = params[`partnerName`].split("/")[0];

//   console.log(params);

//   // const ApplyPage: React.FC<PageProps> = (props) => {
//   //   console.log(props.location);
//   //   const uri = props.location.pathname.split("/")[1];
//   //   const name = decodeURI(uri);
//   return (
//     <div>
//       <h1>Apply page</h1>
//       <h2>test = {param}</h2>
//     </div>
//   );
// };

// export default ApplyPage;

//---------------------------------

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

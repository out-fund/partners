import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import type { PageProps, HeadFC } from "gatsby";
import { Formik } from "formik";
import * as yup from "yup";

import { ChakraProvider } from "@chakra-ui/react";

import { Input } from "./../../../components/Form";
import { ContentWrapper, Button } from "./../../../components/Atoms";

const svgDir = require.context(
  "!@svgr/webpack!./../../../images/partnerLogos/"
);

const OutfundLogo = svgDir(`./outfund-dark.svg`).default;

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const Head: HeadFC = () => (
  <>
    <title>Refer a lead to Outfund</title>
  </>
);

const RefereForm: React.FC<PageProps> = ({ params }) => {
  return (
    <StyledRefereForm>
      <ChakraProvider>
        <div className="topbar">
          <div className="logo">
            <OutfundLogo />
            <div>+</div>
            <div className="partner">
              <h1>{params.partnerURL}</h1>
            </div>
          </div>
        </div>
        <ContentWrapper>
          <div className="content">
            <h2>Refer a lead to Outfund</h2>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                website: "",
                country: "",
                amr: "",
                referUrl: params.partnerURL,
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
                country: yup
                  .string()
                  .max(56, "Must be 20 numbers or less")
                  .required("Required"),
                amr: yup.number().required("Required"),
              })}
              onSubmit={(values, actions) => {
                fetch("/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: encode({
                    "form-name": "referForm",
                    ...values,
                  }),
                })
                  .then(() => {
                    navigate("/refer-successful/");
                  })
                  .catch(() => {
                    alert("Error");
                  })
                  .finally(() => actions.setSubmitting(false));
              }}
            >
              {(formik) => (
                <form
                  name="referForm"
                  onSubmit={formik.handleSubmit}
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                >
                  <div className="hidden">
                    <input type="hidden" name="form-name" value="referForm" />
                  </div>
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
                  <Input
                    label="Incorporation Country"
                    name="country"
                    type="text"
                  />
                  <Input
                    label="Average Monthly Revenue (in local currency)"
                    name="amr"
                    type="number"
                  />
                  <div className="hidden">
                    <label>
                      Dontt fill this out if youtre human:{" "}
                      <input name="bot-field" />
                    </label>
                  </div>
                  <div className="hidden">
                    <input name="referUrl" value={params.partnerURL} readOnly />
                  </div>
                  {/* @ts-expect-error Server Component */}
                  <Button
                    btnbgcolor="#003EDB"
                    btntextcolor="#ffffff"
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
    </StyledRefereForm>
  );
};

export default RefereForm;

const StyledRefereForm = styled.div<any>`
  .hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .topbar {
    background-color: #f2f6fa;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .logo {
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;
    height: 64px;
    /* padding-bottom: 64px; */
    h1 {
      font-size: 2.5rem;
      font-weight: 600;
    }
    svg {
      height: 32px;
    }
  }
  .content {
    max-width: 600px;
    margin: 0 auto;
    margin-top: 32px;
    h2 {
      font-size: 2rem;
      margin-bottom: 32px;
      text-align: center;
    }
  }
  .firstLast {
    display: flex;
    gap: 24px;
  }
`;

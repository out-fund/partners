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

import {
  ChakraProvider,
  Flex,
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const RefereForm: React.FC<PageProps> = ({ params }) => {
  const param = params[`partnerURL`];

  // When visiting a route like `image/hello/world`,
  // the value of `param` is `hello/world`.

  return (
    <div>
      <h1>Refer</h1>
      <h2>test = {param}</h2>
      <hr />

      {/* <ChakraProvider> */}
      {/* <Box w={64}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              companyName: "",
              averageMonthlyRevenue: "",
              countryOfIncorporation: "",
            }}
            onSubmit={(values) => {
              // alert(JSON.stringify(values, null, 2));
              console.log(values);
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                    />
                  </FormControl>

                  <Button type="submit" colorScheme="purple" width="full">
                    Login
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box> */}
      {/* <Flex>
          <Box>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                companyName: "",
                averageMonthlyRevenue: "",
                countryOfIncorporation: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ hanldeSubmit, errors, touched }) => (
                <form onSubmit={hanldeSubmit}>
                  <VStack spacing={4} align="flex-start">
                    <FormControl>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        // as={Input}
                        id="email"
                        name="email"
                        type="email"
                        variant="filled"
                      />
                    </FormControl>
                  </VStack>
                </form>
              )}
            </Formik>
          </Box>
        </Flex> */}
      {/* <Flex>
          <Box w={64}>
            <Formik
              initialValues={{
                email: "",
                password: "",
                rememberMe: false,
              }}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4} align="flex-start">
                    <FormControl>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        variant="filled"
                      />
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.password && touched.password}
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type="password"
                        variant="filled"
                        validate={(value) => {
                          let error;

                          if (value.length < 6) {
                            error =
                              "Password must contain at least 6 characters";
                          }

                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <Checkbox
                      id="rememberMe"
                      name="rememberMe"
                      colorScheme="purple"
                    >
                      Remember me?
                    </Checkbox>
                    <Button type="submit" colorScheme="purple" width="full">
                      Login
                    </Button>
                  </VStack>
                </form>
              )}
            </Formik>
          </Box>
        </Flex> */}
      {/* </ChakraProvider> */}
    </div>
  );
};

export default RefereForm;

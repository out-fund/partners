import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HeadFC, PageProps } from "gatsby";
import { ChakraProvider } from "@chakra-ui/react";

export const Head: HeadFC = () => <title>Page not found</title>;

const NotFoundPage: React.FC<PageProps> = () => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return (
      <ChakraProvider>
        <Main>
          <h1>Loading...</h1>
        </Main>
      </ChakraProvider>
    );
  }
  return (
    <ChakraProvider>
      <Main>
        <h1>Page not found</h1>
        <p>Sorry, we couldn’t find the page you were looking for.</p>
      </Main>
    </ChakraProvider>
  );
};

export default NotFoundPage;

const Main = styled.main`
  text-align: center;
  padding-top: 100px;
  h1 {
    font-size: 24px;
    margin-bottom: 32px;
    font-weight: bold;
  }
`;

// import React, { useEffect, useState } from 'react';

// export default ()=>{
//   const [isMount, setMount] = useState(false);

//   useEffect(() => {
//         setMount(true);
//   },[])

//   if(!isMount) {
//      return(
//         <div>loading</div>
//      )
//   }

//   return (
//      <div>Page Not Found</div>
//   )

// }

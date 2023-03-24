import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

export const Head: HeadFC = () => <title>Page not found</title>;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <p>Sorry, we couldn’t find the page you were looking for.</p>
    </main>
  );
};

export default NotFoundPage;

import React from "react";

interface SEOProps {
  title: string;
  // description: string;
}

export const SEO = ({ title }: SEOProps) => {
  const SEO = {
    title: `${title} + Outfund`,
    description: "Apply for funding with our partner Outfund today.",
  };

  return (
    <>
      <title>{SEO.title}</title>
      <meta name="description" content={SEO.description} />
    </>
  );
};

export default SEO;

import React from "react";

interface SEOProps {
  partnerName: string;
}

export const SEO = ({ partnerName }: SEOProps) => {
  const SEO = {
    title: `Outfund + ${partnerName}`,
    description: "Apply for funding",
  };

  return (
    <>
      <title>{SEO.title}</title>
      <meta name="description" content={SEO.description} />
    </>
  );
};

export default SEO;

import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => {
  let seoTitle = title || 'Best-Wines';
  let seoDesc = description || 'Buy the best wines from Europe';

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${seoTitle} | Best-Wines`}>
      <meta name="description" content={seoDesc}></meta>
    </Helmet>
  );
};

export default SEO;

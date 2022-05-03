import React from 'react';

const Banner = (props) => {
  const { imageSrc, imageAlt } = props;
  return <img src={imageSrc} alt={imageAlt} />;
};

export default Banner;

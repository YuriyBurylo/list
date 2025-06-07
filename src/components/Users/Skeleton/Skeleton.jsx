import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="4" rx="3" ry="3" width="143" height="21" /> 
    <rect x="48" y="33" rx="3" ry="3" width="184" height="8" /> 
    <circle cx="20" cy="20" r="20" /> 
    <rect x="240" y="6" rx="0" ry="0" width="33" height="29" />
  </ContentLoader>
);

export default Skeleton;


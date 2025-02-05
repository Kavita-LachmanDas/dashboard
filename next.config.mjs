
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['cdn.sanity.io'], // Sanity images allow ho jayengi
//     },
//   };
  
//   export default nextConfig;
  











/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: 'cdn.sanity.io',
        },
      ],
    },
    env: {
      SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID || '3s3nfbne', // Add your Sanity project ID here
      SANITY_DATASET: process.env.SANITY_DATASET || 'production', // Add your dataset name here
      SANITY_TOKEN: process.env.SANITY_TOKEN || 'skwUvYWOBrswXgj39MexAD4klzxzmL2tOdUqRfoRWpYJOhqwdi82CeNk1jK8c9g7t8YETkIMEMMkDAeakFObG5vEEXnA8ITRZsboclber83SQH3vW2Rro3i37LCycJZRIhhIOk2E1MQWzSCiyzOL0zOrL9yyDyoCSI08jJ5IRKMVUwteslpi', // Add your Sanity token here
    },
  };
  
  export default nextConfig;
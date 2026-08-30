/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/project-corndoctor.html',
        destination: '/projects/corn-disease-doctor',
        permanent: true,
      },
      {
        source: '/project-dreamtalk.html',
        destination: '/projects/dreamtalk',
        permanent: true,
      },
      {
        source: '/project-gigitaja.html',
        destination: '/projects/gigitaja',
        permanent: true,
      },
      {
        source: '/project-danain.html',
        destination: '/projects/danain',
        permanent: true,
      },
      {
        source: '/project-recommender.html',
        destination: '/projects/movie-recommendation-system',
        permanent: true,
      },
      {
        source: '/project-research.html',
        destination: '/#research', // Research has no dedicated page in new design, redirecting to section
        permanent: true,
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;

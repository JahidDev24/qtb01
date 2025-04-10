/* eslint-disable import/no-anonymous-default-export */
export default {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quantechbit.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

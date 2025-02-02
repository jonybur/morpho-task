/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset',
      generator: {
        filename: 'static/media/[hash][ext]',
      },
    });
    return config;
  },
};

export default nextConfig;

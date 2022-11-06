/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      include: [Path.join(__dirname, "src/assets")],
      loader: "file-loader?name=assets/[name].[ext]"
    });

    return config;
  }
}

module.exports = nextConfig

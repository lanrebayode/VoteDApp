/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lanre-nft-marketplace.infura-ipfs.io", "infura-ipfs.io"],
  },
  env: {
    PRIVATEKEY: process.env.PRIVATEKEY,
  },
};

module.exports = nextConfig;

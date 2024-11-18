import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    EMAIL_URL: process.env.EMAIL_URL,
    EMAIL_API_KEY: process.env.EMAIL_API_KEY,
    EMAIL_SENDER_EMAIL: process.env.EMAIL_SENDER_EMAIL,
    EMAIL_RECIVER_EMAIL: process.env.EMAIL_RECIVER_EMAIL,
  }
}

export default nextConfig;

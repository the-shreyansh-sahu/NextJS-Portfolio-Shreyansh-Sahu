/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    env: {
      RESEND_API_KEY: process.env.RESEND_API_KEY || 're_123456789', // replace with a placeholder if needed
      FROM_EMAIL: process.env.FROM_EMAIL || 'thesahu@shreyanshsahu.com',
    },
  };
  
  

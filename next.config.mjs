/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "blogger.googleusercontent.com",
            },
        ],
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              port: '',
              pathname: '/dhb9rdaoc/image/upload/v1692846188/bvggzs6850dkbzjuazh1.jpg',
            },
          ],
    }
}

module.exports = nextConfig

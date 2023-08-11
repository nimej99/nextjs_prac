/** @type {import('next').NextConfig} */

const API_KEY = process.env.APi_KEY;

const nextConfig = {

  output: 'export',

  // async redirects(){
  //   return [
  //     {
  //       source:'/api/movies/:path*',
  //       destination:'/api/보여줄주소지롱/:path*',
  //       permanent:false,
  //     },
  //   ];
  // },

  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig

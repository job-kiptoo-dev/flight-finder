import 'dotenv/config';

export default {
  expo: {
    name: 'FlightApp',
    slug: 'flight-app',
    scheme: 'flightapp',
    extra: {
      API_KEY: process.env.API_KEY,
      API_HOST: process.env.API_HOST,
    },
  },
};


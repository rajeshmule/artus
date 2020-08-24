// export const BASE_URL = 'https://conduit.productionready.io/api';
// export const BASE_URL = 'https://artus-api.herokuapp.com/api/v1';
const prod = {
  url: {
    API_URL: "https://artus-api.herokuapp.com/api/v1"
  }
};

const dev = {
  url: {
    API_URL: "https://conduit.productionready.io/api"
  }
};
// const dev = {
//   url: {
//     API_URL: "http://localhost:3000/api/v1"
//   }
// };
export const config = process.env.NODE_ENV === "development" ? dev : prod;
//export const config = process.env.NODE_ENV === "development" ? dev : dev;

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
export const config = process.env.NODE_ENV === "development" ? dev : prod;

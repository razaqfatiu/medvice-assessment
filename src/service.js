import axios from 'axios';

// create one instance of axios and all CRUD opeerations should be done by the
// Define a way of getting the token rather than passing token on every request
// Dynamically pass the token in the header object and remove the line that checks for token

const getAuthToken = () => {
  // get token
  const token = '';
  return token || '';
};

const options = {
  baseURL: 'https://63c15b437165626718791c6c.mockapi.io/challenge/api/',
  headers: {
    Accept: 'application/json',
    'X-Request-ID': Math.floor(Math.random() * 1000000),
    'Content-Type': 'application/json',
  },
};

const request = axios.create(options);

request.interceptors.request.use(
  async (config) => {
    const token = await getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const errorHandler = (error) => {
  const { request, response } = error;
  if (response) {
    const { message } = response?.data || '';
    const status = response?.status || 500;
    return {
      message,
      status,
    };
  } else if (request) {
    //request sent but no response received
    return {
      message: 'server time out',
      status: 503,
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    return { message: 'Internal Server Error' };
  }
};

export const Service = {
  get: async (url, params) => {
    try {
      const res = await request.get(url, {
        params,
      });

      return res?.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  post: async (url, data) => {
    try {
      const res = await request.post(url, {
        data,
      });
      return res?.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
};

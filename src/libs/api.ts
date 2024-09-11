import axios from "axios";

// Creating axios instance
const apiClient = axios.create({
  // Fetching API url from env variables
  baseURL: process.env.STRAPI_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Axios interceptor for adding the authorization token
apiClient.interceptors.request.use(
  (config) => {
    // Access the token from the environment variable
    const token = process.env.STRAPI_API_TOKEN;

    if (token) {
      // Add the token to the Authorization header if it exists
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const fetchArticles = async () => {
  const response = await apiClient.get("/articles");
  return response.data;
};

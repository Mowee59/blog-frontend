import axios, { AxiosError, AxiosInstance } from 'axios';

const createApiClient = (baseURL: string): AxiosInstance => {
  const apiClient = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Response interceptor for API calls
  apiClient.interceptors.response.use(
    (response) => response, // Return the response unchanged for successful requests
    (error: AxiosError) => {
      // Handle the error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("API Error Response:", error.response.data);
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("API Error Request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("API Error Message:", error.message);
      }
      console.error("API Error Config:", error.config);

      // You can perform additional actions here, like showing a notification

      // Rethrow the error to be handled by the calling function if needed
      return Promise.reject(error);
    }
  );

  return apiClient;
};

// Create server-side API client
export const apiServer = createApiClient(`${process.env.STRAPI_URL}/api` || '');

// Create client-side API client
export const apiClient = createApiClient('/api');
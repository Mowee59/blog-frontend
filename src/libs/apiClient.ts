// import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// // Remove or comment out the following line
// // import { handleApiError } from './errorHandling';

// class ApiClient {
//   private client: AxiosInstance;

//   constructor(baseURL: string) {
//     this.client = axios.create({ baseURL });
//   }

//   async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     try {
//       const response = await this.client.get<T>(url, config);
//       return response.data;
//     } catch (error) {
//       // Remove the handleApiError function call
//       throw error;
//     }
//   }

//   // Add other methods (post, put, delete) as needed
// }

// export const serverApi = new ApiClient(process.env.STRAPI_URL || '');
// export const clientApi = new ApiClient('/api');

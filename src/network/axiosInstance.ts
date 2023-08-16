// axiosInstance.ts
import axios from "axios";
import { tmdbBaseUrl } from "./endpoints";
import { env } from "../environment";

const createAxiosInstance = (baseURL: string) => {
  const newInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${env.ACCESS_TOKEN}`,
    },
  });

  // interceptors code here if needed

  return newInstance;
};

export const tmdbService = createAxiosInstance(tmdbBaseUrl);

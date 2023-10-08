import { getAuthCookie } from "@/app/actions";
import { logOut } from "@/app/utils/auth";
import axios from "axios";

export default async function api() {
  const token = await getAuthCookie();

  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        logOut();

        return Promise.reject();
      }

      return Promise.reject(error);
    }
  );

  return api;
}

const api2 = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  withCredentials: true,
});

export const fetchCSRFToken = async () => {
  try {
    const response = await api2.get("/sanctum/csrf-cookie");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch CSRF token:", error);
    throw error;
  }
};

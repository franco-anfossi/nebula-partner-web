import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

async function fetchToken() {
  try {
    const response = await axios.get("/api/get-token");
    return response.data.token;
  } catch (error) {
    console.error("Error al obtener el token:", error);
    return null;
  }
}

api.interceptors.request.use(
  async (config) => {
    const token = await fetchToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/api/auth/login";
    }
    return Promise.reject(error);
  },
);

export default api;

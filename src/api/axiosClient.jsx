import axios from "axios";
import jwtDecode from "jwt-decode";

const isTokenExpired = (token) => {
  if (!token) return true;
  const { exp } = jwtDecode(token);
  return Date.now() >= exp * 1000;
};

const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post("http://localhost:8000/api/v1/users/refresh-token", {
      refreshToken,
    });
    return response.data.accessToken;
  } catch (error) {
    console.error("Failed to refresh token:", error.response || error.message);
    return null;
  }
};

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true,
});

apiClient.interceptors.request.use(async (config) => {
  let accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (isTokenExpired(accessToken)) {
    accessToken = await refreshAccessToken(refreshToken);
    if (!accessToken) {
      localStorage.clear();
      window.location.href = "/login";
      return Promise.reject(new Error("Session expired"));
    }
    localStorage.setItem("accessToken", accessToken);
  }

  config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
});

export default apiClient;

import axios from "axios";

const baseUrl = "https://anonymous-image.onrender.com/";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ✅ REQUEST INTERCEPTOR: Always set fresh access token before sending request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `JWT ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Internal variables for refresh logic
let isRefreshing = false;
let refreshSubscribers = [];

const onTokenRefreshed = (accessToken) => {
  refreshSubscribers.forEach((callback) => callback(accessToken));
  refreshSubscribers = [];
};

const addRefreshSubscriber = (callback) => {
  refreshSubscribers.push(callback);
};

// ✅ RESPONSE INTERCEPTOR: Handle expired token, refresh and retry original request
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (typeof error.response === "undefined") {
      alert("A server/network error occurred. Check CORS or server status.");
      return Promise.reject(error);
    }

    // If refresh fails (usually when token is invalid or expired)
    if (
      error.response.status === 401 &&
      originalRequest.url === baseUrl + "token/refresh/"
    ) {
      window.location.href = "/login/";
      return Promise.reject(error);
    }

    // Token expired — try to refresh
    if (
      error.response.data?.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem("refresh_token");

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));
        const now = Math.ceil(Date.now() / 1000);

        if (tokenParts.exp > now) {
          if (!isRefreshing) {
            isRefreshing = true;

            return axiosInstance
              .post("token/refresh/", { refresh: refreshToken })
              .then((res) => {
                const newAccess = res.data.access;
                const newRefresh = res.data.refresh;

                localStorage.setItem("access_token", newAccess);
                localStorage.setItem("refresh_token", newRefresh);

                axiosInstance.defaults.headers["Authorization"] = `JWT ${newAccess}`;
                originalRequest.headers["Authorization"] = `JWT ${newAccess}`;

                onTokenRefreshed(newAccess);
                return axiosInstance(originalRequest);
              })
              .catch((err) => {
                console.error("Token refresh failed:", err);
                window.location.href = "/login/";
                return Promise.reject(err);
              })
              .finally(() => {
                isRefreshing = false;
              });
          } else {
            // Queue requests while token is being refreshed
            return new Promise((resolve) => {
              addRefreshSubscriber((newAccessToken) => {
                originalRequest.headers["Authorization"] = `JWT ${newAccessToken}`;
                resolve(axiosInstance(originalRequest));
              });
            });
          }
        } else {
          console.log("Refresh token expired.");
          window.location.href = "/login/";
        }
      } else {
        console.log("No refresh token available.");
        window.location.href = "/login/";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

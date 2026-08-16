// ─────────────────────────────────────────
//  Axios Instance with JWT Interceptors
// ─────────────────────────────────────────
import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Vite proxies this to http://localhost:5000/api
});

// ── Request Interceptor: Attach JWT token ──
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

// ── Response Interceptor: Handle 401 globally ──
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // If token is expired or invalid, force logout
    if (error.response?.status === 401) {
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

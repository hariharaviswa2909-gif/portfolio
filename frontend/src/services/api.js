import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '/api' : 'http://localhost:5000/api');

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.response.use(
  response => response.data,
  error => {
    const message = error.response?.data?.message || 'Something went wrong';
    return Promise.reject(new Error(message));
  }
);

export const submitContactForm = (data) => api.post('/contact', data);
export const getProjects = () => api.get('/projects');
export const getSkills = () => api.get('/skills');
export const getExperience = () => api.get('/experience');
export const checkHealth = () => api.get('/health');

export default api;

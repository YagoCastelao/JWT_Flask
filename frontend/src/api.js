import axios from 'axios'

const api = axios.create({baseURL: 'http://localhost:5000',})

export const register = (username, password) => {
  return api.post("/register", { username, password });
};

export const login = (username, password) => {
  return api.post("/login", { username, password });
};

export const getProtectedData = (token) => {
  return api.get("/protected", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
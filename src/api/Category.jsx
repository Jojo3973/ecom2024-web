import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const createCategory = async (token, form) => {
  return axios.post(`${API}/api/category`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const listCategory = async () => {
  return axios.get(`${API}/api/category`);
};

export const removeCategory = async (token, id) => {
  return axios.delete(`${API}/api/category/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};